const express=require('express');
const connect=require('./api/getApiDb');
const app=express();

// method 1

// const data=async ()=>{
//     const connect=await db_connect();
//      const query=await connect.find().toArray();
//     return query;
// }

// app.get('',(req,res)=>{
//     data().then((dat)=>{
//         console.log(dat);
//         res.send(dat);
//         res.end();
//     })
// }).listen(8200);

// method 2

app.get('/',(req,res)=>{

    connect().then((dat)=>{
        res.send(dat);
        res.end();
    })

}).listen(8200);