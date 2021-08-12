const fs = require('fs');
const folderName = process.argv[2].toString() || "Project";
let data = "";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, data);
  fs.writeFileSync(`${folderName}/app.js`, data);
  fs.writeFileSync(`${folderName}/style.css`, data);
} catch (error) {
  console.log("Error: ", error);
}
