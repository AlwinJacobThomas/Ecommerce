var express = require('express');
var router = express.Router();
// Retrieve
var MongoClient = require('mongodb').MongoClient;


  /* GET home page. */
let val='Jackfrost'

router.get('/', function(req, res, next) {
    res.render('index',{val});
  });

module.exports = router;
