var express = require('express');
var router = express.Router();

var mysql=require('../model/mysql.js');
router.get('/', function(req, res, next) {
  var jason = req.query;
  var query = "select su.subject,su.sname from staff st,subjects su where st.subjects=su.subject and st.sid='"+jason.staff+"';";
  //console.log(jason.staff);
  //console.log(query);

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