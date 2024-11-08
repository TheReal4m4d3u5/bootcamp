@echo off
setlocal

rem Set constant values for PostgreSQL connection
set DB_PASSWORD=your_admin_password  rem Replace with your actual PostgreSQL admin password
set DB_USER=postgres                  rem Hardcoded PostgreSQL admin username
set DB_HOST=localhost                 rem Host is constant
set DB_PORT=5432                      rem Port is constant

rem Prompt for user input for the remaining path after C:\
set /p DB_PATH="Please enter the remaining part of the database path (e.g., \path\to\your\database): "
set /p SQL_FILE="Please enter the name of the SQL file to run (e.g., script.sql): "

rem Construct the full database path
set FULL_DB_PATH=C:%DB_PATH%

rem Echo the full database path being used
echo Using database path: %FULL_DB_PATH%
echo Using SQL file: %SQL_FILE%

rem Check if the directory exists
if exist "%FULL_DB_PATH%" (
    echo Directory exists: %FULL_DB_PATH%
) else (
    echo Error: The directory %FULL_DB_PATH% does not exist.
    echo Please verify the path and try again.
    pause
    exit /b 1
)

rem Check if the specified SQL file exists
set SQL_FILE_PATH=%FULL_DB_PATH%\%SQL_FILE%
if exist "%SQL_FILE_PATH%" (
    echo Running %SQL_FILE%...
    psql -h %DB_HOST% -U %DB_USER% -d %FULL_DB_PATH% -f "%SQL_FILE_PATH%"
    
    rem Check exit status of the SQL execution
    if %ERRORLEVEL% neq 0 (
        echo Error: Failed to run %SQL_FILE%. Please check the error messages above.
    ) else (
        echo %SQL_FILE% executed successfully.
    )
) else (
    echo Error: The SQL file %SQL_FILE% does not exist at the specified path: %SQL_FILE_PATH%.
    echo Please verify the file name and try again.
    pause
    exit /b 1
)

rem Keep the terminal open until a key is pressed
echo.
pause
