const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send('<em>This a home page.</em>');
});

app.get('/demo',(req,resp)=>{
    resp.send(`<input type="text" name="username" placeholder="Username" value='${req.query.data}'/>
    <button>Send</button>
    <a href="/help">Need help?</a>
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
