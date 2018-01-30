var http = require('http'), io = require('socket.io');

const logger = require("winston");
logger.level = 'info';

var server = http.createServer();
server.listen(8080);

logger.info("The server has started and is now listening.");

const baseClickIncrease = 1;
let scoreTotal = 0;

var socket = io.listen(server);

socket.on('connection', function(client){
	logger.info("A client has connected to the server.");

	client.on('click',function(event){
		scoreTotal += baseClickIncrease;
	});
	client.on('disconnect',function(){
		logger.info("A client has disconnected from the server.");
	});
});
