console.log("app is loading");
const express = require("express");
const app = express();

// used for json inside body
app.use(express.json());

const multer = require("multer");
// --- multer will store all files in this directory
const upload = multer({ dest: "upload/" });

// --- someFile is the key that was inserted in the client FormData
app.post("/api",  upload.single('someFile'),(req, res,next) => {
  console.log(req.body);
  console.log(req.file);

  console.log("POST : root is accessed");
  res.sendStatus(201);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
