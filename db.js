// setting up the variable to use mysql.
// setting up for the database to grab info from the lib/suggestions file.
const mysql = require("mysql");
const prompts = require("./lib/prompts");

// creating the mysql connection to localhost/3305.
const connection = mysql.createConnection({
    host: "localhost",
    port: 3305,
    user: root,
    password: "Sunkiss11**",
    database: "employee_tracker_module_12"
});

// letting us know wheather or not there has been a connection with a callback function.
connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId + "/n");
    prompts.connection = connect
});