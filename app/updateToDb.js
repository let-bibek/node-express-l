const db_connect=require('./mongoDbConnect');

const update=async ()=>{
const connect=await db_connect();
console.log(connect);
const updateQuery = await connect.updateOne(
  {
    name: "appple macbook air 2020",
  },
  { $set: { name: "macbook air 2020" } }
);
if(updateQuery.acknowledged){
    console.log('update done');
}
}
update();