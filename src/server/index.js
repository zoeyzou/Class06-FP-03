const fs = require("fs");
const path = require("path");

//express
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "../../build");

//mysql connection
const mysql = require("mysql");
const config = require("./config");
const connection = mysql.createConnection(config);

connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(buildPath));
}

// eslint-disable-next-line no-undef
const filePath = path.join(__dirname, "db.json");
const testData = JSON.parse(fs.readFileSync(filePath, "utf8")); //testdata to read from api
//

//CRUD actions
function getMentors(readTable) {
  connection.query("SELECT * from mentors", function(error, results, fields) {
    if (error) throw error;
    readTable(results);
  });
}

app.get("/api/mentors", cors(), (req, res) => {
  // res.send(testData)
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
