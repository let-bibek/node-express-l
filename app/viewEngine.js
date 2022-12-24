const express=require('express');
const path=require('path');
const fileDir=path.join(__dirname,'../public')
const app=express();
app.set('view engine','ejs');
app.get('',(req,res)=>{
    res.sendFile(`${fileDir}/index.html`);
})
app.get('/about',(req,res)=>{
    res.sendFile(`${fileDir}/about.html`)
})
app.get('/profile',(req,res)=>{
    const menu = [
      {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      
    ];
    res.render('profile',{menu});

})
app.listen(8200);