const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send('<em>This a home page.</em>');
});

app.get('/demo',(req,resp)=>{
    resp.send(`<input type="text" name="username" placeholder="Username"/>
    <button>Send</button>
    `)
   
})
app.get('/help',(req,res)=>{
res.send({
    name:'bibek',
    username:'let-bibek',
    email:'bibek@softdrax.com'
})
})

app.listen(8200);
