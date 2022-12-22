const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
// app/crud/demo.txt
const filePath=`${dirPath}/demo.txt`;
// write
fs.writeFileSync(filePath, "This is xerox copy.");
// read
fs.readFile(filePath, 'utf8', (err, f) => {
  console.log(f);
});