const express=require('express');
const path=require('path');
const fileDir=path.join(__dirname,'../public')
const app=express();
app.set('view engine','ejs');
app.get('',(req,res)=>{
    res.sendFile(`${fileDir}/index.html`);
})
app.get('/about',(req,res)=>{
    res.sendFile(`${fileDir}/about.html`)
})
app.get('/profile',(req,res)=>{
    res.render('profile');
})
app.listen(8200);