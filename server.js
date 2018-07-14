//npm dependcies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up the express server stuff
var app = express();
var PORT = 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})