const mysql = require("mysql");

// connection string
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node",
});


con.connect((e) => {
  if (e) {
    console.error("Couldn't make the connection!");
  }
});

module.exports = con;
