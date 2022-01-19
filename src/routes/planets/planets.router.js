const express = require("express");
const { getAllPlanets } = require("./planets.controller");

//Define all the routes in planetsRouter & groups together
//all related routes
const planetsRouter = express.Router();

//Listen for GET request on route /planets and then execute
//this callback func
planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
