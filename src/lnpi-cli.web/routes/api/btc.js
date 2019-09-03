var express = require('express');
var router = express.Router();

var btcFactory = require('./../../services/bitcoin/index');

router.get('/', function (req, res, next) {
  var cliReq = btcFactory.getClientInstance()
                         .getBlockchainInfo();
  cliReq.then(function (value) { res.type('json').send(value); });
});

module.exports = router;