const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
//We can wait for that promise to resolve before accepting any incoming request
//from the controller
function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    //Happen asychronously
    fs.createReadStream(path.join(__dirname, "..", "..", "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        //With each chunk of data that comes in from the stream
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found`);
      });
    resolve();
  });
}

//Data Access function
function getAllPlanets() {
  return habitablePlanets;
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
