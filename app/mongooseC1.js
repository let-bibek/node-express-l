const mongoose=require('mongoose');

 const main=async ()=>{

   await mongoose.connect('mongodb://127.0.0.1:27017/eCom');

    const productSchema=new mongoose.Schema({
        name:String,
        price:Number
    });
    const productModel = mongoose.model("store", productSchema);
    let data=new productModel({name:"iPhone 11",price:"1200"});
    let result=await data.save();
    console.log(result);
 }

 main();