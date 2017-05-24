var express = require('express');
var router = express.Router();

var mysql=require('../model/mysql.js');
router.get('/', function(req, res, next) {
  //var json = req.query;
  var query = "SELECT subject,sname FROM subjects where isAssigned='0';";

  mysql.runQuery(query)
  .done(function(rows){
          var j=1;
          var json = {};
          for(i in rows)
          {
            var sub = "sub_"+j;
            console.log(sub);
            json[sub] = rows[i].sname;
            j++;
          }
          json.count=j-1;

          res.send(json);

  },function(err){
  	console.log(err);
  });
});

module.exports = router;