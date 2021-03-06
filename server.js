// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// var port = process.env.PORT || 3000;

// var app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));

// app.use(bodyParser.urlencoded({ extended: false }));

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");

// app.use("/", routes);

// app.listen(port);


var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================
var app = express(); // call express
var PORT = process.env.PORT || 8081;
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

// ================================================================================
// ROUTER
// ================================================================================
var routes = require('./controllers/burgers_controller.js'); // this is importing routes
app.use('/', routes);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });