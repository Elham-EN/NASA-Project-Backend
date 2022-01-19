//*Express Code
const planetsRouter = require("./routes/planets/planets.router");
const cors = require("cors");
const express = require("express");
const app = express();

//Middleware functions
app.use(cors({ origin: "http://localhost:3000" })); //Allow cross-origin request
//Will parse any incoming JSON from the body of incoming request
app.use(express.json());
app.use(planetsRouter); //Handle planets routes for incoming request

module.exports = app;
