var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/router.js');
const PORT = process.env.PORT || 5000
app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(router);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
