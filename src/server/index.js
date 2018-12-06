const fs = require("fs");
const path = require("path");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "../../build");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(buildPath));
}

// eslint-disable-next-line no-undef
const filePath = path.join(__dirname, "db.json");

const testData = JSON.parse(fs.readFileSync(filePath, "utf8"));

app.get("/api/mentors", cors(), (req, res) => res.send(testData));

app.get("/static/*", (req, res) => {
  const fullFilePath = path.join(buildPath, req.originalUrl);
  res.sendFile(fullFilePath); // SECURITY ISSUE!
});

app.get("/*", (req, res) => {
  const indexPath = path.join(buildPath, "index.html");
  res.sendFile(indexPath);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
