const express = require("express");
require("./api/mongooseConfig");
const Place = require("./schema/place");
const app = express();
app.use(express.json());

// post
app.post("/create", async (req, res) => {
  const data = new Place(req.body);
  const result = await data.save();
  res.send(result);
  console.log(result);
});

// get
app.get("/list", async (req, res) => {
  const data = await Place.find();
  res.send(data);
});

// delete

app.delete("/delete/:location", async (req, res) => {
  const data = await Place.deleteOne(req.params);
  res.send(data);
  console.log(req.params);
});

// update
app.put("/update/:_id", async (req, res) => {
  const data = await Place.updateOne(req.params, { $set: req.body });
  res.send(data);
});
app.listen(8200);
