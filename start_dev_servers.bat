@echo off
echo ===================================================
echo   Abhinav Technical Institute - Full Dev Launcher
echo ===================================================

:: Install dependencies if node_modules doesn't exist
IF NOT EXIST node_modules (
    echo node_modules not found. Installing dependencies...
    call npm install
    echo.
) ELSE (
    echo [OK] Dependencies already installed.
)

:: Start Backend API Server
echo Starting Backend API Server on http://localhost:4000...
start "ATI Backend Server (Port 4000)" cmd /k "node server/server.js"

:: Start Frontend Vite Development Server
echo Starting Frontend Vite development server on http://localhost:5173...
start "ATI Frontend Server (Port 5173)" cmd /k "npm run dev"

:: Wait for servers to spin up
timeout /t 3 /nobreak >nul

:: Open in default browser
echo Opening browser at http://localhost:5173
start http://localhost:5173

echo.
echo ===================================================
echo  Frontend running at:    http://localhost:5173
echo  Backend API running at: http://localhost:4000/api
echo  Admin Panel password:   9423488174 (or 1234 / admin)
echo  Super Admin URL:        http://localhost:5173/#super-admin
echo  Super Admin password:   9822725265
echo  To stop servers:        Close both command windows
echo ===================================================
pause
