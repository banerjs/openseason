var express = require('express');
var router = express.Router();

/* COMMENT */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/current', function(req, res) {
	res.send('cannot find your current location');
});

module.exports = router;
