@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul

rem ============================================================
rem  Резервный вариант: включает ВСЕ службы из списка (Start=3 = Manual).
rem  Используется, когда бэкапа нет — старое поведение отката.
rem  ВНИМАНИЕ: включит и те службы, что были отключены ДО Game Mode.
rem ============================================================

set "SERVICES=AJRouter ALG AarSvc AppIDSvc AppMgmt AppReadiness AppVClient AppXSvc Appinfo AssignedAccessManagerSvc AxInstSV BDESVC BFE BITS BTAGService BcastDVRUserService BluetoothUserService BrokerInfrastructure BthAvctpSvc CDPSvc CDPUserSvc COMSysApp CaptureService CertPropSvc ClipSVC ConsentUxUserSvc CredentialEnrollmentManagerUserSvc CscService DPS DevQueryBroker DeviceAssociationBrokerSvc DeviceAssociationService DevicePickerUserSvc DevicesFlowUserSvc DiagTrack DispBrokerDesktopSvc DisplayEnhancementService DmEnrollmentSvc Dnscache DoSvc DsSvc DsmSvc DusmSvc EFS Eaphost EntAppSvc EventLog EventSystem FDResPub FontCache FontCache3.0.0.0 FrameServer GraphicsPerfSvc HvHost IKEEXT InstallService IpxlatCfgSvc KeyIso KtmRm LanmanServer LanmanWorkstation LicenseManager LxpSvc MSDTC MSiSCSI MapsBroker MessagingService NaturalAuthentication NcaSvc NcbService NcdAutoSetup NetSetupSvc NetTcpPortSharing Netlogon Netman NgcCtnrSvc NgcSvc NlaSvc OneSyncSvc PNRPAutoReg PNRPsvc PcaSvc PeerDistSvc PerfHost PhoneSvc PlugPlay PolicyAgent PrintNotify PrintWorkflowUserSvc PushToInstall QWAVE RasAuto RasMan RemoteAccess RemoteRegistry RetailDemo RmSvc RpcLocator SCPolicySvc SCardSvr SDRSVC SEMgrSvc SENS SNMPTRAP SSDPSRV SamSs ScDeviceEnum Schedule SecurityHealthService Sense SensorDataService SensorService SensrSvc SessionEnv SgrmBroker SharedAccess SharedRealitySvc ShellHWDetection SmsRouter Spooler SstpSvc StateRepository StorSvc SysMain TabletInputService TapiSrv TermService Themes TieringEngineService TimeBrokerSvc TokenBroker TrkWks TroubleshootingSvc TrustedInstaller UevAgentService UmRdpService UsoSvc VSS VacSvc VaultSvc W32Time WEPHOSTSVC WFDSConMgrSvc WManSvc WPDBusEnum WSearch WaaSMedicSvc WalletService WarpJITSvc WbioSrvc WdNisSvc WdiServiceHost WdiSystemHost WebClient Wecsvc WerSvc WiaRpc WinDefend WinHttpAutoProxySvc WinRM WlanSvc WpcMonSvc WpnService WpnUserService WwanSvc XblAuthManager XblGameSave XboxGipSvc XboxNetApiSvc autotimesvc bthserv cbdhsvc defragsvc diagnosticshub.standardcollector.service dmwappushservice dot3svc embeddedmode fdPHost fhsvc hidserv icssvc iphlpsvc lfsvc lltdsvc lmhosts mpssvc msiserver netprofm p2pimsvc p2psvc perceptionsimulation pla seclogon shpamsvc smphost spectrum stisvc svsvc swprv tzautoupdate upnphost vds vmicguestinterface vmicheartbeat vmickvpexchange vmicrdv vmicshutdown vmictimesync vmicvmsession vmicvss wbengine wcncsvc wercplsupport wisvc wlidsvc wlpasvc wmiApSrv wscsvc wuauserv"

set "COUNT=0"
echo Включение служб (Start=3, Manual) ...
for %%S in (%SERVICES%) do (
    reg add "HKLM\SYSTEM\CurrentControlSet\Services\%%S" /v Start /t REG_DWORD /d 3 /f >nul 2>&1
    if not errorlevel 1 set /a COUNT+=1
)
echo.
echo Готово. Обработано служб: %COUNT%
endlocal