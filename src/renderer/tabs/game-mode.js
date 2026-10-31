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
  left.querySelector('#btn-game-apply').addEventListener('click', () => runGame('GameMode/Игровой режим.bat'));
  left.querySelector('#btn-game-revert').addEventListener('click', () => runGame('GameMode/Откат игрового режима.bat'));
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

  // ============ RUN ============
  async function runGame(rel) {
    const statusEl = left.querySelector('#game-status');
    statusEl.textContent = `Запуск: ${rel}...`;
    try {
      await window.api.tweaks.run('tweaks/' + rel, { wait: false });
      statusEl.textContent = 'Выполнено успешно.';
      toast('Готово', 'success');
    } catch (e) {
      statusEl.textContent = 'Ошибка: ' + e.message;
      toast('Ошибка: ' + e.message, 'error');
    }
  }
}