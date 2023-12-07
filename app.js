var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var publicSlmodRouter = require('./routes/publicSlmod');
var public2SlmodRouter = require('./routes/public2Slmod');
var privateSlmodRouter = require('./routes/privateSlmod');
var private2SlmodRouter = require('./routes/private2Slmod');

var aliasesRouter_Syria = require('./routes/aliases_syria');
var aliasesRouter_Caucasus = require('./routes/aliases_caucasus');

var missionsRouter_Syria = require('./routes/missions_syria');
var missionsRouter_Caucasus = require('./routes/missions_caucasus');

var spawnableplanesRouter_Syria = require('./routes/spawnableplanes_syria');
var spawnableplanesRouter_Caucasus = require('./routes/spawnableplanes_caucasus');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/slmod/public', publicSlmodRouter)
app.use('/slmod/public2', public2SlmodRouter)
app.use('/slmod/private', privateSlmodRouter)
app.use('/slmod/private2', private2SlmodRouter)
app.use('/aliases/syria', aliasesRouter_Syria);
app.use('/aliases/caucasus', aliasesRouter_Caucasus);
app.use('/missions/syria', missionsRouter_Syria);
app.use('/missions/caucasus', missionsRouter_Caucasus);
app.use('/spawnableplanes/syria', spawnableplanesRouter_Syria);
app.use('/spawnableplanes/caucasus', spawnableplanesRouter_Caucasus);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
