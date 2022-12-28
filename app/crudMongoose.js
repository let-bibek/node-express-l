const mongoose = require("mongoose");
const conStr = "mongodb://127.0.0.1:27017/eCom";

const dbSchema = mongoose.Schema({
  name: String,
  location: String,
  description: String,
  price: Number,
});
// cerate
const insertDb = async () => {
  await mongoose.connect(conStr);
  const tourModel = mongoose.model("places", dbSchema);
  const data = new tourModel({
    name: "Halesi Mahadev",
    location: "Khotang",
    description: "It's a 2 days trip by bus.",
    price: 2000,
  });
  const query = await data.save();
  console.log(query);
};
insertDb();

// read

const readDb=async ()=>{
    const tourModel=mongoose.model('places',dbSchema);
    const query=await tourModel.find({location:'Khotang'});
    console.log(query);

}
readDb();

// update

const updateDb = async () => {
  const tourModel = mongoose.model("places", dbSchema);

  const data = await tourModel.updateMany(
    {
      price: 2000,
    },
    { $set: { price: 1500 } }
  );
  console.log(data);
};
updateDb();

// delete
// const deleteDb=async()=>{
//     const con= mongoose.model("places",dbSchema);
//     const query=await con.deleteMany({price:1500});
//     console.log(query);
// }
// deleteDb();