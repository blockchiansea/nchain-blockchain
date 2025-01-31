$ErrorActionPreference = "Stop"

if ($null -eq (Get-ChildItem env:VIRTUAL_ENV -ErrorAction SilentlyContinue))
{
    Write-Output "This script requires that the NChain Python virtual environment is activated."
    Write-Output "Execute '.\venv\Scripts\Activate.ps1' before running."
    Exit 1
}

if ($null -eq (Get-Command node -ErrorAction SilentlyContinue))
{
    Write-Output "Unable to find Node.js"
    Exit 1
}

Write-Output "Building the NChain GUI."
Write-Output ""


Push-Location
try {
    Set-Location nchain-blockchain-gui

    $ErrorActionPreference = "SilentlyContinue"
    npm ci --loglevel=error
    npm audit fix
    npm run build
    py ..\installhelper.py

    Write-Output ""
    Write-Output "NChain blockchain Install-gui.ps1 completed."
    Write-Output ""
    Write-Output "Type 'cd nchain-blockchain-gui' and then 'npm run electron' to start the GUI."
} finally {
    Pop-Location
}
