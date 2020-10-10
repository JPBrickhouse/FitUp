// Requiring necessary npm packages / dependencies
var express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
require('dotenv').config();

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Store google api key from environment
const google_api_key  = process.env.GOOGLE_API_KEY;

// Set Handlebars.  
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main", helpers: {googleApiKey: function() { return google_api_key; }}}));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/login-routes/loginHbars-routes.js")(app);
require("./routes/login-routes/api-routes.js")(app);
require("./controllers/projectTwoControllers.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
