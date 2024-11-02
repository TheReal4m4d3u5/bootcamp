@echo off
setlocal

rem Set constant values for PostgreSQL connection
set DB_PASSWORD=your_admin_password  rem Replace with your actual PostgreSQL admin password
set DB_USER=postgres                  rem Hardcoded PostgreSQL admin username
set DB_HOST=localhost                 rem Host is constant
set DB_PORT=5432                      rem Port is constant

rem Prompt for user input for the remaining path after C:\
set /p DB_PATH="Please enter the remaining part of the database path (e.g., \path\to\your\database): "

rem Construct the full database path
set FULL_DB_PATH=C:\Users\avery%DB_PATH%

rem Echo the full database path being used
echo Using database path: %FULL_DB_PATH%

rem Create a blank file at the specified database path
set FILE_PATH=%FULL_DB_PATH%\blank_file.txt
echo. > "%FILE_PATH%"
echo Created blank file at: %FILE_PATH%

rem Run the schema SQL file
echo Running schema.sql...
psql -h %DB_HOST% -U %DB_USER% -d %FULL_DB_PATH% -f schema.sql

rem Check exit status of the schema execution
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to run schema.sql. Please check the error messages above.
) else (
    echo schema.sql executed successfully.
)

rem Run the seeds SQL file
echo Running seeds.sql...
psql -h %DB_HOST% -U %DB_USER% -d %FULL_DB_PATH% -f seeds.sql

rem Check exit status of the seeds execution
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to run seeds.sql. Please check the error messages above.
) else (
    echo seeds.sql executed successfully.
)

rem Keep the terminal open until a key is pressed
echo.
pause