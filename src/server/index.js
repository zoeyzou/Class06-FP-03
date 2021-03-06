const path = require("path");

//express
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "../../build");

//mysql connection
const mysql = require("mysql");
const config = require("./config.js");
const connection = mysql.createConnection({
  host: process.env.host || config.host,
  user: process.env.user || config.user,
  password: process.env.password || config.password,
  database: process.env.database || config.database,
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(buildPath));
}

//CRUD actions
function getMentors(readTable) {
  connection.query("SELECT * from mentors", function(error, results, fields) {
    if (error) throw error;
    readTable(results);
  });
}

app.get("/api/mentors", cors(), (req, res) => {
  getMentors(function(results) {
    res.send(JSON.stringify(results));
  });
});

app.post("/api/mentors", function(req, res) {
  res.send("something");
});

app.get("/static/*", (req, res) => {
  const fullFilePath = path.join(buildPath, req.originalUrl);
  res.sendFile(fullFilePath); // SECURITY ISSUE!
});

app.get("/*", (req, res) => {
  const indexPath = path.join(buildPath, "index.html");
  res.sendFile(indexPath);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
