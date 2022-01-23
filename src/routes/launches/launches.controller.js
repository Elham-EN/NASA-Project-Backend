const { getAllLaunches } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  //Covert Map into Array
  return res.status(200).json(getAllLaunches());
}

module.exports = { httpGetAllLaunches };
