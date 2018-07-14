//npm dependcies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//set up the express server stuff
var app = express();
var PORT = 3000;

//set up the body parser
app.use(bodyParser.urlencoded({extended: true}));
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


//shows all reservations
app.get("/api", function(req, res) {
    return res.json(reservations);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})

app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    characters.push(newTable);
  
    res.json(newTable);
  });