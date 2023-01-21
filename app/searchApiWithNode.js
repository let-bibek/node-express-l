const express = require("express");
require("./api/mongooseConfig");
const Place = require("./schema/place");
const app = express();
app.use(express.json());
app.get("/search/:key", async (req, res) => {
  const data = await Place.find({ "$or": [
    { "name": { $regex: req.params.key } },
    {"location":{$regex:req.params.key}}
] 
})
.limit(2)
.sort("price");
  res.send(`${data}`);
});

// post
app.post("/create", async (req, res) => {
  const data = new Place(req.body);
  const result = await data.save();
  res.send(result);
  console.log(result);
});

app.listen(8200);
