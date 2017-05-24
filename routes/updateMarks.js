var express = require('express');
var router = express.Router();

var mysql=require('../model/mysql.js');
router.get('/', function(req, res, next) {
  var json = req.query;
  var object = JSON.parse(json.obj);
  var result ={};
  var subj=object['subj'];
  var j=1;
  for(i=1;i<=10;i++)
  {
    var uid= "1RV16SCS"+(i<10?"0"+i : i);
    var marks = object[uid];
    var query = "UPDATE "+subj+" set marks='"+marks+"' where uid='"+uid+"';";
    mysql.runQuery(query)
    .done(function(rows){
             
             //console.log(result['status']);
    },function(err){
        res.send(err);
    });

  }
  result = { status : 'true' };
  res.send(result);
  
  //var query = "SELECT subject,sname FROM subjects where isAssigned='0';";

  //mysql.runQuery(query)
  //.done(function(rows){

  //},function(err){
  	//console.log(err);
  //});
});

module.exports = router;