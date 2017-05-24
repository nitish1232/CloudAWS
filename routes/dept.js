var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name=req.query;
  res.render('dept', {name : name['name']});
  
});

module.exports = router;
