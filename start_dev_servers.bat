@echo off
echo ===================================================
echo   Abhinav Technical Institute - Dev Launcher
echo ===================================================

:: Install dependencies if node_modules doesn't exist
IF NOT EXIST node_modules (
    echo node_modules not found. Installing dependencies...
    call npm install
    echo.
) ELSE (
    echo [OK] Dependencies already installed.
)

:: Start the dev server in a separate terminal window
echo Starting Vite development server...
start "Abhinav Institute - Dev Server" cmd /k "npm run dev"

:: Wait for server to spin up
timeout /t 3 /nobreak >nul

:: Open in default browser
echo Opening browser at http://localhost:5173
start http://localhost:5173

echo.
echo ===================================================
echo  Dev server running at: http://localhost:5173
echo  Admin Panel password:  9423488174 (or 'admin')
echo  To stop the server:    Close the server window
echo ===================================================
pause
