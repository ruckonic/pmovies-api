const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// logger
const morgan = require('morgan');

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.routes');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('dev'));
// routes
moviesApi(app);

// catch error 404
app.use(notFoundHandler);

// Manejo de ERRORES
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function(){
    console.log('Server is running on port %s \n ', config.port);
});