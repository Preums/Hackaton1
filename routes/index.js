let express = require('express');
let router = express.Router();
let path = require("path");
var bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views', 'index.html'));
})

module.exports = router;