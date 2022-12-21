const http=require("http");

// http.createServer((req,res)=>{
//     res.write("<h1>hello this is demo</h1>");
//     res.end();
// }).listen(4500);

const host=(req,res)=>{
    res.write("<h1>This is demo.</h1>")
    res.end();
}
http.createServer(host).listen(8200);