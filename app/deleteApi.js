const express=require('express');
const dbConnect=require('./mongoDbConnect');
const mongoDb=require('mongodb');
const app=express();
app.delete('/:id',async(req,res)=>{
    let con=await dbConnect();
    con=await con.deleteOne({_id:new mongoDb.ObjectId(req.params.id)});

    res.send(con);
})
app.listen(8200);
