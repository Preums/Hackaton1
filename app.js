let express = require('express');
let app = express();
let path = require("path");

let index = require('./routes/index');
let about = require('./routes/about');
let coucou = require('./routes/Coucou');
let bonjour = require('./routes/Bonjour');

app.use('/', index);
app.use('/about', about);
app.use('/coucou', coucou);
app.use('/bonjour', bonjour);
app.listen(3000);

module.exports = app;