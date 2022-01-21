const launches = new Map();

const launch = {
  fligjtNumber: 100,
  mission: "Kepler Exploration Soran",
  rocket: "Saturn IS2",
  launchDate: new Date("December 27, 2030"),
  destination: "kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.fligjtNumber, launch);

module.exports = {
  launches,
};
