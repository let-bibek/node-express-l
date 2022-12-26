const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const database = "eCom";

async function dbConnect() {
  let connect = await client.connect();
  let db = connect.db(database);
  return db.collection("product");
}

module.exports=dbConnect;
