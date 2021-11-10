const express = require("express");
const router = express.Router();
const { request, response } = require("express");
const mysql = require("mysql");
const chalk = require("chalk");
const sha256 = require("sha256");
const connection = {};
require("dotenv").config();
const sendEmail = require("./email");

connection.mysql = mysql.createConnection({
  database: process.env.DATABASE,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT, //mysql port
});

connection.mysql.connect();

router.post("/signup", (request, response) => {
  const hashedPassword = sha256(request.body.password + "+faithsapp");
  // backend hashes password and stores it in database
  // make hashed pw unique by adding on to it

  const query = `INSERT INTO appUsers (email, hashedPassword)
                 VALUES (?, ?)`;

  const values = [request.body.email, hashedPassword];
  // prepared statement to prevent sql injection - separates data from query

  console.log(chalk.yellowBright("hashed password:", hashedPassword));
  console.log(chalk.redBright("query:", query));

  connection.mysql.query(query, values, (error, results) => {
    console.log(
      chalk.magenta(JSON.stringify(results)),
      chalk.bgCyan("error:", error)
    );
    sendEmail(request.body.email, "no password", "thanksForSigningUpTemplate");

    if (!error) {
      response.json({ user_added: true });
      console.log(chalk.greenBright("success, user added!"));
    } else response.json({ user_added: false });
  });
});
// registration

router.post("/login", (request, response) => {
  const hashedPassword = sha256(request.body.password + "+faithsapp");

  const query = `SELECT id, count(*) as count FROM appUsers
                 WHERE email LIKE ?
                 AND hashedPassword LIKE ?`;

  const values = [request.body.email, hashedPassword];
  // prepared statement to prevent sql injection - separates data from query

  console.log(chalk.yellowBright("values/login details:", values));
  console.log(chalk.redBright("query:", query));

  connection.mysql.query(query, values, (error, results) => {
    if (results[0].count === 1) {
      response.json({ user_authenticated: true });
      console.log(chalk.magenta("correct login, user authenticated"));
    } else {
      response.json({ user_authenticated: false });
      console.log("incorrect login");
    }
  });
});
// login - checks signup details which were stored in the database

router.post("/password_reset", (request, response) => {
  console.log("User requested password reset!", request.body.email);

  const newPassword = Math.floor(Math.random() * 10000000000);
  const hashedPassword = sha256(newPassword + "+faithsapp");

  const query = `UPDATE appUsers 
                 SET hashedPassword = "${hashedPassword}"
                 WHERE email = "${request.body.email}"`;

  connection.mysql.query(query, (error, results) => {
    console.log(error, results);
    sendEmail(request.body.email, newPassword, "forgotPasswordTemplate");
    console.log(newPassword);

    if (!error) {
      response.json({ password_reset: true });
      console.log(chalk.greenBright("success, password reset!"));
    } else response.json({ password_reset: false });
  });

  // reset user's password in the database
  // generate a new password and email it to the user
  // hashedPasswording is one directional
});

module.exports = router;
