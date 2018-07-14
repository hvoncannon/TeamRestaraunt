//npm dependcies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up the express server stuff
var app = express();
var PORT = 3000;

//set up the body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//reservation array
var reservations = [
    {
        name: "hayden",
        phoneNumber: 9499999999,
        email: "hayden@gmail.com",
        uniqueID: "rte89"
    }
]


// Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//shows all reservations
app.get("/api", function (req, res) {
    return res.json(reservations);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})