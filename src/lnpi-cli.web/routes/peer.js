var createError = require('http-errors');
var express = require('express');
var router = express.Router();

var btcFactory = require('./../services/bitcoin/index');

/* GET peer detail. */
router.get('/:id', function (req, res, next) {

  var cliReq = btcFactory.getClientInstance().getPeerInfo();
  cliReq.then(function (peers) {
    var peer = null;
    for (var i = 0; i < peers.length; i++) {
      if (peers[i].id == req.params.id) {
        peer = peers[i];
        break;
      }
    }  
    if (peer === null) {
      // forward a 404-not found down the chain
      next(createError(404));
    } else {
      // TODO: Any pre-processing on our peer model before we throw it to the wolves
      // render peer view
      res.render('peer', peer);
    }
  }, function (err) {
      // forward a 500 failure down the chain
      next(createError(500));
  });  
});

module.exports = router;
