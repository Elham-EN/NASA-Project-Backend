//*Server functionaility
//Create HTTP server using node built-in module
const http = require("http");
const PORT = process.env.PORT || 8000;
const app = require("./app"); //express app is a listener

const { loadPlanetsData } = require("./models/planets.model");

//Take request listener function as argument, which responds to all
//incoming request to our server. But what handle our requests? what do
//we pass in the createServer?
const server = http.createServer(app);

//Use this function when we need to load some data or perform some actions
//before our server actually starts responding to the user
async function startServer() {
  //To make sure the planets data is available for any request that ever
  //comes into our server. Populate planets data before listening for request
  await loadPlanetsData();
  //Listening on Port 8000. Listening for a request from the client
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
