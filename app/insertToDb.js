const db_con=require('./mongoDbConnect');

const insert=async ()=>{
    const db=await db_con();
    const query = await db.insertMany([
      {
        name: "appple macbook air 2020",
        category: "electronics",
        brand: "apple",
        price: 130000,
      },
      {
        name: "toshiba satellite L8000",
        category: "electronics",
        brand: "toshiba",
        price: 100000,
      },
      {
        name: "Nike air force",
        category: "clothing",
        brand: "nike",
        price: 5000,
      },
    ]);
    if(query.acknowledged){
        console.log("data inserted successfully");
    }
}
insert();