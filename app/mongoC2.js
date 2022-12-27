const dbConnect = require("./mongoDbConnect");

console.log("Old promise method----------------->");
dbConnect().then((res) => {
  res
    .find()
    .toArray()
    .then((data) => console.log(data));
});
console.log('--------------------------------------------------------------------->');
console.log("Modern async method");

const main = async () => {
  const data = await dbConnect();
   data = await data.find({}).toArray();
  console.warn(data);
};

main();