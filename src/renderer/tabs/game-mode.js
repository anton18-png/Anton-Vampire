import { toast } from '../app.js';
import { papirusUrl } from '../utils/icons.js';

/* ------------------------------------------------------------
   Хелперы
   ------------------------------------------------------------ */
function getProjectRoot() {
  let p = decodeURIComponent(location.pathname);
  if (p.startsWith('/')) p = p.slice(1);
  const idx = p.lastIndexOf('/');
  return idx >= 0 ? p.slice(0, idx) : p;
}

function iconUrl(category, name) {
  const root = getProjectRoot();
  const path = `${root}/assets/papirus/${category}/${name}.ico`.replace(/\\/g, '/');
  return `file://${path}`;
}

/* ------------------------------------------------------------
   Имена bat-скриптов
   ------------------------------------------------------------ */
const APPLY_BAT   = 'GameMode/Игровой режим.bat';
const REVERT_BAT  = 'GameMode/Откат игрового режима.bat';
const BACKUP_BAT  = 'GameMode/Бэкап служб.bat';
const RESTORE_BAT = 'GameMode/Восстановить службы.bat';
const ENABLE_BAT  = 'GameMode/Включить службы.bat';

const LAPTOP_DISABLE_BAT = 'GameMode/Отключение служб ноутбуков и планшетов (ТОЛЬКО ДЛЯ ПК).bat';
const LAPTOP_ENABLE_BAT  = 'GameMode/Включение служб ноутбуков и планшетов.bat';

/* ------------------------------------------------------------
   Твики питания (что реально делает Игровой режим.bat)
   ------------------------------------------------------------ */
const POWER_TWEAKS = [
  { icon: '⏱',  name: 'Таймауты AC / DC',              desc: 'Отключает засыпание монитора, диска, standby и гибернации и от сети, и от батареи.' },
  { icon: '🔥',  name: 'CPU Throttle (sub_processor)',  desc: '7 настроек: Processor performance boost mode, decrease/increase time, core parking и др. Держит CPU на максимуме.' },
  { icon: '🚫',  name: 'Power Throttling Off',          desc: 'Отключает фоновое троттлинг-ограничение процессов Windows.' },
  { icon: '⏰',  name: 'Dynamic Tick Off',              desc: 'bcdedit /set disabledynamictick yes — отключает динамический системный таймер (меньше лагов ввода).' },
  { icon: '🔌',  name: 'USB Power Management',          desc: 'DisableLPM, D3ColdSupported=0, Ceip=0 для USBHUB3 и usbccgp. Убирает засыпание USB-устройств.' },
  { icon: '💳',  name: 'PCI D3Cold',                    desc: 'D3ColdSupported=0 для службы pci — запрещает устройствам уходить в глубокий сон D3Cold.' },
  { icon: '📓',  name: 'Журналы питания',               desc: 'Отключает логи SleepStudy, Kernel-Processor-Power и UserModePowerService (меньше фоновой записи).' },
  { icon: '✅',  name: 'Применение схемы',              desc: 'powercfg -setactive SCHEME_CURRENT — финальное применение активной схемы.' },
];

/* ------------------------------------------------------------
   Каталог служб Game Mode
   ------------------------------------------------------------ */
const SERVICE_CATALOG = [
  {
    icon: '📊', name: 'Телеметрия и диагностика',
    desc: 'Сбор телеметрии, диагностические хосты, отчёты об ошибках, Performance Logs. Пользы пользователю не несут.',
    services: ['DiagTrack','dmwappushservice','diagnosticshub.standardcollector.service','diagsvc','DPS','WdiServiceHost','WdiSystemHost','pla','wmiApSrv','Wecsvc','WerSvc','wercplsupport','TroubleshootingSvc','Telemetry','PcaSvc','DusmSvc','DsSvc','DSSvc','kdnic','ndu','PimIndexMaintenanceSvc'],
  },
  {
    icon: '🔄', name: 'Обновления, Store и Edge',
    desc: 'Центр обновления, доставка, установка приложений Store, лицензирование, Edge Update.',
    services: ['wuauserv','UsoSvc','WaaSMedicSvc','BITS','DoSvc','InstallService','ClipSVC','LicenseManager','PushToInstall','AppXSvc','AppReadiness','AppVClient','Appinfo','AppIDSvc','AppMgmt','edgeupdate','edgeupdatem','MicrosoftEdgeElevationService'],
  },
  {
    icon: '🌐', name: 'Сеть и общий доступ',
    desc: 'SMB-шары, DNS, обнаружение в сети, RPC-локатор, Dnscache, IPsec, ICS. ⚠️ Отключение рвёт сеть и Home-группу.',
    services: ['LanmanServer','LanmanWorkstation','NetSetupSvc','NetTcpPortSharing','Netlogon','Netman','netprofm','NcaSvc','NcbService','NcdAutoSetup','NlaSvc','nsi','rdbss','mrxsmb','mrxsmb20','srv2','KSecPkg','Eaphost','IKEEXT','PolicyAgent','SharedAccess','SSDPSRV','upnphost','fdPHost','FDResPub','lltdsvc','lmhosts','NetBT','Dnscache','iphlpsvc','IpxlatCfgSvc','dot3svc','WebClient','Wcmsvc','wcncsvc','WinHttpAutoProxySvc','WEPHOSTSVC','SNMPTRAP','WFDSConMgrSvc','RpcLocator','RpcEptMapper','RpcSs'],
  },
  {
    icon: '🔐', name: 'VPN и удалённый доступ',
    desc: 'RAS, SSTP, PPTP, L2TP, IKEv2, Routing and Remote Access.',
    services: ['RasAuto','RasMan','RemoteAccess','SstpSvc','PptpMiniport','RasAgileVpn','RasPppoe','RasSstp','Rasl2tp'],
  },
  {
    icon: '📡', name: 'Bluetooth и беспроводные',
    desc: 'Все Bth*, профили A2DP/AVCTP/HFP, RFCOMM, USB-BT. Не нужны, если не пользуешься BT-устройствами.',
    services: ['BTAGService','BthA2dp','BthAvctpSvc','BthEnum','bthserv','BthHFEnum','BthLEEnum','BthMini','BTHMODEM','BthPan','BTHPORT','BTHUSB','BluetoothUserService','HidBth','Microsoft_Bluetooth_AvrcpTransport','RFCOMM'],
  },
  {
    icon: '🖨️', name: 'Печать, сканеры, камеры',
    desc: 'Диспетчер печати, сканеры WIA, камера FrameServer, USB-принтеры.',
    services: ['Spooler','PrintNotify','PrintWorkflowUserSvc','usbprint','McpManagementService','PrintScanBrokerService','PrintDeviceConfigurationService','stisvc','FrameServer','FrameServerMonitor','WiaRpc','Fax'],
  },
  {
    icon: '🎮', name: 'Xbox и игры',
    desc: 'Xbox Live Auth, GameSave, Network, Accessory, Game DVR, CaptureService.',
    services: ['BcastDVRUserService','XblAuthManager','XblGameSave','XboxGipSvc','XboxNetApiSvc','CaptureService'],
  },
  {
    icon: '📍', name: 'Датчики, геолокация, восприятие',
    desc: 'Геолокация, датчики, Mixed Reality, симуляция восприятия, родительский контроль.',
    services: ['lfsvc','SensorDataService','SensorService','SensrSvc','NaturalAuthentication','perceptionsimulation','spectrum','ParentalControls'],
  },
  {
    icon: '🛡️', name: 'Безопасность и шифрование',
    desc: 'Defender, Firewall, TPM, BitLocker-ключи, UAC, Event Log, UASP. ⚠️ Отключение оставит систему без защиты.',
    services: ['WinDefend','SecurityHealthService','WdNisSvc','Sense','wscsvc','SgrmBroker','mpssvc','BFE','KeyIso','KtmRm','VaultSvc','SCPolicySvc','SCardSvr','ScDeviceEnum','seclogon','EventLog','EventSystem','SENS','SystemEventsBroker','sppsvc'],
  },
  {
    icon: '💻', name: 'Виртуализация, WSL, Hyper-V',
    desc: 'Hyper-V IC, обмен данными с хостом, WSL. Не нужны без виртуалок и WSL.',
    services: ['HvHost','vmicguestinterface','vmicheartbeat','vmickvpexchange','vmicrdv','vmicshutdown','vmictimesync','vmicvmsession','vmicvss','WslService','UdkUserSvc','uhssvc'],
  },
  {
    icon: '🎵', name: 'Мультимедиа и UI',
    desc: 'WMP Sharing, QWAVE, Mixed Reality, тач-клавиатура, темы, уведомления, буфер обмена, HID.',
    services: ['WMPNetworkSvc','QWAVE','MixedRealityOpenXRSvc','SharedRealitySvc','TabletInputService','Themes','DispBrokerDesktopSvc','DisplayEnhancementService','GraphicsPerfSvc','cbdhsvc','hidserv','LxpSvc','MessagingService','SmsRouter','TokenBroker','WalletService','ShellHWDetection','embeddedmode','AarSvc'],
  },
  {
    icon: '🔌', name: 'Драйверы, ядро, питание',
    desc: 'ACPI-драйверы, bam/dam, Beep, CldFlt, GpuEnergyDrv, WmiAcpi, Power. ⚠️ Power — критично.',
    services: ['acpiex','acpipagr','AcpiPmi','acpitime','bam','dam','Beep','CldFlt','GpuEnergyDrv','intelpmt','PRM','rdyboost','WmiAcpi','Power'],
  },
  {
    icon: '🏢', name: 'Сторонние (NVIDIA, Google, Intel, OEM)',
    desc: 'NVIDIA Display/Telemetry, Google Update, Chrome Elevation, TeamViewer, Intel cphs/cplspcon, OEM-службы.',
    services: ['NVDisplay.ContainerLocalSystem','NvTelemetryContainer','GoogleChromeElevationService','gupdate','gupdatem','TeamViewer','xTendSoftAPService','xTendUtilityService','KAPSService','KNDBWM','cphs','cplspcon','UCPD'],
  },
  {
    icon: '📦', name: 'Прочие Windows-службы',
    desc: 'Остальные службы из BoosterX/SystemX/XOS/VainOS/SynergyOS/RapidOS/AtlasOS/ImmortalOS.',
    services: [
      'AJRouter','ALG','AppMgmt','AssignedAccessManagerSvc','autotimesvc','AxInstSV','BDESVC','CertPropSvc','CloudBackupRestoreSvc','CloudIdSvc','COMSysApp','ConsentUxUserSvc','CredentialEnrollmentManagerUserSvc','CscService','defragsvc','DeviceAssociationBrokerSvc','DeviceAssociationService','DeviceInstall','DevicePickerUserSvc','DevicesFlowUserSvc','DevQueryBroker','DmEnrollmentSvc','DsmSvc','EFS','EntAppSvc','fhsvc','FontCache','FontCache3.0.0.0','gpsvc','LicenseManager','MapsBroker','MSDTC','MSiSCSI','msiserver','OneSyncSvc','p2pimsvc','p2psvc','PeerDistSvc','PerfHost','PhoneSvc','PlugPlay','PNRPAutoReg','PNRPsvc','ProfSvc','PushToInstall','RetailDemo','RmSvc','SamSs','Schedule','SDRSVC','SEMgrSvc','shpamsvc','smphost','ssh-agent','StateRepository','StorSvc','svsvc','swprv','SysMain','TapiSrv','TermService','TieringEngineService','TimeBrokerSvc','TrkWks','TrustedInstaller','tzautoupdate','UevAgentService','UmRdpService','UnistoreSvc','UserDataSvc','UserManager','VacSvc','vds','VSS','vwififlt','W32Time','WaaSMedicSvc','WarpJITSvc','WbioSrvc','Winmgmt','WinRM','wisvc','WlanSvc','wlidsvc','wlpasvc','WManSvc','WpcMonSvc','WPDBusEnum','WpnService','WpnUserService','WwanSvc',
    ],
  },
];

const HARDCORE_SERVICES = Array.from(
  new Set(SERVICE_CATALOG.flatMap(cat => cat.services))
).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

/* ------------------------------------------------------------
   Хелпер: разметка ползунка
   ------------------------------------------------------------ */
function renderSwitch({ id, title, description, warning = '', defaultOn = true }) {
  const bg   = defaultOn ? '#2e7d32' : '#3a3a3a';
  const left = defaultOn ? '23px'    : '3px';
  return `
    <div style="margin-top:16px;padding:12px;background:var(--bg-alt);border-radius:8px;">
      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none">
        <span class="switch" id="${id}" role="switch" aria-checked="${defaultOn}" tabindex="0"
              style="position:relative;display:inline-block;width:42px;height:22px;flex:0 0 auto;
                     background:${bg};border-radius:22px;transition:background .15s;outline:none;"
              data-on="${defaultOn}">
          <span class="switch-knob" style="position:absolute;top:3px;left:${left};
                width:16px;height:16px;border-radius:50%;background:#fff;transition:left .15s;"></span>
        </span>
        <span>
          <b>${title}</b>
          <div style="color:var(--fg-muted);font-size:12px;line-height:1.4;margin-top:2px">
            ${description}
          </div>
          ${warning ? `<div style="color:#e57373;font-size:12px;line-height:1.4;margin-top:4px">${warning}</div>` : ''}
        </span>
      </label>
    </div>
  `;
}

/* ------------------------------------------------------------
   Хелпер: логика переключения
   ------------------------------------------------------------ */
function setupSwitch(switchEl) {
  const knobEl = switchEl.querySelector('.switch-knob');

  function setSwitch(on) {
    switchEl.dataset.on = on ? 'true' : 'false';
    switchEl.setAttribute('aria-checked', on ? 'true' : 'false');
    switchEl.style.background = on ? '#2e7d32' : '#3a3a3a';
    knobEl.style.left = on ? '23px' : '3px';
  }
  function isSwitchOn() { return switchEl.dataset.on === 'true'; }
  function toggleSwitch() { setSwitch(!isSwitchOn()); }

  switchEl.addEventListener('click', toggleSwitch);
  switchEl.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleSwitch(); }
  });
  setSwitch(isSwitchOn());

  return { setSwitch, isSwitchOn, toggleSwitch };
}

/* ------------------------------------------------------------
   Рендер вкладки
   ------------------------------------------------------------ */
export async function renderGameMode() {
  const tabsNav = document.getElementById('tabs-nav');
  const content = document.getElementById('tab-content');
  tabsNav.innerHTML = '';
  content.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'split';

  /* ================= ИКОНКИ ================= */
  const gameIcon  = papirusUrl('devices', 'gamepad');
  const cpuIcon   = papirusUrl('devices', 'cpu');
  const powerIcon = papirusUrl('devices', 'battery');

  const ICON_STYLE =
    'width:1.2em !important;height:1.2em !important;' +
    'vertical-align:-0.2em;margin-right:6px;display:inline-block;' +
    'object-fit:contain;';

  /* ================= LEFT PANEL ================= */
  const left = document.createElement('div');
  left.className = 'panel';

  left.innerHTML = `
    <h3 class="game-title">
      <img class="game-title-icon" src="${gameIcon}" alt="" style="${ICON_STYLE}"
           onerror="this.style.display='none'">
      <span>Игровой режим (Game Mode)</span>
    </h3>
    <p>Комплексная оптимизация Windows для максимальной производительности в играх.</p>

    <div style="margin-top: 16px">
      <button class="btn success" id="btn-game-apply" style="width:100%;margin-bottom:8px">▶ Применить игровой режим</button>
      <button class="btn danger"  id="btn-game-revert" style="width:100%">↩ Откатить игровой режим</button>
    </div>

    ${renderSwitch({
      id: 'game-backup-switch',
      title: 'Бэкап служб перед запуском',
      description: 'Запоминает текущее состояние служб, чтобы при откате включить обратно только те, что были выключены именно игровым режимом.',
      defaultOn: true,
    })}

    ${renderSwitch({
      id: 'game-laptop-switch',
      title: 'Отключать службы ноутбуков',
      description: 'Дополнительно отключает тачпада и драйвер батареи. При откате — включает обратно.',
      warning: '⚠️ НЕ ВКЛЮЧАЙТЕ НА НОУТБУКАХ!',
      defaultOn: false,
    })}

    <div style="margin-top:16px;padding:12px;background:var(--bg-alt);border-radius:8px;">
      <b>⚠️ Внимание</b>
      <ul style="margin:8px 0 0 16px;padding:0;color:var(--fg-muted);font-size:12px;line-height:1.6">
        <li>Запускать от имени администратора</li>
        <li>Создайте точку восстановления</li>
        <li>После применения не перезагружайте ПК</li>
      </ul>
    </div>

    <div id="game-status" style="margin-top:16px;color:var(--fg-muted);font-size:12px;white-space:pre-line"></div>
  `;
  wrap.appendChild(left);

  /* ================= RIGHT PANEL ================= */
  const right = document.createElement('div');
  right.className = 'panel';

  const totalUnique = HARDCORE_SERVICES.length;
  const totalRaw    = SERVICE_CATALOG.reduce((n, c) => n + c.services.length, 0);
  const dupCount    = totalRaw - totalUnique;

  /* --- Строитель карточек питания (копия стиля из вкладки Исправления) --- */
  function makePowerCard(tweak) {
    const card = document.createElement('div');
    card.className = 'apps-card';

    const icon = document.createElement('div');
    icon.className = 'apps-icon';
    icon.textContent = tweak.icon;

    const title = document.createElement('div');
    title.className = 'apps-name';
    title.textContent = tweak.name;

    const sub = document.createElement('div');
    sub.className = 'apps-sub fix-desc';
    sub.textContent = tweak.desc;

    const badges = document.createElement('div');
    badges.style.cssText = 'display:flex;gap:4px;flex-wrap:wrap;justify-content:center;min-height:14px;margin-top:2px;';

    const b = document.createElement('span');
    b.style.cssText = 'font-size:9.5px;font-weight:700;color:var(--success);background:color-mix(in srgb, var(--success) 15%, transparent);border:1px solid color-mix(in srgb, var(--success) 40%, transparent);padding:1px 6px;border-radius:6px;';
    b.textContent = '✓ активно';
    badges.appendChild(b);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'apps-run';
    btn.textContent = '✓ Включено';
    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.style.cursor = 'default';
    btn.style.pointerEvents = 'none';

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(sub);
    card.appendChild(badges);
    card.appendChild(btn);
    return card;
  }

  /* --- Секция 1: Твики питания --- */
  const powerSection = document.createElement('section');
  powerSection.className = 'apps-detected-section';
  powerSection.style.background = 'color-mix(in srgb, var(--card) 60%, transparent)';
  powerSection.style.borderColor = 'color-mix(in srgb, var(--border) 30%, transparent)';
  powerSection.style.marginBottom = '16px';

  const powerTitle = document.createElement('div');
  powerTitle.className = 'section-title';
  powerTitle.innerHTML = `<img src="${powerIcon}" style="${ICON_STYLE}" onerror="this.style.display='none'"> Твики питания в батнике`;
  powerSection.appendChild(powerTitle);

  const powerDesc = document.createElement('p');
  powerDesc.style.cssText = 'font-size:12px; color:var(--fg-muted); margin: -4px 0 12px 0;';
  powerDesc.innerHTML = `${POWER_TWEAKS.length} твиков применяются автоматически при запуске <code>Игровой режим.bat</code>.`;
  powerSection.appendChild(powerDesc);

  const powerGrid = document.createElement('div');
  powerGrid.className = 'apps-grid fixes-grid';
  POWER_TWEAKS.forEach(t => powerGrid.appendChild(makePowerCard(t)));
  powerSection.appendChild(powerGrid);

  right.appendChild(powerSection);

  /* --- Секция 2: Отключаемые службы --- */
  const servicesSection = document.createElement('section');
  servicesSection.className = 'apps-detected-section';
  servicesSection.style.background = 'color-mix(in srgb, var(--card) 60%, transparent)';
  servicesSection.style.borderColor = 'color-mix(in srgb, var(--border) 30%, transparent)';

  const servicesTitle = document.createElement('div');
  servicesTitle.className = 'section-title';
  servicesTitle.innerHTML = `<img src="${cpuIcon}" style="${ICON_STYLE}" onerror="this.style.display='none'"> Отключаемые службы (хардкор)`;
  servicesSection.appendChild(servicesTitle);

  const servicesDesc = document.createElement('p');
  servicesDesc.style.cssText = 'font-size:12px; color:var(--fg-muted); margin: -4px 0 12px 0;';
  servicesDesc.innerHTML = `
    ${totalUnique} уникальных служб будут переведены в <code>Start=4</code> (отключено).
    ${dupCount > 0 ? `<br><span style="color:var(--fg-muted);font-size:11px">В каталоге ${dupCount} дубликатов между категориями — в бэкап и запуск идут только уникальные.</span>` : ''}
  `;
  servicesSection.appendChild(servicesDesc);

  const controls = document.createElement('div');
  controls.style.cssText = 'display:flex;gap:8px;margin-bottom:12px';
  controls.innerHTML = `
    <button class="btn" id="btn-game-expand-all">Развернуть все</button>
    <button class="btn" id="btn-game-collapse-all">Свернуть все</button>
  `;
  servicesSection.appendChild(controls);

  const catalogEl = document.createElement('div');
  catalogEl.id = 'game-catalog';
  catalogEl.style.cssText = 'margin-top:8px;display:flex;flex-direction:column;gap:6px';
  servicesSection.appendChild(catalogEl);

  right.appendChild(servicesSection);
  wrap.appendChild(right);
  content.appendChild(wrap);

  /* ================= CATALOG RENDER ================= */
  SERVICE_CATALOG.forEach((cat) => {
    const item = document.createElement('details');
    item.style.cssText = 'background:var(--bg-alt);border-radius:8px;padding:10px 12px;';
    // ВАЖНО: Все категории свёрнуты по умолчанию (нет item.open = true)

    const summary = document.createElement('summary');
    summary.style.cssText = 'cursor:pointer;list-style:none;display:flex;align-items:center;gap:8px;user-select:none;';
    summary.innerHTML = `
      <span class="chevron" style="font-size:10px;color:var(--fg-muted);transition:transform .15s;display:inline-block;flex-shrink:0;">▶</span>
      <span style="font-size:16px">${cat.icon}</span>
      <b style="flex:1">${cat.name}</b>
      <span style="color:var(--fg-muted);font-size:12px">${cat.services.length}</span>
    `;
    item.appendChild(summary);

    item.addEventListener('toggle', () => {
      const chev = summary.querySelector('.chevron');
      if (chev) chev.style.transform = item.open ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    const descEl = document.createElement('div');
    descEl.style.cssText = 'color:var(--fg-muted);font-size:12px;line-height:1.4;margin:6px 0 8px;';
    descEl.textContent = cat.desc;
    item.appendChild(descEl);

    const list = document.createElement('div');
    list.style.cssText = 'columns:2;column-gap:16px;font-family:Consolas,monospace;font-size:11px;line-height:1.6;';
    list.innerHTML = cat.services
      .map(s => `<div style="break-inside:avoid">${s}</div>`)
      .join('');
    item.appendChild(list);

    catalogEl.appendChild(item);
  });

  /* ================= SWITCHES ================= */
  const backupSwitch = setupSwitch(left.querySelector('#game-backup-switch'));
  const laptopSwitch = setupSwitch(left.querySelector('#game-laptop-switch'));

  /* ================= EXPAND / COLLAPSE ================= */
  right.querySelector('#btn-game-expand-all').addEventListener('click', () => {
    right.querySelectorAll('details').forEach(d => d.open = true);
  });
  right.querySelector('#btn-game-collapse-all').addEventListener('click', () => {
    right.querySelectorAll('details').forEach(d => d.open = false);
  });

  /* ================= RUN HELPERS ================= */
  const statusEl = left.querySelector('#game-status');

  async function runBat(rel, label) {
    statusEl.textContent = `Запуск: ${label || rel}...`;
    await window.api.tweaks.run('tweaks/' + rel, { wait: true });
  }

  function summarize(wantBackup, wantLaptop, extra = '') {
    const parts = [];
    parts.push(wantBackup ? 'бэкап ✅' : 'бэкап ❌');
    if (wantLaptop) parts.push('ноутбучные службы ✅');
    if (extra) parts.push(extra);
    return parts.join(' · ');
  }

  /* ================= APPLY ================= */
  left.querySelector('#btn-game-apply').addEventListener('click', async () => {
    const wantBackup = backupSwitch.isSwitchOn();
    const wantLaptop = laptopSwitch.isSwitchOn();
    try {
      if (wantBackup) {
        await runBat(BACKUP_BAT, 'Бэкап служб');
      }
      await runBat(APPLY_BAT, 'Игровой режим');
      if (wantLaptop) {
        await runBat(LAPTOP_DISABLE_BAT, 'Отключение служб ноутбуков/планшетов');
      }
      statusEl.textContent = 'Готово. ' + summarize(wantBackup, wantLaptop);
      toast('Игровой режим применён', 'success');
    } catch (e) {
      statusEl.textContent = 'Ошибка: ' + e.message;
      toast('Ошибка: ' + e.message, 'error');
    }
  });

  /* ================= REVERT ================= */
  left.querySelector('#btn-game-revert').addEventListener('click', async () => {
    const wantBackup = backupSwitch.isSwitchOn();
    const wantLaptop = laptopSwitch.isSwitchOn();
    try {
      await runBat(REVERT_BAT, 'Откат игрового режима');
      if (wantLaptop) {
        await runBat(LAPTOP_ENABLE_BAT, 'Включение служб ноутбуков/планшетов');
      }
      if (wantBackup) {
        await runBat(RESTORE_BAT, 'Восстановление служб из бэкапа');
      } else {
        await runBat(ENABLE_BAT, 'Включение служб');
      }
      statusEl.textContent = 'Откат выполнен. ' + summarize(wantBackup, wantLaptop);
      toast('Игровой режим откатён', 'success');
    } catch (e) {
      statusEl.textContent = 'Ошибка: ' + e.message;
      toast('Ошибка: ' + e.message, 'error');
    }
  });
}