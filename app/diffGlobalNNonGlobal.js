const fileSystem=require("fs");
fileSystem.writeFileSync("demo.txt","Hello world");
console.log("Lets do it baby");
console.log(__dirname,__filename)
