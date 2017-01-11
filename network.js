var http = require('http'),
		urls = ['www.yahoo.com','www.yahoo.co.jp','www.amazon.ca'];

		function fetchPage(url) {
	var start = new Date();
	http.get ({ host: url }, function(res) {
		console.log("Got Response from: " + url) ;
		console.log('Request took: ', new Date() - start, 'ms');
	});
}
for(var i = 0; i < urls.length; i++) {
	fetchPage(urls[i]);
}