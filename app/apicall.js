const http=require("http");
const { stringify } = require("querystring");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})
    res.write(
      JSON.stringify({
        name: "bibek shrestha",
        age: 21,
        email: "bibek@softdrax.com",
      })
    );
    res.end();
}).listen(8200);