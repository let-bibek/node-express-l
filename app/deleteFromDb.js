const db_connect=require('./mongoDbConnect');

const deleteCollection=async ()=>{
    const db= await db_connect();
    const query = await db.deleteOne({ name: "appple macbook" });

    if(query.acknowledged){
        console.log('deleted successfully');
    }
    else{
        console.log('error');
    }
}
deleteCollection();