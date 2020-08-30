var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hoho', function(req, res, next) {
  res.send('respond with a hohohohohohohoh');
});

router.get('/hohoho', function(req, res, next) {
  res.json({name: 'jojojojojjo', age: 26});
});
module.exports = router;
