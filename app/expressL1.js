const express=require('express');
const app=express();
app.get('',(req,res)=>{
    res.send('This a homeeee page.');
});
app.get('/demo',(req,resp)=>{
    resp.send('This is demo page.')
})
app.listen(8200);
