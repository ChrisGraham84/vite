echo off
set arg1=%1
call npm create vite@latest  %arg1% -- --template react
cd myapp
call npm install 
call npm install -D tailwindcss postcss autoprefixer gsap
call npx tailwindcss init -p