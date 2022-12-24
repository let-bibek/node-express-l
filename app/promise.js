const data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2);
    },2000);
});

data.then((data)=>{
    // console.log(8+data);
    console.log('Hello');
})
