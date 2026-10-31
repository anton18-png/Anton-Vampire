@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul
title xOS Playbook - Game Mode

net session >nul 2>&1 || (
  echo [!] Запустите от имени администратора.
  pause & exit /b 1
)

echo ================================================================================
echo                       xOS PLAYBOOK - ИГРОВОЙ РЕЖИМ
echo ================================================================================
echo.

REM ============================================================================
REM 1. ТАЙМАУТЫ AC / DC
REM ============================================================================
echo [1/8] Отключение таймаутов AC и DC...
powercfg /x monitor-timeout-ac 0    >nul 2>&1
powercfg /x disk-timeout-ac 0       >nul 2>&1
powercfg /x standby-timeout-ac 0    >nul 2>&1
powercfg /x hibernate-timeout-ac 0  >nul 2>&1
powercfg /x monitor-timeout-dc 0    >nul 2>&1
powercfg /x disk-timeout-dc 0       >nul 2>&1
powercfg /x standby-timeout-dc 0    >nul 2>&1
powercfg /x hibernate-timeout-dc 0  >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 2. CPU THROTTLE
REM ============================================================================
echo [2/8] Отключение CPU Throttle...
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\54533251-82be-4824-96c1-47b60b740d00\0cc5b647-c1df-4637-891a-dec35c318583" /v Attributes /t REG_DWORD /d 2 /f >nul 2>&1
powercfg -SETACVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 0cc5b647-c1df-4637-891a-dec35c318583 100 >nul 2>&1
powercfg -SETDCVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 0cc5b647-c1df-4637-891a-dec35c318583 100 >nul 2>&1

reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\54533251-82be-4824-96c1-47b60b740d00\ea062031-0e34-4ff1-9b6d-eb1059334028" /v Attributes /t REG_DWORD /d 2 /f >nul 2>&1
powercfg -SETACVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 ea062031-0e34-4ff1-9b6d-eb1059334028 100 >nul 2>&1
powercfg -SETDCVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 ea062031-0e34-4ff1-9b6d-eb1059334028 100 >nul 2>&1

reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\54533251-82be-4824-96c1-47b60b740d00\943c8cb6-6f93-4227-ad87-e9a3feec08d1" /v Attributes /t REG_DWORD /d 2 /f >nul 2>&1
powercfg -SETACVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 943c8cb6-6f93-4227-ad87-e9a3feec08d1 100 >nul 2>&1
powercfg -SETDCVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 943c8cb6-6f93-4227-ad87-e9a3feec08d1 100 >nul 2>&1

reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\54533251-82be-4824-96c1-47b60b740d00\f7277c87-9043-4248-9e8d-db20e412c751" /v Attributes /t REG_DWORD /d 2 /f >nul 2>&1
powercfg -SETACVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 f7277c87-9043-4248-9e8d-db20e412c751 0 >nul 2>&1
powercfg -SETDCVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 f7277c87-9043-4248-9e8d-db20e412c751 0 >nul 2>&1

reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\54533251-82be-4824-96c1-47b60b740d00\df142941-20f1-4cc0-928d-fde8c3378dce" /v Attributes /t REG_DWORD /d 2 /f >nul 2>&1
powercfg -SETACVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 df142941-20f1-4cc0-928d-fde8c3378dce 0 >nul 2>&1
powercfg -SETDCVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 df142941-20f1-4cc0-928d-fde8c3378dce 0 >nul 2>&1

reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\54533251-82be-4824-96c1-47b60b740d00\a55612aa-f624-42c6-a443-7397d064c04f" /v Attributes /t REG_DWORD /d 2 /f >nul 2>&1
powercfg -SETACVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 a55612aa-f624-42c6-a443-7397d064c04f 0 >nul 2>&1
powercfg -SETDCVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 a55612aa-f624-42c6-a443-7397d064c04f 0 >nul 2>&1

reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\54533251-82be-4824-96c1-47b60b740d00\2430ab6f-a520-44a2-9601-f7f23b5134b1" /v Attributes /t REG_DWORD /d 2 /f >nul 2>&1
powercfg -SETACVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 2430ab6f-a520-44a2-9601-f7f23b5134b1 0 >nul 2>&1
powercfg -SETDCVALUEINDEX SCHEME_CURRENT 54533251-82be-4824-96c1-47b60b740d00 2430ab6f-a520-44a2-9601-f7f23b5134b1 0 >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 3. POWER THROTTLING + DYNAMIC TICK
REM ============================================================================
echo [3/8] Отключение Power Throttling и Dynamic Tick...
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerThrottling" /v PowerThrottlingOff /t REG_DWORD /d 1 /f >nul 2>&1
bcdedit /set disabledynamictick yes >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 4. USB POWER MANAGEMENT
REM ============================================================================
echo [4/8] Отключение USB power management...
reg add "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v DisableLPM               /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v D3ColdSupported          /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v Ceip                    /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v DisableSelectiveSuspendUI /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\usbccgp\Parameters" /v D3ColdSupported          /t REG_DWORD /d 0 /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 5. PCI D3COLD
REM ============================================================================
echo [5/8] Отключение PCI D3Cold...
reg add "HKLM\SYSTEM\CurrentControlSet\Services\pci\Parameters" /v D3ColdSupported /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\pci\Parameters" /v D3ColdSupport  /t REG_DWORD /d 0 /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 6. ОТКЛЮЧЕНИЕ СЛУЖБ (HARDCORE) — только те, что ещё НЕ отключены
REM ============================================================================
echo [6/8] Отключение служб (только те, что ещё не отключены)...

set "SERVICES=AJRouter ALG AarSvc AppIDSvc AppMgmt AppReadiness AppVClient AppXSvc Appinfo AssignedAccessManagerSvc AxInstSV BDESVC BFE BITS BTAGService BcastDVRUserService BluetoothUserService BrokerInfrastructure BthAvctpSvc CDPSvc CDPUserSvc COMSysApp CaptureService CertPropSvc ClipSVC ConsentUxUserSvc CredentialEnrollmentManagerUserSvc CscService DPS DevQueryBroker DeviceAssociationBrokerSvc DeviceAssociationService DevicePickerUserSvc DevicesFlowUserSvc DiagTrack DispBrokerDesktopSvc DisplayEnhancementService DmEnrollmentSvc Dnscache DoSvc DsSvc DsmSvc DusmSvc EFS Eaphost EntAppSvc EventLog EventSystem FDResPub FontCache FontCache3.0.0.0 FrameServer GraphicsPerfSvc HvHost IKEEXT InstallService IpxlatCfgSvc KeyIso KtmRm LanmanServer LanmanWorkstation LicenseManager LxpSvc MSDTC MSiSCSI MapsBroker MessagingService NaturalAuthentication NcaSvc NcbService NcdAutoSetup NetSetupSvc NetTcpPortSharing Netlogon Netman NgcCtnrSvc NgcSvc NlaSvc OneSyncSvc PNRPAutoReg PNRPsvc PcaSvc PeerDistSvc PerfHost PhoneSvc PlugPlay PolicyAgent PrintNotify PrintWorkflowUserSvc PushToInstall QWAVE RasAuto RasMan RemoteAccess RemoteRegistry RetailDemo RmSvc RpcLocator SCPolicySvc SCardSvr SDRSVC SEMgrSvc SENS SNMPTRAP SSDPSRV SamSs ScDeviceEnum Schedule SecurityHealthService Sense SensorDataService SensorService SensrSvc SessionEnv SgrmBroker SharedAccess SharedRealitySvc ShellHWDetection SmsRouter Spooler SstpSvc StateRepository StorSvc SysMain TabletInputService TapiSrv TermService Themes TieringEngineService TimeBrokerSvc TokenBroker TrkWks TroubleshootingSvc TrustedInstaller UevAgentService UmRdpService UsoSvc VSS VacSvc VaultSvc W32Time WEPHOSTSVC WFDSConMgrSvc WManSvc WPDBusEnum WSearch WaaSMedicSvc WalletService WarpJITSvc WbioSrvc WdNisSvc WdiServiceHost WdiSystemHost WebClient Wecsvc WerSvc WiaRpc WinDefend WinHttpAutoProxySvc WinRM WlanSvc WpcMonSvc WpnService WpnUserService WwanSvc XblAuthManager XblGameSave XboxGipSvc XboxNetApiSvc autotimesvc bthserv cbdhsvc defragsvc diagnosticshub.standardcollector.service dmwappushservice dot3svc embeddedmode fdPHost fhsvc hidserv icssvc iphlpsvc lfsvc lltdsvc lmhosts mpssvc msiserver netprofm p2pimsvc p2psvc perceptionsimulation pla seclogon shpamsvc smphost spectrum stisvc svsvc swprv tzautoupdate upnphost vds vmicguestinterface vmicheartbeat vmickvpexchange vmicrdv vmicshutdown vmictimesync vmicvmsession vmicvss wbengine wcncsvc wercplsupport wisvc wlidsvc wlpasvc wmiApSrv wscsvc wuauserv"

set "COUNT=0"
set "SKIP=0"
for %%S in (%SERVICES%) do (
    set "CUR="
    for /f "tokens=3" %%A in ('reg query "HKLM\SYSTEM\CurrentControlSet\Services\%%S" /v Start 2^>nul ^| findstr /i "Start"') do set "CUR=%%A"
    if not defined CUR (
        rem Службы нет в системе — пропускаем
        set /a SKIP+=1
    ) else (
        if "!CUR!"=="0x4" (
            rem Уже отключена (пользователь сам) — не трогаем
            set /a SKIP+=1
        ) else (
            reg add "HKLM\SYSTEM\CurrentControlSet\Services\%%S" /v Start /t REG_DWORD /d 4 /f >nul 2>&1
            set /a COUNT+=1
        )
    )
)
echo [OK] Отключено: %COUNT%, пропущено (уже 4 / нет службы): %SKIP%
echo.

REM ============================================================================
REM 7. ЖУРНАЛЫ
REM ============================================================================
echo [7/8] Отключение журналов SleepStudy / Kernel-Processor-Power / UserModePowerService...
wevtutil sl Microsoft-Windows-SleepStudy/Diagnostic /e:false >nul 2>&1
wevtutil sl Microsoft-Windows-Kernel-Processor-Power/Diagnostic /e:false >nul 2>&1
wevtutil sl Microsoft-Windows-UserModePowerService/Diagnostic /e:false >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 8. ФИНАЛЬНОЕ ПРИМЕНЕНИЕ СХЕМЫ
REM ============================================================================
echo [8/8] Применение активной схемы питания...
powercfg -setactive SCHEME_CURRENT >nul 2>&1
echo [OK]
echo.

echo ================================================================================
echo                       ГОТОВО! ИГРОВОЙ РЕЖИМ ПРИМЕНЁН
echo ================================================================================
echo.
echo Что сделано:
echo   - Отключены таймауты монитора/диска/сна/гибернации (AC и DC)
echo   - Отключён CPU Throttle
echo   - Отключён Power Throttling и Dynamic Tick
echo   - Отключён USB power management и PCI D3Cold
echo   - Отключены хардкорные службы (те, что ещё не были отключены)
echo   - Отключены журналы SleepStudy / Kernel-Processor-Power / UserModePowerService
echo   - Применена активная схема питания
echo.
echo [OK] Рекомендуется перезагрузка.
echo.
pause
endlocal