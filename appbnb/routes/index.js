var express = require('express');
var router = express.Router();


/* GET home page. */
exports.index = function(req, res){
res.render('index', { title: 'ejs' });};

exports.error = function(req, res){
res.render('error', { title: 'ejs' });};

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/error', function(req, res, next) {
  res.render('error.html');
});
module.exports = router;
