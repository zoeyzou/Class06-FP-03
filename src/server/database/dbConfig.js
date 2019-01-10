/* Database setup & basic functionality. This file could (should!) be modularized in the future. */
const mysql = require("mysql");

const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env.development.server") });

const config = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

const { host, user, password, port, database } = config;

//Create a mysql pool as to not manage connection quite as tediously
const pool = mysql.createPool({
  connectionLimit: 10,
  host,
  port,
  user,
  password,
  database,
});

//A method for checking if a certain google id already exists in our database.
pool.getUserFromGoogleId = function(googleID) {
  return new Promise((resolve, reject) => {
    this.query("select * FROM users WHERE google_id = ?", [googleID], (err, results) => {
      if (err) reject("Something went wrong in fething a user!" + err);
      resolve(results);
    });
  });
};

//A method for getting he user info out of the ID (our id nr, not the google_id)
pool.getUserFromId = function(id) {
  return new Promise((resolve, reject) => {
    this.query("select * FROM users WHERE id = ?", [id], (err, results) => {
      if (err) reject("Something went wrong in fething a user!" + err);
      resolve(results);
    });
  });
};

//A method for creating new users.
pool.createNewUserFromGoogleId = function(googleID, fullName, imgURL) {
  return new Promise((resolve, reject) => {
    this.query(
      "INSERT INTO users (google_id, full_name, img_url) VALUES( ?, ?, ?)",
      [googleID, fullName, imgURL],
      (error, result) => {
        if (error) reject("Whoops! could not add Google User to DB!" + error);

        resolve(result);
      }
    );
  });
};

//CRUD actions
pool.getMentors = function(readTable) {
  return new Promise((resolve, reject) => {
    this.query("SELECT * from mentors", function(error, results, fields) {
      if (error) throw error;
      readTable(results);
    });
  });
};

module.exports = pool;
