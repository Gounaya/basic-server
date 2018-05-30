const http = require('http');
const url = require('url');
const querystring = require('querystring');

var server = http.createServer(
	function(request, response) {
		let name = "unknown";		
		let path = url.parse(request.url).pathname;    		
		let params = querystring.parse(url.parse(request.url).query);
			
		response.writeHead(200, {"Content-Type": "text/html"});
		if ('name' in params) {
			name = params['name'];
		}		
		
		response.write('<h1>Second node server</h1>');	
		response.write('<p style="color:#AAA">url is '+ request.url +', path is '+path+'</p>');
		response.write('<p>hello '+name+'</p>');
		
		response.end();
	}
);

server.listen(8080);
