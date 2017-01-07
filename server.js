var express = require('express');
var app = express();

process.env.PORT = 9000;


app.use('/', express.static(__dirname + '/app'));

app.listen(process.env.PORT, function () {
	console.log("Listening on port ", process.env.PORT);
});