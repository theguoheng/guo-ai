var express = require("express");
var app = express();
// Use the Express router. 
var router = express.Router(); 
// var pointing to pwd/views/. 
var path = __dirname + '/views/';

// Change view engine from Jade to EJS.
// We use .ejs for shared header. 
app.set('view engine', 'ejs');

// Middleware to serve static files like stylesheets. 
// This is why index.ejs can call "scripts/witapi.js". 
app.use(express.static(__dirname + '/public'));

// Router middle layer setup. 
router.use(function(request, response, next) {
	console.log("/" + request.method);
	next(); // Execute the next route. 
});

// The following uses --sendFile() to send files-- NO!
// response.render() to render the ejs file
// --from 'server' to client according-- to the GET request received. 

router.get("/", function(request, response) {
	response.render(path + "index.ejs");
});

router.get("/about", function(request, response) {
	response.render(path + "about.ejs");
});

router.get("/findme", function(request, response) {
	response.render(path + "findme.ejs");
});

// Tell Express to use the routes defined above. 
app.use("/", router);

// For 404 responses. 
app.use(function(request, response) {
	response.sendFile(path + "404.html");
});

// Set port for Heroku deployment || local view.
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
	console.log ("SPA launched at port 5000");
});

