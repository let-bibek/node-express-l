const express = require("express");
const app = express();

// database

const con = require("./cofig/dbConfig");
app.use(express.json());
// fetch data
app.get("/fetch", (req, res) => {
  var data;
  con.query("select * from users", (e, results) => {
    if (!e) {
      data = results;
      res.send(data);
    } else {
      data = e;
      res.send(e);
    }
  });

  console.log(data);
});

// post to database

app.post("/post", (req, res) => {
  const query =
    "insert into users(username,email,phonenbr) values ('bibek','bibek@abc.com','3214854'),('bibekw25','bi52cbek@adwbc.com','321854')";
  con.query(query, (e, results) => {
    if (!e) {
      res.send("data inserted successfully");
    }
  });
});

// save to database

app.post("/save", (req, res) => {
  const query = req.body;
  con.query("insert into users set?", query, (e, results, fields) => {
    if (e) e;
    res.send(results);
  });
});

// update

app.put("/update/:id", (req, res) => {
  const query = [req.body.username,req.body.email,req.body.phone];

  con.query(
    `update users set username=?,email=?,phonenbr=? where personId=${req.params.id}`,
    query,
    (e, results, fields) => {
      if (e) e;
      res.send(results);
    }
  );
});
app.listen(8200);
