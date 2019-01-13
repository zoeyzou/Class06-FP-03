const path = require("path");

//express
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "../../build");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

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

app.post("/users", function(req, res) {
  const post = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: "mentor",
  };

  connection.query("INSERT INTO users SET ?", post, function(err, result) {
    if (err) throw err;

    console.log(result);

    res.send({
      user: {
        id: result.insertId,
        name: post.name,
        email: post.email,
        role: post.role,
      },
    });
  });
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
