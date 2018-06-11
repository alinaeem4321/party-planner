var express = require('express');
var router = express.Router();
var index = require('../models/index.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});
};