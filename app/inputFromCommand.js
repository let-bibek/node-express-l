// console.log(process.argv[1]);

// store in filesystem
const fs=require("fs");
const input=process.argv;
if(input[3]=='add'){

    fs.writeFileSync(input[2],input[4]);
}else if(input[3]=='remove'){
    fs.unlinkSync(input[2]);
}else{
    console.log('invalid input.');
}

