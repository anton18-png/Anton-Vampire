@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul
title xOS Playbook - Power Tweaks (UNDO / ОТКАТ)

net session >nul 2>&1 || (
  echo [!] Запустите от имени администратора.
  pause & exit /b 1
)

echo ================================================================================
echo              xOS PLAYBOOK - ОТКАТ ВСЕХ ТВИКОВ ЭЛЕКТРОПИТАНИЯ
echo ================================================================================
echo.
echo ВНИМАНИЕ:
echo   Скрипт возвращает систему к стандартному поведению Windows.
echo   Шаг [1/16] использует "powercfg -restoredefaultschemes" -
echo   это СБРАСЫВАЕТ ВСЕ СХЕМЫ ПИТАНИЯ (включая пользовательские) к дефолту.
echo   Если у вас есть кастомные схемы - сохраните их заранее:
echo       powercfg -export "C:\backup.pow" SCHEME_CURRENT
echo.
pause
echo.

REM ============================================================================
REM 1. СХЕМЫ ПИТАНИЯ - СБРОС К ДЕФОЛТУ WINDOWS
REM    Возвращает: CPU Throttle, Idle sub_processor, HDD sleep (sub_processor),
REM                USB power settings (Power Settings), PCI Express ASPM и т.д.
REM ============================================================================
echo [1/16] Сброс всех схем питания к значениям по умолчанию...
powercfg -restoredefaultschemes >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 2. ТАЙМАУТЫ - ЯВНО К ТИПОВЫМ ЗНАЧЕНИЯМ WINDOWS
REM    (при желании поменяйте на свои: 10/5/20/10/30/15)
REM ============================================================================
echo [2/16] Восстановление таймаутов (типовые значения Windows)...
powercfg /x monitor-timeout-ac 10   >nul 2>&1
powercfg /x monitor-timeout-dc 5    >nul 2>&1
powercfg /x disk-timeout-ac 20      >nul 2>&1
powercfg /x disk-timeout-dc 10      >nul 2>&1
powercfg /x standby-timeout-ac 30   >nul 2>&1
powercfg /x standby-timeout-dc 15   >nul 2>&1
powercfg /x hibernate-timeout-ac 0  >nul 2>&1
powercfg /x hibernate-timeout-dc 0  >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 3. АТРИБУТЫ СКРЫТИЯ POWER SETTINGS (sub_processor GUIDs)
REM    Удаляем навязанные Attributes=2, возвращаем дефолтную видимость
REM ============================================================================
echo [3/16] Возврат видимости настроек sub_processor...
for %%g in (
  0cc5b647-c1df-4637-891a-dec35c318583
  ea062031-0e34-4ff1-9b6d-eb1059334028
  943c8cb6-6f93-4227-ad87-e9a3feec08d1
  f7277c87-9043-4248-9e8d-db20e412c751
  df142941-20f1-4cc0-928d-fde8c3378dce
  a55612aa-f624-42c6-a443-7397d064c04f
  2430ab6f-a520-44a2-9601-f7f23b5134b1
) do (
  reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\54533251-82be-4824-96c1-47b60b740d00\%%g" /v Attributes /f >nul 2>&1
)
reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerSettings\0012ee47-9041-4b5d-9b77-535fba8b1442\0b2d69d7-a2a1-449c-9680-f91c70521c60" /v Attributes /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 5. DYNAMIC TICK - УБРАТЬ ФЛАГ BCDEDIT
REM ============================================================================
echo [5/16] Возврат Dynamic Tick (удаление disabledynamictick)...
bcdedit /deletevalue disabledynamictick >nul 2>&1
if errorlevel 1 bcdedit /set disabledynamictick no >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 6. POWER THROTTLING - ВКЛЮЧИТЬ ОБРАТНО
REM ============================================================================
echo [6/16] Включение Power Throttling...
reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Power\PowerThrottling" /v PowerThrottlingOff /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 7. ENERGY ESTIMATION - ВЕРНУТЬ К ДЕФОЛТУ (удалить значение)
REM ============================================================================
echo [7/16] Возврат Energy Estimation к состоянию по умолчанию...
reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Power" /v EnergyEstimationEnabled /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 8. MOBILITY CENTER - ВКЛЮЧИТЬ ОБРАТНО
REM ============================================================================
echo [8/16] Включение Mobility Center...
reg delete "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\MobilityCenter" /v NoMobilityCenter /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 9. INSIGHTS ENABLED (per-user) - УДАЛИТЬ ЗНАЧЕНИЕ
REM ============================================================================
echo [9/16] Возврат InsightsEnabled (per-user)...
for /f "usebackq delims=" %%s in (`reg query HKU 2^>nul ^| findstr /r "S-1-5-21-[0-9]*-[0-9]*-[0-9]*$"`) do (
  reg delete "%%s\Software\Microsoft\input\Settings" /v InsightsEnabled /f >nul 2>&1
)
echo [OK]
echo.

REM ============================================================================
REM 10. MSPower DeviceEnable - ВКЛЮЧИТЬ ОБРАТНО
REM ============================================================================
echo [10/16] Включение MSPower DeviceEnable...
powershell -NoProfile -Command "Get-WmiObject MSPower_DeviceEnable -Namespace root\wmi -EA 0 | ForEach-Object { try { $_.Enable = $true; $_.psbase.Put() | Out-Null } catch {} }" >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 11. PCI D3COLD - УДАЛИТЬ ПАРАМЕТРЫ СЕРВИСА pci
REM ============================================================================
echo [11/16] Возврат PCI D3Cold...
reg delete "HKLM\SYSTEM\CurrentControlSet\Services\pci\Parameters" /v D3ColdSupported /f >nul 2>&1
reg delete "HKLM\SYSTEM\CurrentControlSet\Services\pci\Parameters" /v D3ColdSupport  /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 12. USBHUB3 / USBCCGP - УДАЛИТЬ ПАРАМЕТРЫ
REM ============================================================================
echo [12/16] Возврат параметров USBHUB3 и usbccgp...
reg delete "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v DisableLPM               /f >nul 2>&1
reg delete "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v D3ColdSupported          /f >nul 2>&1
reg delete "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v Ceip                     /f >nul 2>&1
reg delete "HKLM\SYSTEM\CurrentControlSet\Services\USBHUB3\Parameters" /v DisableSelectiveSuspendUI /f >nul 2>&1
reg delete "HKLM\SYSTEM\CurrentControlSet\Services\usbccgp\Parameters" /v D3ColdSupported          /f >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 13. ENUM SWEEP - УДАЛИТЬ ПАРАМЕТРЫ УСТРОЙСТВ
REM     (это вернёт дефолтное поведение драйверов: обычно "включено")
REM ============================================================================
echo [13/16] Возврат параметров устройств (Enum sweep)...
for %%v in (
  EnhancedPowerManagementEnabled
  AllowIdleIrpInD3
  EnableSelectiveSuspend
  DeviceSelectiveSuspended
  SelectiveSuspendEnabled
  SelectiveSuspendOn
  WaitWakeEnabled
  D3ColdSupported
  WdfDirectedPowerTransitionEnable
  EnableIdlePowerManagement
  IdleInWorkingState
  WakeEnabled
) do (
  for /f "delims=" %%b in ('reg query "HKLM\SYSTEM\CurrentControlSet\Enum" /s /f "%%v" 2^>nul ^| findstr "HKEY"') do (
    reg delete "%%b" /v "%%v" /f >nul 2>&1
  )
)
echo [OK]
echo.

REM ============================================================================
REM 14. ЖУРНАЛЫ ДИАГНОСТИКИ - ВКЛЮЧИТЬ ОБРАТНО
REM ============================================================================
echo [14/16] Включение журналов диагностики...
wevtutil sl Microsoft-Windows-SleepStudy/Diagnostic /e:true >nul 2>&1
wevtutil sl Microsoft-Windows-Kernel-Processor-Power/Diagnostic /e:true >nul 2>&1
wevtutil sl Microsoft-Windows-UserModePowerService/Diagnostic /e:true >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 15. ПРИМЕНИТЬ АКТИВНУЮ СХЕМУ
REM ============================================================================
echo [15/16] Применение активной схемы питания...
powercfg -setactive SCHEME_CURRENT >nul 2>&1
echo [OK]
echo.

REM ============================================================================
REM 16. ФИНАЛЬНАЯ АКТИВАЦИЯ СХЕМЫ "СБАЛАНСИРОВАННАЯ" (ОПЦИОНАЛЬНО)
REM     Раскомментируйте, если хотите принудительно вернуть Balanced:
REM ============================================================================
echo [16/16] Готово.
REM powercfg -setactive SCHEME_BALANCED

echo.
echo ================================================================================
echo                     ОТКАТ ЗАВЕРШЁН
echo ================================================================================
echo.
echo Что возвращено:
echo   - Все схемы питания сброшены к дефолту Windows
echo   - Таймауты: монитор 10/5, диск 20/10, сон 30/15 мин
echo   - Видимость настроек sub_processor возвращена
echo   - Dynamic Tick возвращён к дефолту
echo   - Power Throttling включён
echo   - Energy Estimation - по умолчанию
echo   - Mobility Center включён
echo   - InsightsEnabled - по умолчанию
echo   - MSPower DeviceEnable включён
echo   - PCI D3Cold - по умолчанию
echo   - USBHUB3 / usbccgp - по умолчанию
echo   - Параметры устройств в Enum - по умолчанию
echo   - Журналы диагностики включены
echo.
echo [!] Требуется перезагрузка для полного применения.
echo.
pause
endlocal