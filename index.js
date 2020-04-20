const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(req, res) {
    res.send('hello word');
});

app.get('/json', function(req, res) {
    res.json({hello: 'word'});
});

app.listen(config.port, function(){
    console.log('Server is running on port %s \n ', config.port);
});