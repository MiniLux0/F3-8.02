@echo off
title Servidor Local - Fisica III (UNI CF2B1 & MIT 8.02)
echo ================================================================
echo   Iniciando Portal Academico: Fisica III (UNI CF2B1 & MIT 8.02)
echo   Acceso directo en navegador: http://localhost:8000
echo ================================================================
start http://localhost:8000
where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    python -m http.server 8000
    goto end
)
where py >nul 2>nul
if %ERRORLEVEL% equ 0 (
    py -m http.server 8000
    goto end
)
where npx >nul 2>nul
if %ERRORLEVEL% equ 0 (
    npx serve -p 8000 .
    goto end
)
echo No se detecto Python ni Node. Abriendo archivo directamente...
start index.html
:end
pause
