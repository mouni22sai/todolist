var express = require('express');
var router = express.Router();
var path = require('path');
const {Client} = require('pg')
const client = new Client({
  user : 'postgres',
  password : 'mounika1#',
  host : 'localhost',
  port : 5432,
  database : 'todolist'
});
client.connect();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../public/html/index.html'));
});

module.exports = router
