// asyncFileCount.js
const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];  
const ext = process.argv[3];       

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err.message);
    return;
  }
  const count = files.filter(file => path.extname(file) === ext).length;
  console.log(count);
});
