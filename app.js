var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/router.js');
app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(router);
app.listen(8000,function(){
  console.log("ping me on 8000!");
});
