//*Express Code
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const app = express();

//Middleware functions
app.use(cors({ origin: "http://localhost:3000" })); //Allow cross-origin request

app.use(morgan("combined")); //logger middleware

//Will parse any incoming JSON from the body of incoming request
app.use(express.json());

//Serve our public static file
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter); //Handle planets routes for incoming request

app.use(launchesRouter); //Handle launches routes for incoming request

//Route handler function (the root page)
//This usese express matching capabilities where the asterisk matches everything
//that follows the slash to match baiscally any endpoints that isn't matched above.
//When express sees one of these paths that don't match any of our routes above it passes
//it on to our react application at index.html, so that react can handle the routing instead
app.get("/*", (req, res) => {
  //Send index.html file to the client
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
