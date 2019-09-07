var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var targetLibrary = require('./../services/bitcoin');

it('getblockchaininfo should return chain data', function (done) {
  var theCall = targetLibrary.getClientInstance().getBlockchainInfo();
  theCall.then(
    function (data) {
      expect(data).to.be.not.null;
      data.chain.should.equal('main');
      done();
    }
  );  
});

