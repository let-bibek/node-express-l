const mongoose=require('mongoose');
    const placeSchema= mongoose.Schema({
        name:String,
        location:String,
        description:String,
        price:Number,
    });

module.exports=mongoose.model('places',placeSchema);
