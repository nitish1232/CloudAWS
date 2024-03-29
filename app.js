var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var dept = require('./routes/dept');
var login = require('./routes/login');
var fetchSubjects = require('./routes/fetchSubjects');
var addSubject = require('./routes/addSubject');
var getSubjects = require('./routes/getSubjects');
var fetchMarks = require('./routes/fetchMarks');
var fetchDetails = require('./routes/fetchDetails');
var updateMarks = require('./routes/updateMarks');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/dept', dept);
app.use('/login', login);
app.use('/fetchSubjects',fetchSubjects);
app.use('/addSubject',addSubject);
app.use('/getSubjects',getSubjects);
app.use('/fetchMarks',fetchMarks);
app.use('/fetchDetails',fetchDetails);
app.use('/updateMarks',updateMarks);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
