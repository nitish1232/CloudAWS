var express = require('express');
var router = express.Router();

var mysql=require('../model/mysql.js');
router.get('/', function(req, res, next) {
  var json = req.query;
  var subj = json.subject;
  var query = "SELECT uid,marks FROM "+subj+";";

  mysql.runQuery(query)
  .done(function(rows){
          var j=1;
          var json = {};
          for(i in rows)
          {
            var sub = rows[i].uid;
            json[sub] = rows[i].marks;
          }
          res.send(json);
  },function(err){
  	console.log(err);
  });
});

module.exports = router;