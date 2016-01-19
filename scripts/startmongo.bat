@echo off

cls

IF NOT EXIST "%MONGODB_HOME%" (
    echo .
    echo "Set the MONGODB_HOME env.var. KTHXBAI"
    pause
    exit /b
)

IF NOT EXIST "%MONGODB_HOME%\data" (
    mkdir "%MONGODB_HOME%\data"
)


IF NOT EXIST "%MONGODB_HOME%\data\db" (
    mkdir "%MONGODB_HOME%\data\db"
)

echo.
echo Starting MongoDB..
     %MONGODB_HOME%\bin\mongod.exe --dbpath "%MONGODB_HOME%\data\db"
     :: --config "%MONGODB_HOME%\mongodb.conf" --logpath "%MONGODB_HOME%\logs\mongodb.log"
echo.

pause
exit /b
