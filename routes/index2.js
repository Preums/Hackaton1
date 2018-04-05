let express = require('express');
let path = require("path");
let router = express.Router();

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index2.html'));
});

module.exports = router;