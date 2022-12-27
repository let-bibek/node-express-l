const express=require('express');
const connect=require('./mongoDbConnect');
const dbData=require('./api/getApiDb');
const app=express();

// get data
app.use(express.json());

app.get('/',(req,res)=>{
    dbData().then((dat)=>{

        res.send(dat);
        res.end();
    })
});

app.post('/',async (req,res)=>{
    let dbCon=await connect();
    const query=await dbCon.insertMany(req.body);
    res.send(query);
    res.end();
});

app.listen(8200);