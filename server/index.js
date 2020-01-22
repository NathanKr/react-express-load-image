console.log("app is loading");
const express = require("express");
const app = express();
const path = require("path");


// --- multer is used for content-type: multipart/form-data 
// --- it is a must for loading file 
const multer = require("multer");

// --- multer will store all files in this directory under root
const uploadDirectory = "upload/";

const upload = multer({ dest: uploadDirectory });

// --- someFile is the key that was inserted in the client FormData for file
app.post("/api", upload.single("someFile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  console.log("POST : root is accessed");
  res.status(201).send({ body: req.body, file: req.file });
});

// --- get image file
app.get("/images/:newFileName", (req, res) => {
  const fileName = path.join(
    __dirname,
    uploadDirectory,
    req.params.newFileName
  );
  console.log("GET : root is accessed");
  res.sendFile(fileName);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
