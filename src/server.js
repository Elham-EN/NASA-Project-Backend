//*Server functionaility
//Create HTTP server using node built-in module
const http = require("http");
const PORT = process.env.PORT || 8000;
const app = require("./app"); //express app is a listener

//Take request listener function as argument, which responds to all
//incoming request to our server. But what handle our requests? what do
//we pass in the createServer?
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
