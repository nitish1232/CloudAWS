var express = require('express');
var router = express.Router();

var mysql=require('../model/mysql.js');
router.get('/', function(req, res, next) {
  var json = req.query;
  var staff = json.staff;
  var sub = json.sub;
  //console.log(staff+sub);
  var query = "INSERT INTO staff values('"+staff+"','"+sub+"');";

  mysql.runQuery(query)
  .then(function(rows){
    var query2="UPDATE subjects set isAssigned='1' where subject='"+sub+"';";
    mysql.runQuery(query2);
  })
  .done(function(rows){
          var json={"status":"true"};

          res.send(json);

  },function(err){
  	console.log(err);
  });
});

module.exports = router;