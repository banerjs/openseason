var express = require('express');
var app = require('../app');
var router = express.Router();

var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('views/index.html');
});

router.post('/', function(req, res) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	console.log(app);
   	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		if (err) {
			return res.status(500).send({error: err, 'message': 'There was an error'});
		} else if (!re.test(req.param('email'))) {
			return res.send({error: "Invalid EMAIL", 'message': "Invalid email address"});
		}
		client.query('INSERT INTO subscribers (email) VALUES ($1)', [req.param('email')], function(err, result) {
			done();
			if (err) {
				return res.status(500).send({error: err, 'message': 'There was an error'});
			}
			res.send({error: null, message: 'Done'});
		});
	});
});

module.exports = router;
