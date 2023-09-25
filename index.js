const express = require("express");
const data = require("./data.json");

let server = express();

server.get("/api/users", (req, res) => {
  res.json(data);
});
server.get("/api/users/:id", (req, res) => {
  let userid = Number(req.params.id);
  let user = data.find((ids) => ids.id == userid);
  res.json(user);
});

server.listen(5000, (err) => {
  err ? console.log("Error occured") : console.log("server started");
});
