Write-Host "🚀 Testing @ejas404/typed-event-emitter package..." -ForegroundColor Green
Write-Host ""

Write-Host "📦 Building the main package..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Main package build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📁 Setting up example project..." -ForegroundColor Yellow
Set-Location "examples\basic-usage"

Write-Host "📥 Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Example dependencies installation failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🔨 Building example..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Example build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎯 Running example..." -ForegroundColor Yellow
npm start

Write-Host ""
Write-Host "✅ Test completed!" -ForegroundColor Green
Set-Location "..\.."