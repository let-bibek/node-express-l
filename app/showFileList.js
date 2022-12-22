const fs = require("fs");
const path=require('path');
const dir=path.join(__dirname,'files');
for(i=0;i<5;i++){
    fs.writeFileSync(dir + `/file_${i}.txt`, "Fox is clever");
}

fs.readdir(dir, (err, file) => {
 file.forEach((f)=>{
    console.log(`file name is : ${f}`);
 })
});