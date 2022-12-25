const express=require('express');
const path=require('path');
const pathDir=path.join(__dirname,'../public');
const app=express();
app.get('/abc',(req,res)=>{
    res.sendFile(`${pathDir}/home.html`);
})

app.get('/index',(req,res)=>{
    res.sendFile(`${pathDir}/home.html`);
})
app.get('',(req,res)=>{
    res.sendFile(`${pathDir}/index.html`);
})
// 404 page
app.get("*", (req, res) => {
  res.sendFile(`${pathDir}/404Page.html`);
});
app.listen(8200);