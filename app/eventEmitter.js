const express=require('express');
const EventEmitter=require('events');
const app=express();
const event=new EventEmitter();

count=0;

event.on("countApi",()=>{
    count++;
    console.log(count);
});
app.get('/home',(req,res)=>{
    res.send("api called" + count);
    event.emit('countApi');
});

app.get("/about", (req, res) => {
  res.send("about api called");
});

app.get("/search", (req, res) => {
  res.send("search api called");
});
app.listen(8200);
