const path = require("path");

//express
const express = require("express");
const cors = require("cors");
const authRouter = require("./auth/routes");
const passportSetup = require("./auth/passport-setup");
const pool = require("./database/dbConfig");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;
const buildPath = path.join(__dirname, "../../build");

//mysql connection
const mysql = require("mysql");
const config = require("./database/dbConfig.js");
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

//CRUD actions
function getMentors(readTable) {
  connection.query("SELECT * from mentors", function(error, results, fields) {
    if (error) throw error;
    readTable(results);
  });
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(buildPath));
}

//Here we set the lifetime of the cookie and the encryption string which can be any string you can think of.
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

// Then we initialize passport and start the sessions.
app.use(passport.initialize());
app.use(passport.session());
/*
 * Here we make sure that every route that comes from the router.js file start with /auth,
 * to make it easialy distinguishable from other routes.
 */
app.use("/auth", authRouter.router);

/*
 * Here we check the cookie if the cookie is valid with the middleware we wrote,
 * then we send the information back if it's vaild and we send nothing back if it's not.
 * we could send back json with information that the request was invalid if we wanted to
 * do anything in react to display this.
 */
app.post("/api/profile", authRouter.authCheck, (req, res) => {
  res.send(req.user);
});

/*
 * This is the catch all route to send the app to the browser on the first ping.
 */
app.get("/*", (req, res) => {
  const indexPath = path.join(buildPath, "index.html");
  res.sendFile(indexPath);
});

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
