
FOR /F "tokens=5 delims= " %%P IN ('netstat -a -n -o ^| findstr :3000') DO TaskKill.exe /PID %%P
nodemon server/index.js
nodemon --watch src server/index.js