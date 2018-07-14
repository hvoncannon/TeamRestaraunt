//npm dependcies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up the express server stuff
var app = express();
var PORT = 3000;

//set up the body parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//reservation array
var reservations = [
    {
        name: "hayden",
        phoneNumber: 9499999999,
        email: "hayden@gmail.com",
        uniqueID: "rte89"
    }
];

var waitinglist = [
    {
        name: "testWait",
        phoneNumber: 9499999999,
        email: "hayden@gmail.com",
        uniqueID: "rte8253439"
    }
];



//API routes for getting reserbations & waiting list
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitinglist", function(req, res) {
    return res.json(reservations);
});

//routes for loading pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.uniqueID = newTable.uniqueID.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
    
    if (reservations.length < 5) {
        reservations.push(newTable);
        res.send("Your reservation was accepted.")
    }
    
    else {
        waitinglist.push(newTable);
        res.send("Reservation list full. You were added to the waitlist")
    }
    
  
    console.log("res length: " + reservations.length);
    console.log("waiting length: " + waitinglist.length);
  });