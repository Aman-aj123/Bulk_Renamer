const fs = require("fs");
const path = require("path");

const uploadDirectory = path.join(__dirname, "uploads");
const fileName = "example";
const fileExtension = ".js";
let counter = 0;
// Reading the files
const readFiles = fs.readdirSync(uploadDirectory);
readFiles.forEach((itm) => {
     const oldPath = path.join(uploadDirectory, itm);
     const newPath = path.join(uploadDirectory, `${fileName} ${counter}${fileExtension}`);
     console.log(`Old Path: ${oldPath}`);
     console.log(`New Path: ${newPath}`);
     fs.renameSync(oldPath, newPath);
     counter++;
});
