const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
app.use(express.json()); // make body of request accessible
const cors = require("cors");
// it's fine if the user is using stuff on other domains
// it's ok if the user is connecting to other place than from where I live
app.use(cors());
const helmet = require("helmet");
// takes care of various security issues to minimise chances of being hacked
app.use(helmet());

const PORT = process.env.PORT || 6002; //use the port provided, else 6002

app.use("/", require("./routes/user")); //global middleware - whenever request made to /, use the routes code in the user.js

app.listen(PORT);
