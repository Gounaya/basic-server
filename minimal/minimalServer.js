const http = require('http');

var server = http.createServer(
	function(request, response) {
			
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write('<h1>First minimal node server</h1>');
		response.write('<p>I am alive</p>');
		response.end('bye');
	}
);

server.listen(8080);
