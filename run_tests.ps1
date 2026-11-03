$port = 3005
$proc = Start-Process -FilePath "cmd.exe" -ArgumentList "/c npm run start -- -p $port" -PassThru -NoNewWindow
Write-Host "Started Next.js production server on port $port with PID $($proc.Id)"

try {
  $ready = $false
  for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 1
    try {
      $resp = Invoke-WebRequest -Uri "http://127.0.0.1:$port/robots.txt" -UseBasicParsing -TimeoutSec 2
      if ($resp.StatusCode -eq 200) {
        $ready = $true
        Write-Host "Server is ready on port $port!"
        break
      }
    } catch {
      # server not ready yet
    }
  }

  if ($ready) {
    node test_parity.mjs $port
    $testExitCode = $LASTEXITCODE
  } else {
    Write-Error "Server timed out waiting to start."
    $testExitCode = 1
  }
} finally {
  Write-Host "Stopping Next.js server PID $($proc.Id)..."
  Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
}

exit $testExitCode
