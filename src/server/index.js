const fs = require("fs");
const path = require("path");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// eslint-disable-next-line no-undef
const filePath = path.join(__dirname, "db.json");

const testData = JSON.parse(fs.readFileSync(filePath, "utf8"));

app.get("/", cors(), (req, res) => res.send(testData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
