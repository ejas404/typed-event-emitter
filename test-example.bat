@echo off
echo 🚀 Testing @ejas404/typed-event-emitter package...
echo.

echo 📦 Building the main package...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Main package build failed!
    exit /b 1
)

echo.
echo 📁 Setting up example project...
cd examples\basic-usage

echo 📥 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Example dependencies installation failed!
    exit /b 1
)

echo.
echo 🔨 Building example...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Example build failed!
    exit /b 1
)

echo.
echo 🎯 Running example...
call npm start

echo.
echo ✅ Test completed!
cd ..\..