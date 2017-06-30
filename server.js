var http = require('http'), io = require('socket.io');

var server = http.createServer();
server.listen(8080);

c = 1;
clicks = 0;

var socket = io.listen(server);

socket.on('connection', function(client){

	// Success!  Now listen to messages to be received
	client.on('click',function(event){
		clicks = clicks + c;
	});
	client.on('disconnect',function(){
		console.log('Server has disconnected');
	});
});
