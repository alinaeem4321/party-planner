var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

var db = require('./models');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes go here
// ==========================================================
require('./routes/html-routes.js')(app);
// End of Routes 
// ==========================================================

// When app is deployed force will need to be set to false
db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
		console.log(`App listening on port ${PORT}.`);
	});
});

