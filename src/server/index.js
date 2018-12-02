const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();
const port = 5000;

const filePath = path.join(__dirname, "db.json");

const testData = JSON.parse(fs.readFileSync(filePath, "utf8"));

app.get("/", (req, res) => res.send(testData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
