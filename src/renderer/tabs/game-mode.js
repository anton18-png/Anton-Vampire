import { toast } from '../app.js';
import { papirusUrl } from '../utils/icons.js';

/* ------------------------------------------------------------
   Хелпер для путей к иконкам
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
   Имена bat-скриптов (поправь под свои)
   ------------------------------------------------------------ */
const APPLY_BAT   = 'GameMode/Игровой режим.bat';
const REVERT_BAT  = 'GameMode/Откат игрового режима.bat';
const BACKUP_BAT  = 'GameMode/Бэкап служб.bat';
const RESTORE_BAT = 'GameMode/Восстановить службы.bat';
const ENABLE_BAT  = 'GameMode/Включить службы.bat';

const HARDCORE_SERVICES = [
  'AJRouter','ALG','AarSvc','AppIDSvc','AppMgmt','AppReadiness','AppVClient','AppXSvc',
  'Appinfo','AssignedAccessManagerSvc','AxInstSV','BDESVC','BFE','BITS','BTAGService',
  'BcastDVRUserService','BluetoothUserService','BrokerInfrastructure','BthAvctpSvc',
  'CDPSvc','CDPUserSvc','COMSysApp','CaptureService','CertPropSvc','ClipSVC',
  'ConsentUxUserSvc','CredentialEnrollmentManagerUserSvc','CscService','DPS',
  'DevQueryBroker','DeviceAssociationBrokerSvc','DeviceAssociationService',
  'DevicePickerUserSvc','DevicesFlowUserSvc','DiagTrack','DispBrokerDesktopSvc',
  'DisplayEnhancementService','DmEnrollmentSvc','Dnscache','DoSvc','DsSvc','DsmSvc',
  'DusmSvc','EFS','Eaphost','EntAppSvc','EventLog','EventSystem','FDResPub','FontCache',
  'FontCache3.0.0.0','FrameServer','GraphicsPerfSvc','HvHost','IKEEXT','InstallService',
  'IpxlatCfgSvc','KeyIso','KtmRm','LanmanServer','LanmanWorkstation','LicenseManager',
  'LxpSvc','MSDTC','MSiSCSI','MapsBroker','MessagingService','NaturalAuthentication',
  'NcaSvc','NcbService','NcdAutoSetup','NetSetupSvc','NetTcpPortSharing','Netlogon',
  'Netman','NgcCtnrSvc','NgcSvc','NlaSvc','OneSyncSvc','PNRPAutoReg','PNRPsvc','PcaSvc',
  'PeerDistSvc','PerfHost','PhoneSvc','PlugPlay','PolicyAgent','PrintNotify',
  'PrintWorkflowUserSvc','PushToInstall','QWAVE','RasAuto','RasMan','RemoteAccess',
  'RemoteRegistry','RetailDemo','RmSvc','RpcLocator','SCPolicySvc','SCardSvr','SDRSVC',
  'SEMgrSvc','SENS','SNMPTRAP','SSDPSRV','SamSs','ScDeviceEnum','Schedule',
  'SecurityHealthService','Sense','SensorDataService','SensorService','SensrSvc',
  'SessionEnv','SgrmBroker','SharedAccess','SharedRealitySvc','ShellHWDetection',
  'SmsRouter','Spooler','SstpSvc','StateRepository','StorSvc','SysMain',
  'TabletInputService','TapiSrv','TermService','Themes','TieringEngineService',
  'TimeBrokerSvc','TokenBroker','TrkWks','TroubleshootingSvc','TrustedInstaller',
  'UevAgentService','UmRdpService','UsoSvc','VSS','VacSvc','VaultSvc','W32Time',
  'WEPHOSTSVC','WFDSConMgrSvc','WManSvc','WPDBusEnum','WSearch','WaaSMedicSvc',
  'WalletService','WarpJITSvc','WbioSrvc','WdNisSvc','WdiServiceHost','WdiSystemHost',
  'WebClient','Wecsvc','WerSvc','WiaRpc','WinDefend','WinHttpAutoProxySvc','WinRM',
  'WlanSvc','WpcMonSvc','WpnService','WpnUserService','WwanSvc','XblAuthManager',
  'XblGameSave','XboxGipSvc','XboxNetApiSvc','autotimesvc','bthserv','cbdhsvc','defragsvc',
  'diagnosticshub.standardcollector.service','dmwappushservice','dot3svc','embeddedmode',
  'fdPHost','fhsvc','hidserv','icssvc','iphlpsvc','lfsvc','lltdsvc','lmhosts','mpssvc',
  'msiserver','netprofm','p2pimsvc','p2psvc','perceptionsimulation','pla','seclogon',
  'shpamsvc','smphost','spectrum','stisvc','svsvc','swprv','tzautoupdate','upnphost',
  'vds','vmicguestinterface','vmicheartbeat','vmickvpexchange','vmicrdv','vmicshutdown',
  'vmictimesync','vmicvmsession','vmicvss','wbengine','wcncsvc','wercplsupport','wisvc',
  'wlidsvc','wlpasvc','wmiApSrv','wscsvc','wuauserv'
];

export async function renderGameMode() {
  const tabsNav = document.getElementById('tabs-nav');
  const content = document.getElementById('tab-content');
  tabsNav.innerHTML = ''; content.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'split';

  // ============ LEFT PANEL ============
  const left = document.createElement('div');
  left.className = 'panel';

  const gameIcon = papirusUrl('devices', 'gamepad');
  const cpuIcon  = papirusUrl('devices', 'cpu');

  left.innerHTML = `
    <h3 class="game-title">
      <img class="game-title-icon" src="${gameIcon}" alt=""
           onerror="this.style.display='none'">
      <span>Игровой режим (Game Mode)</span>
    </h3>
    <p>Комплексная оптимизация Windows для максимальной производительности в играх.</p>

    <div style="margin-top: 16px">
      <button class="btn success" id="btn-game-apply" style="width:100%;margin-bottom:8px">▶ Применить игровой режим</button>
      <button class="btn danger"  id="btn-game-revert" style="width:100%">↩ Откатить игровой режим</button>
    </div>

    <!-- Ползунок бэкапа служб -->
    <div style="margin-top:16px;padding:12px;background:var(--bg-alt);border-radius:8px;">
      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none">
        <span class="switch" id="game-backup-switch" role="switch" aria-checked="true" tabindex="0"
              style="
                position:relative;display:inline-block;width:42px;height:22px;flex:0 0 auto;
                background:#3a3a3a;border-radius:22px;transition:background .15s;
                outline:none;"
              data-on="true">
          <span class="switch-knob" style="
            position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;
            background:#fff;transition:left .15s;"></span>
        </span>
        <span>
          <b>Бэкап служб перед запуском</b>
          <div style="color:var(--fg-muted);font-size:12px;line-height:1.4;margin-top:2px">
            Запоминает текущее состояние служб, чтобы при откате
            включить обратно только те, что были выключены именно игровым режимом.
          </div>
        </span>
      </label>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--bg-alt);border-radius:8px;">
      <b>⚠️ Внимание</b>
      <ul style="margin:8px 0 0 16px;padding:0;color:var(--fg-muted);font-size:12px;line-height:1.6">
        <li>Запускать от имени администратора</li>
        <li>Создайте точку восстановления</li>
        <li>После применения не перезагружайте ПК</li>
      </ul>
    </div>

    <div id="game-status" style="margin-top:16px;color:var(--fg-muted);font-size:12px"></div>
  `;
  wrap.appendChild(left);

  // ============ RIGHT PANEL ============
  const right = document.createElement('div');
  right.className = 'panel';

  right.innerHTML = `
    <h3 class="game-title">
      <img class="game-title-icon" src="${cpuIcon}" alt=""
           onerror="this.style.display='none'">
      <span>Отключаемые службы (хардкор)</span>
    </h3>
    <p>${HARDCORE_SERVICES.length} служб будут переведены в Start=4 (отключено).</p>
    <div style="columns: 3; column-gap: 12px; margin-top: 12px; font-family: Consolas, monospace; font-size: 11px; line-height: 1.5">
      ${HARDCORE_SERVICES.map(s => `<div>${s}</div>`).join('')}
    </div>
  `;
  wrap.appendChild(right);

  content.appendChild(wrap);

  // ============ SWITCH LOGIC ============
  const switchEl = left.querySelector('#game-backup-switch');
  const knobEl   = switchEl.querySelector('.switch-knob');

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
  setSwitch(true); // по умолчанию бэкап включён

  // ============ RUN HELPERS ============
  const statusEl = left.querySelector('#game-status');

  async function runBat(rel, label) {
    statusEl.textContent = `Запуск: ${label || rel}...`;
    await window.api.tweaks.run('tweaks/' + rel, { wait: true });
  }

  // ============ APPLY ============
  left.querySelector('#btn-game-apply').addEventListener('click', async () => {
    const wantBackup = isSwitchOn();
    try {
      if (wantBackup) {
        await runBat(BACKUP_BAT, 'Бэкап служб');
      }
      await runBat(APPLY_BAT, 'Игровой режим');
      statusEl.textContent = wantBackup
        ? 'Выполнено. Бэкап служб сохранён.'
        : 'Выполнено. Бэкап служб НЕ создавался.';
      toast('Игровой режим применён', 'success');
    } catch (e) {
      statusEl.textContent = 'Ошибка: ' + e.message;
      toast('Ошибка: ' + e.message, 'error');
    }
  });

  // ============ REVERT ============
  left.querySelector('#btn-game-revert').addEventListener('click', async () => {
    const wantBackup = isSwitchOn();
    try {
      await runBat(REVERT_BAT, 'Откат игрового режима');
      if (wantBackup) {
        // Восстанавливаем только те службы, что были отключены ДО Game Mode.
        await runBat(RESTORE_BAT, 'Восстановление служб из бэкапа');
        statusEl.textContent = 'Откат выполнен. Службы восстановлены из бэкапа.';
      } else {
        // Бэкапа нет — старое поведение: включаем всё, что есть в списке.
        await runBat(ENABLE_BAT, 'Включение служб');
        statusEl.textContent = 'Откат выполнен. Службы включены (без бэкапа).';
      }
      toast('Игровой режим откатён', 'success');
    } catch (e) {
      statusEl.textContent = 'Ошибка: ' + e.message;
      toast('Ошибка: ' + e.message, 'error');
    }
  });
}