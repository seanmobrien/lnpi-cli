var express = require('express');
var router = express.Router();

var config = require('../services/config/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/themepad', function (req, res, next) {
  res.render('themepad', { title: 'Express' });
});

router.get('/config', function (req, res, next) {
  res.send(config);
});

module.exports = router;
