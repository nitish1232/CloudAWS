var express = require('express');
var router = express.Router();

var mysql=require('../model/mysql.js');
router.get('/', function(req, res, next) {
  var json = req.query;
  var query = "SELECT * FROM users where uid='"+json.userID+"' and password='"+json.password+"';";
  mysql.runQuery(query)
  .done(function(rows){
  	for(i in rows){
    var json ={
         profile : rows[i].profile,
         status : "true"
    };
    }
  	res.send(json);
  
  },function(err){
  	console.log(err);
  });
});

module.exports = router;