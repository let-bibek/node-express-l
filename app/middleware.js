const { response } = require('express')
const express=require('express')
const path=require('path')
const fileDir=path.join(__dirname,'../public')
const app=express()
const reqFilter=(req,res,next)=>{
   if(!req.query.data){
    res.send('provide data')

   }else if(req.query.data<18){
    res.send('You are not allowed to access this page');
   }
   else{
    next();
   }
}
app.use(reqFilter)
app.set('view engine','ejs')
app.get('',(req,res)=>{
    res.sendFile(`${fileDir}/index.html`)
})
app.get('/profile',(req,res)=>{
    res.render('login')         
})
app.listen(8200)
