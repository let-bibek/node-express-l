const {MongoClient}=require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const client=new MongoClient(url);
const database = "eCom";

async function getData(){
    let connect=await client.connect();
    let db=connect.db(database);
    let db_collection = db.collection("product");
    let response = await db_collection.find({category:'smartphone'}).toArray();
    console.log(response);  

}

getData();