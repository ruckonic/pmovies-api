const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.routes');

app.use(express.json());

moviesApi(app);

app.listen(config.port, function(){
    console.log('Server is running on port %s \n ', config.port);
});