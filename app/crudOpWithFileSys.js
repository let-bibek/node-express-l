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
// update
// append
fs.appendFile(filePath,' File is updated.',(err)=>{
    console.log('file appended.');
});
// rename
fs.rename(filePath, `${dirPath}/demoRenamed.txt`,(err)=>{
    console.log(`${filePath} is renamed to demoRenamed.txt`);
});
// delete
// fs.unlink(`${dirPath}/demoRenamed.txt`);