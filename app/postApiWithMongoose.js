const express=require('express');
require('./api/mongooseConfig');
const place=require('./schema/place');
const app=express();

app.use(express.json());
app.post('/create',async (req,res)=>{

    const dataModel=new place(req.body);
    const data= await dataModel.save();
    res.send(data);
    console.log(data);
    res.end();
});
app.listen(8200);