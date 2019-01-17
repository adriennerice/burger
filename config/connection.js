//****** File used to connect Node to MySQL *****

// Set-up MySQL connection
require("dotenv").config();
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.MYSQL_PASSWORD, 
        database: "burgers_db"
    });
};   

//Make connection
connection.connect(function(err) {
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID *" + connection.threadId);
})

//Export connection for the ORM to use
module.exports = connection;