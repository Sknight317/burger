// Require express
var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content
app.use(express.static("public"));

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controllers");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
