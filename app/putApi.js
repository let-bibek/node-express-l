const express = require("express");
const connect = require("./mongoDbConnect");
const app = express();

app.use(express.json());

app.put("/", async (req, res) => {
  let dbCon = await connect();
  const query =  dbCon.updateMany({name:req.body.name},{$set:req.body});
  res.send(req.body);
  res.end();
});

app.listen(8200);
