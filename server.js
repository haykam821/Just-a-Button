const http = require("http");
const io = require("socket.io");

const logger = require("winston");
logger.level = "info";

const server = http.createServer();
server.listen(8080);

logger.info("The server has started and is now listening.");

const baseClickIncrease = 1;
let scoreTotal = 0;

const socket = io.listen(server);

socket.on("connection", (client) => {
    logger.info("A client has connected to the server.");

    client.on("click", (message) => {
        scoreTotal += baseClickIncrease;
    });
    client.on("disconnect", (message) => {
        logger.info("A client has disconnected from the server.");
    });
});
