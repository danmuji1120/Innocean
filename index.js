const path = require("path");
const http = require("http");

const express = require("express");
const app = express();
const port = 3000;
const static = require("serve-static");
const fs = require("node:fs");

const server = http.createServer(app);

app.use(static("public"));

var router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/", router);

// app.listen(3000);
server.listen(3000, () => {
  console.log("listening on *:3000");
});
