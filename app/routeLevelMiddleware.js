const express = require("express");
const path = require("path");
const fileDir = path.join(__dirname, "../public");
const app = express();

const reqFilter=require('./middlewareForSeparatePages')

app.set("view engine", "ejs");

const midd=express.Router();

midd.use(reqFilter)
app.get("", (req, res) => {
  res.sendFile(`${fileDir}/index.html`);
});

app.get("/login", (req, res) => {
  res.render("login");
});
midd.get("/about", (req, res) => {
  res.send("about page");
});
midd.get("/contact", (req, res) => {
  res.send("contact page");
});

app.use('/',midd)

app.listen(8200);
