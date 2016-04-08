// server.js

// BASE SETUP
// =============================================================================


// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');//for orther app can request

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Menus'); // connect to our database
var db = mongoose.connection;
db.on('error', console.error);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 8080;        // set our port.


var Cuisine = require('./app/models/cuisine');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our home!' });   
});

router.route('/cuisines')
    // create a bear (accessed at POST http://localhost:8080/api/cuisines)


    // get all the bears (accessed at GET http://localhost:8080/api/cusines)
    .get(function(req, res) {
		Cuisine.find({}, function(err, cuisines) {
			if(err) throw err;
			res.json(cuisines);
		});
    });


// more routes for our API will happen here
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);