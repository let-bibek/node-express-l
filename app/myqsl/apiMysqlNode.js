const express=require('express');
const con=require('./cofig/dbConfig');
const app=express();
app.get('/home',(req,res)=>{
    con.query('select * from users',(e,results)=>{
        if(e){
            res.send(e);
        }
        else{
           res.send(results);
        }
    })
});
app.listen(8200);