let express = require('express');
let router = express.Router();
let path = require("path");
var bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views', 'index.html'));
})

router.get('/superMiddleware', 
	function (req, res, next) {
			console.log('hello middleware');
		  next();
}, function (req, res, next) {
			res.end('hello world');
		  next();
});

router.post('/', function(req, res){
    console.log("name : ", req.body.name);
    console.log("lastname : ", req.body.lastname);
});

router.post('/',urlencodedParser, function(req, res) {
    res.send('Username: ', req.body.name);
});

module.exports = router;