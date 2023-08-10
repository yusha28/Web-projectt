var mysql      = require('mysql');
const Dotenv = require("dotenv");
Dotenv.config({path: "config.env"})

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_UNAME, 
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});
connection.connect();
module.exports = {connection};
