let express = require('express');
let app = express();
let path = require("path");

let index = require('./routes/index');
let index2 = require('./routes/index2');
let index3 = require('./routes/index3');


app.use('/', index);
app.use('/index2', index2);
app.use('/index3', index3);


app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);

module.exports = app;