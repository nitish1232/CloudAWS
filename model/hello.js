var mysql = require('mysql');
var con = mysql.createConnection({
host : "localhost",
user : "root",
password : "password",
port : "3306",
database :"sample"
});

con.connect();