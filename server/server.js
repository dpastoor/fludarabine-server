var express = require('express');
var app = express();
var config = require('./config/config');
var logger = require('./util/logger');
import api from './api/api';

// setup the app middlware
require('./middleware/appMiddleware')(app);

app.use('/api/v1', api);


// export the app for testing
module.exports = app;
