@echo off
echo Build Script (win32)
echo (C) 2021 AddyPug Teknologies Incorporated
echo Installing...
npm install && echo Importing... && npm run import && echo Building... && npm run Building

echo Exiting...