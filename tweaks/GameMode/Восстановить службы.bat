@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul

rem ============================================================
rem  Восстановление служб ИЗ БЭКАПА после отката игрового режима.
rem  Возвращает Start только тем службам, которые есть в services.backup.
rem  Службы, которые были отключены (4) ДО Game Mode, в бэкап не попали,
rem  поэтому остаются отключёнными — их мы не включаем.
rem ============================================================

set "BACKUP_FILE=%~dp0services.backup"

if not exist "%BACKUP_FILE%" (
    echo [ОШИБКА] Файл бэкапа не найден: "%BACKUP_FILE%"
    echo Сначала примените игровой режим с включённым бэкапом.
    exit /b 1
)

echo Восстановление служб из "%BACKUP_FILE%" ...
set "COUNT=0"

for /f "usebackq tokens=1,2 delims==" %%L in ("%BACKUP_FILE%") do (
    set "NAME=%%L"
    set "VAL=%%M"
    if not "!NAME:~0,1!"=="#" (
        if not "!NAME!"=="" (
            reg add "HKLM\SYSTEM\CurrentControlSet\Services\!NAME!" /v Start /t REG_DWORD /d !VAL! /f >nul 2>&1
            if not errorlevel 1 (
                echo   [!NAME!] Start = !VAL!
                set /a COUNT+=1
            )
        )
    )
)

echo.
echo Готово. Восстановлено служб: %COUNT%
endlocal