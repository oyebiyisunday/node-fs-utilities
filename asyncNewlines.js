// asyncNewlines.js
const fs = require('fs');

const filePath = process.argv[2]; // third argument

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  const lineCount = data.split('\n').length - 1;
  console.log(lineCount);
});
