const {read,write}=require('fs');
const path=require('path');
const dir=path.join(__dirname,'files');
for(i=0;i<5;i++){
    write.writeFileSync(dir + `/file_${i}.txt`, "Fox is clever");
}

