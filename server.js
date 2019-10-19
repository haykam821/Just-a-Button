const http = require("http");
const io = require("socket.io");

const debug = require("debug");
const log = debug("just-a-button");

const server = http.createServer();
server.listen(8080);

log("The server has started and is now listening.");

const baseClickIncrease = 1;
let scoreTotal = 0;

const socket = io.listen(server);

socket.on("connection", (client) => {
    log("A client has connected to the server.");

    client.on("click", (message) => {
        scoreTotal += baseClickIncrease;
    });
    client.on("disconnect", (message) => {
        log("A client has disconnected from the server.");
    });
});
