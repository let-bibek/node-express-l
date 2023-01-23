// import mysql
const mysql = require("mysql");

// connection string
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node",
});

// checking if connection is established
con.connect((e) => {
  if (e) {
    console.error("error");
  } else {
    database();
  }
});


// main database code goes here
function database() {
  con.query("select * from users", (e, result) => {
    result.map((res)=>{
        console.log(`User ${res.personId}: ${res.username}, Email : ${res.email}, Phone : ${res.phonenbr}`);
    })
  });
}
