/**
 * Controller takes in actions and requests from the user and
 * work with them to update the model
 *
 * Business Logic will be the controllers that respond to HTTP request
 */

const { getAllPlanets } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

module.exports = { httpGetAllPlanets };
