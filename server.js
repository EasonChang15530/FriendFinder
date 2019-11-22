// EXPRESS CONFIGURATION
// Sets up the basic properties for express server
var express = require('express');

// Creates an express server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Sets listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});