// console.log(process.argv[1]);

// store in filesystem
const fs=require("fs");
const input=process.argv;
fs.writeFileSync(input[2],input[3]);
