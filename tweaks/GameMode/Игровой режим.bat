@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul
title xOS Playbook - Power Tweaks (ALL IN ONE)

net session >nul 2>&1 || (
  echo [!] Запустите от имени администратора.
  pause & exit /b 1
)

echo ================================================================================
echo           xOS PLAYBOOK - ВСЕ ТВИКИ ЭЛЕКТРОПИТАНИЯ В ОДНОМ СКРИПТЕ
echo ================================================================================
echo.

REM ============================================================================
REM 1. ТАЙМАУТЫ AC / DC
REM ============================================================================
echo [1/18] Отключение таймаутов AC и DC...
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
REM 2. CPU THROTTLE (десктоп)
REM ============================================================================
echo [2/18] Отключение CPU Throttle...
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
REM 3. DISABLE IDLE SUB_PROCESSOR
REM ============================================================================
echo [3/18] Отключение Idle sub_processor...
powercfg -setacvalueindex scheme_current sub_processor 5d76a2ca-e8c0-402f-a133-2158492d58ad 1 >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 4. HDD SLEEP SUB_PROCESSOR + HDD SLEEP
REM ============================================================================
echo [4/18] Отключение HDD Sleep (sub_processor + disk)...
powercfg /SETACVALUEINDEX SCHEME_CURRENT 2a737441-1930-4402-8d77-b2bebba308a3 48e6b7a6-50f5-4782-a5d4-53bb8f07e226 0 >nul 2>&1
powercfg /SETDCVALUEINDEX SCHEME_CURRENT 2a737441-1930-4402-8d77-b2bebba308a3 48e6b7a6-50f5-4782-a5d4-53bb8f07e226 0 >nul 2>&1

reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\0012ee47-9041-4b5d-9b77-535fba8b1442\0b2d69d7-a2a1-449c-9680-f91c70521c60" /v Attributes /t REG_DWORD /d 2 /f >nul 2>&1
powercfg -SETACVALUEINDEX SCHEME_CURRENT 0012ee47-9041-4b5d-9b77-535fba8b1442 0b2d69d7-a2a1-449c-9680-f91c70521c60 0 >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 6. INSIGHTS ENABLED PER-USER
REM ============================================================================
echo [6/18] Отключение InsightsEnabled (per-user)...
for /f "usebackq delims=" %%s in (`reg query HKU 2^>nul ^| findstr /r "S-1-5-21-[0-9]*-[0-9]*-[0-9]*$"`) do (
  reg add "%%s\Software\Microsoft\input\Settings" /v InsightsEnabled /t REG_DWORD /d 0 /f >nul 2>&1
)
echo [OK]
echo.

REM ============================================================================
REM 7. MOBILITY CENTER
REM ============================================================================
echo [7/18] Отключение Mobility Center...
reg add "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\MobilityCenter" /v NoMobilityCenter /t REG_DWORD /d 1 /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 8. MSPower DeviceEnable
REM ============================================================================
echo [8/18] Отключение MSPower DeviceEnable...
powershell -NoProfile -Command "Get-WmiObject MSPower_DeviceEnable -Namespace root\wmi -EA 0 | ForEach-Object { try { $_.Enable = $false; $_.psbase.Put() | Out-Null } catch {} }" >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 9. PCI D3COLD (сервисы pci)
REM ============================================================================
echo [9/18] Отключение PCI D3Cold (pci service)...
reg add "HKLM\SYSTEM\CurrentControlSet\Services\pci\Parameters" /v D3ColdSupported /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\pci\Parameters" /v D3ColdSupport  /t REG_DWORD /d 0 /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 10. USB POWER MANAGEMENT + USB TELEMETRY (USBHUB3/USBCCGP)
REM ============================================================================
echo [10/18] Отключение USB power management и телеметрии USBHUB3...
reg add "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v DisableLPM             /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v D3ColdSupported        /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v Ceip                  /t REG_DWORD /d 0 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v DisableSelectiveSuspendUI /t REG_DWORD /d 1 /f >nul 2>&1
reg add "HKLM\SYSTEM\CurrentControlSet\Services\usbccgp\Parameters" /v D3ColdSupported        /t REG_DWORD /d 0 /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 11. USB SELECTIVE SUSPEND (обход по Enum)
REM ============================================================================
echo [11/18] Отключение USB Selective Suspend (Enum sweep)...
for %%a in (EnhancedPowerManagementEnabled AllowIdleIrpInD3 EnableSelectiveSuspend DeviceSelectiveSuspended SelectiveSuspendEnabled SelectiveSuspendOn WaitWakeEnabled D3ColdSupported WdfDirectedPowerTransitionEnable EnableIdlePowerManagement IdleInWorkingState WakeEnabled) do (
  for /f "delims=" %%b in ('reg query "HKLM\SYSTEM\CurrentControlSet\Enum" /s /f "%%a" 2^>nul ^| findstr "HKEY"') do (
    reg add "%%b" /v "%%a" /t REG_DWORD /d 0 /f >nul 2>&1
  )
)
echo [OK]
echo.

REM ============================================================================
REM 12. SLEEP STUDY LOGS
REM ============================================================================
echo [12/18] Отключение журналов SleepStudy / Kernel-Processor-Power / UserModePowerService...
wevtutil sl Microsoft-Windows-SleepStudy/Diagnostic /e:false >nul 2>&1
wevtutil sl Microsoft-Windows-Kernel-Processor-Power/Diagnostic /e:false >nul 2>&1
wevtutil sl Microsoft-Windows-UserModePowerService/Diagnostic /e:false >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 13. DYNAMIC TICK OFF
REM ============================================================================
echo [13/18] Отключение Dynamic Tick (bcdedit)...
bcdedit /set disabledynamictick yes >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 14. POWER THROTTLING OFF
REM ============================================================================
echo [14/18] Отключение Power Throttling...
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerThrottling" /v PowerThrottlingOff /t REG_DWORD /d 1 /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 15. ENERGY ESTIMATION (включение — как в оригинальном скрипте)
REM ============================================================================
echo [15/18] Включение Energy Estimation (как в оригинале)...
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Power" /v EnergyEstimationEnabled /t REG_DWORD /d 1 /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 16. WdfDirectedPowerTransitionEnable OFF (Enum sweep)
REM ============================================================================
echo [16/18] Отключение WdfDirectedPowerTransitionEnable...
for /f "delims=" %%b in ('reg query "HKLM\SYSTEM\CurrentControlSet\Enum" /s ^| findstr /i "WdfDirectedPowerTransitionEnable"') do (
  echo %%b | findstr /i "HKEY" >nul
  if not errorlevel 1 (
    reg add "%%b" /v "WdfDirectedPowerTransitionEnable" /t REG_DWORD /d 0 /f >nul 2>&1
  )
)
echo [OK]
echo.

REM ============================================================================
REM 17. AllowIdleIrpInD3 / D3ColdSupported / DeviceSelectiveSuspended / etc.
REM     (индивидуальные sweep-проходы из отдельных скриптов)
REM ============================================================================
echo [17/18] Отключение остальных параметров устройств (Enum sweep)...
for %%v in (AllowIdleIrpInD3 D3ColdSupported DeviceSelectiveSuspended EnableIdlePowerManagement EnableSelectiveSuspend EnhancedPowerManagementEnabled IdleInWorkingState SelectiveSuspendEnabled SelectiveSuspendOn WaitWakeEnabled WakeEnabled) do (
  for /f "delims=" %%b in ('reg query "HKLM\SYSTEM\CurrentControlSet\Enum" /s ^| findstr /i "%%v"') do (
    echo %%b | findstr /i "HKEY" >nul
    if not errorlevel 1 (
      reg add "%%b" /v "%%v" /t REG_DWORD /d 0 /f >nul 2>&1
    )
  )
)
echo [OK]
echo.

REM ============================================================================
REM 18. ФИНАЛЬНОЕ ПРИМЕНЕНИЕ СХЕМЫ ПИТАНИЯ
REM ============================================================================
echo [18/18] Применение активной схемы питания...
powercfg -setactive SCHEME_CURRENT >nul 2>&1
echo [OK]
echo.

echo ================================================================================
echo                       ГОТОВО! ВСЕ ТВИКИ ПРИМЕНЕНЫ
echo ================================================================================
echo.
echo Что сделано:
echo   - Отключены таймауты монитора/диска/сна/гибернации (AC и DC)
echo   - Отключён CPU Throttle (все sub_processor настройки)
echo   - Отключён Idle sub_processor
echo   - Отключён HDD sleep (sub_processor и диск)
echo   - Отключён InsightsEnabled (per-user)
echo   - Отключён Mobility Center
echo   - Отключён MSPower DeviceEnable
echo   - Отключён PCI D3Cold
echo   - Отключён USB power management и телеметрия USBHUB3/USBCCGP
echo   - Отключён USB Selective Suspend (Enum sweep)
echo   - Отключены логи SleepStudy / Kernel-Processor-Power / UserModePowerService
echo   - Отключён Dynamic Tick (bcdedit)
echo   - Отключён Power Throttling
echo   - Включён Energy Estimation (как в исходном скрипте)
echo   - Отключён WdfDirectedPowerTransitionEnable
echo   - Отключены остальные параметры устройств (Enum sweep)
echo.
echo [OK] Рекомендуется перезагрузка.
echo.
pause
endlocal