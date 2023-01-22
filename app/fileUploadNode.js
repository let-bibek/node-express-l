const express = require("express");
const multer = require("multer");
const app = express();

// multer
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + "-" + Date.now() + "."+extension);
    },
  }),
}).single("userFile");
app.post("/upload", upload, (req, res) => {
  res.send("file uploaded");
});
app.listen(8200);
