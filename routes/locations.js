var express = require('express');
var router = express.Router();

var request = require('request');

/* COMMENT */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/current', function(req, res) {
	res.send('cannot find your current location');
});

router.get('/cache/create', function(req, res) {
	res.send('<html><form method="POST"><input type="text" name="cid">Enter the name of the queue</input><input type="submit"></input></form></html>');
});

router.post('/cache/create', function(req, res) {
	res.send('Creating cache with id: ' + req.param("cid"));
});

module.exports = router;
