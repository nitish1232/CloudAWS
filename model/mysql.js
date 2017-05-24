var mysql = require('mysql');
var Q = require('q');
var con = mysql.createConnection({
host : "localhost",
user : "root",
password : "",
port : "3306",
database : "cloud"
});



function mySqlClass()
{

}

mySqlClass.runQuery = function(query){
	var d= Q.defer();
	con.query(query,function(err,rows){
		if(err)
			d.reject(err);
		else
			d.resolve(rows);
	});
	return d.promise;
}
module.exports=mySqlClass;

