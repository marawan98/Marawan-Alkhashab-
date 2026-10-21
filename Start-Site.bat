@echo off
title Al Khashab Gaming Server Launcher
color 0b
echo ========================================================
echo       AL KHASHAB OFFICIAL GAMING HUB - LAUNCHER
echo ========================================================
echo.
echo [1/2] Starting Node.js Backend Server...
start /b cmd /c "node server.js"
timeout /t 2 /nobreak >nul

echo [2/2] Launching Cloudflare Online Tunnel...
echo.
echo ========================================================
echo  Your site is now LIVE! Keep this window open.
echo  Local: http://localhost:3000
echo ========================================================
echo.
npx --yes cloudflared tunnel --url http://localhost:3000
pause
