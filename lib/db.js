// setting up the variable to use mysql.
// setting up for the database to grab info from the lib/suggestions file.
const mysql = require("mysql2");

// creating the mysql connection to localhost/3305.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_tracker"
});

// letting us know wheather or not there has been a connection with a callback function.
connection.connect(function(err) {
     if(err) throw err;
     console.log("connected as id " + connection.threadId + "/n");
 });

module.exports = connection;