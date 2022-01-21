//*Express Code
const planetsRouter = require("./routes/planets/planets.router");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const app = express();

//Middleware functions
app.use(cors({ origin: "http://localhost:3000" })); //Allow cross-origin request

app.use(morgan("combined"));

//Will parse any incoming JSON from the body of incoming request
app.use(express.json());

//Serve our public file
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter); //Handle planets routes for incoming request

//Route handler function
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
