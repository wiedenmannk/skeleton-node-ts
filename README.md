# Node.js with TypeScript, Express, EJS and TypeScript

## and SCSS Support

---

### This is a skeleton application for Node.js with TypeScript and Express

---

npm install

To Start Server run  
npm start  
this will run tsc -w & npm run scss & nodemon

run  
npm run dev  
is like npm start, but also clean dist folder

---

if you use express and ejs you will have a problem with typescript,
because typescript is compiling ts files in a dist folder,
but your other files, like ts files and ejs files (ejs templates) are
located in the src folder.
So I build a copy script which copies the files every 1,5 seconds to dist folder,
because your node instance is you using the compiled dist folder.
With sass --watch you are able to compile .scss files into css files

---

npm run copy  
runs the copyscript and copy src/views src/web and src/components to dist folder  
npm run copyonce
runs the copyscript just one time without repeating  
run this script in a seperate terminal, I didn't want to everthing in one terminal

but you can also run npm run fulldev
scripts will be loaded:  
npm run dev & npm run copy
you will then have all information in one terminal. It's maybe too much if you want to debug or if you have errors.

---

### SCSS Support

npm run scss  
if you want to have scss watcher seperatly

---

---

## In Ejs you still must use js files, because tsc compiler use for import a require. Require is only working for node.js
