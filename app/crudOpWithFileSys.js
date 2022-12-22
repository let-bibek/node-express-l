const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/demo.txt`;
fs.writeFileSync(filePath,'This is xerox copy.')