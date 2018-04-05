let express = require('express');
let path = require("path");
let router = express.Router();

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../views', 'index3.html'));
});

module.exports = router;