const db_connect = require("../mongoDbConnect");

const connect= async()=>{
    
    let query =  await db_connect();
    query = await  query.find().toArray();
    return query;
}

module.exports = connect;
