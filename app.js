let express = require('express');
let app = express();
let path = require("path");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

let index = require('./routes/index');
let about = require('./routes/about');
let coucou = require('./routes/Coucou');
let bonjour = require('./routes/Bonjour');

app.use(express.bodyParser());

app.use('/', index);
app.use('/about', about);
app.use('/coucou', coucou);
app.use('/bonjour', bonjour);
app.listen(3000);

module.exports = app;