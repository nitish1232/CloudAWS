var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:uname', function(req, res, next) {
  var name = req.params.uname;
  res.send(name);
  //console.log(name);
});

module.exports = router;
