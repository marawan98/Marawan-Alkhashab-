@echo off
chcp 65001 >nul
title Al Khashab 1-Click Website Updater
color 0b

echo ========================================================
echo     AL KHASHAB GAMING - 1-CLICK WEBSITE UPDATER 🐺
echo ========================================================
echo.

:: Add Git to PATH if not present
set "PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin"

echo [1/3] Encrypting and protecting site code...
cmd /c "node obfuscate.js"

echo.
echo [2/3] Preparing changes for GitHub...
git add -A
git commit -m "Auto Update: %date% %time%"

echo.
echo [3/3] Uploading updates to GitHub Pages...
git push origin main

echo.
if %errorlevel% equ 0 (
    color 0a
    echo ========================================================
    echo  🎉 تم تحديث ورفع موقعك على GitHub بنجاح!
    echo  🔗 https://marawan98.github.io/Marawan-Alkhashab-/
    echo ========================================================
) else (
    color 0c
    echo ========================================================
    echo  ⚠️ حدث خطأ أو مطلوب تسجيل الدخول بحساب GitHub.
    echo ========================================================
)

echo.
pause
