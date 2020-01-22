console.log("app is loading");
const express = require("express");
const app = express();
const path = require("path");

const multer = require("multer");
const uploadDirectory = "uploads/";

const upload = multer({ dest: uploadDirectory });

app.post("/api", upload.single("someFile"), (req, res) => {
  console.log("/api is accessed");

  res.status(201).send({ body: req.body, file: req.file });
});

app.get("/images/:newFileName", (req, res) => {
  console.log("/images/:newFileName is accessed");

  const fullPathFileName = path.join(
    __dirname,
    uploadDirectory,
    req.params.newFileName
  );
  
  res.sendFile(fullPathFileName);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
