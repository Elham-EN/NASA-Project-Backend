const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration Soran",
  rocket: "Saturn IS2",
  launchDate: new Date("December 27, 2030"),
  target: "kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.fligjtNumber, launch);

//Data Access function
function getAllLaunches() {
  //Convert Map to Array
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
