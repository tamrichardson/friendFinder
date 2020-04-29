// Dependencies
var express = require("express");
var path = require("path");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});