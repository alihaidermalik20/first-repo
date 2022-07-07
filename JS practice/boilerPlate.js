// creating a boilerplate template so if you run this file with another argument after it, it creates a folder with that argument
// or the name of the folder will be Project by default. And it will create 3 files in the folder, html, css, and js

// fs methods don't appear unless explicitly called like this as seen in node docs
const fs = require('fs');

// process.argv takes the command line arguments. at index 2 because node will be index 0, this file name index 1
const folderName = process.argv[2] || 'Project';

try {
    // mkdir will keep running the code and come back when the function is finished. mkdirSync will make sure that the folder is first
    // made before moving on to creating the files in that folder
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, 'new file');
    fs.writeFileSync(`${folderName}/styles.css`, 'new file');
    fs.writeFileSync(`${folderName}/app.js`, 'new file');
} catch (e) {
    console.log('something went wrong');
    console.log(e);
}
// you can run this file from any directory but the template folder will be made in the directory you ran the command in