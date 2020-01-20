console.log("app is loading");
const express = require("express");
const app = express();

// used for json inside body
app.use(express.json());

const multer = require("multer");
const upload = multer({ dest: "/upload/" });

app.get("/api", (req, res) => {
  console.log("GET : root is accessed");
  res.send({ res: "result from server !!!" });
});

app.post("/api", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log("POST : root is accessed");
  res.send({ res: "result from server !!!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
