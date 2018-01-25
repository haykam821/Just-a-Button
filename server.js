var http = require('http'), io = require('socket.io');

var server = http.createServer();
server.listen(8080);

const baseClickIncrease = 1;
scoreTotal = 0;

var socket = io.listen(server);

socket.on('connection', function(client){

	// Success!  Now listen to messages to be received
	client.on('click',function(event){
		scoreTotal += baseClickIncrease;
	});
	client.on('disconnect',function(){
		console.log('Server has disconnected');
	});
});
