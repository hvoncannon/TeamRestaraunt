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

var waitlist = [
    {
        name: "dude2",
        phoneNumber: 9499999999,
        email: "dude@gmail.com",
        uniqueID: "32bofi"
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
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});