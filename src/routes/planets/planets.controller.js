/**
 * Controller takes in actions and requests from the user and
 * work with them to update the model
 */

const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

module.exports = { getAllPlanets };
