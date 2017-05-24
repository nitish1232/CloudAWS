var express = require('express');
var router = express.Router();

var mysql=require('../model/mysql.js');
router.get('/', function(req, res, next) {
  var json = req.query;
  var uid = json.userID;
  var query = "SELECT st.uid,st.fname,st.lname,st.email,st.phone,aa.marks as aa,cc.marks as cc,ir.marks as ir,pm.marks as pm,ws.marks as ws FROM students st, aa aa,pm pm,cc cc,ir ir,ws ws WHERE st.uid=aa.uid&&st.uid=ir.uid&&st.uid=ws.uid&&st.uid=pm.uid&&st.uid=cc.uid&&st.uid='"+uid+"';";
  console.log(query);
  mysql.runQuery(query)
  .done(function(rows){
          var jason = {};
          for(i in rows)
          {
             jason.uid = uid;
             jason.name = rows[i].fname + rows[i].lname;
             jason.email = rows[i].email;
             jason.phone = rows[i].phone;
             jason.aa = rows[i].aa;
             jason.cc = rows[i].cc;
             jason.ir = rows[i].ir;
             jason.pm = rows[i].pm;
             jason.ws = rows[i].ws;
          }
          res.send(jason);

  },function(err){
  	console.log(err);
  });
});

module.exports = router;