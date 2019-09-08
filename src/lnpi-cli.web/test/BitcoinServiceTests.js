var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var _ = require("lodash");

var btc = require('./../services/bitcoin');

it('getblockchaininfo should return chain data', function (done) {
  var theCall = btc.getClientInstance().getBlockchainInfo();
  theCall.then(
    function (data) {
      expect(data).to.be.not.null;
      data.chain.should.equal('main');
      done();
    }
  );  
});

/*
 * IpEndPoint Class
 * 
 */
(function () {
  var expectedHost = 'hostname';
  var expectedPort = 3000;
  var hostAndPort = expectedHost + ':' + expectedPort;

  it('IpEndPoint constructor passed nuthin should be empty', function () {
    var target = new btc.util.IpEndPoint();
    target.isEmpty().should.be.true;
  });
  it('IpEndPoint constructor passed data should parse it', function () {
    var target = new btc.util.IpEndPoint(hostAndPort);
    target.host().should.equal(expectedHost, 'Host value mismatch');
    target.port().should.equal(expectedPort, 'Port value mismatch');
    target.isEmpty().should.be.false;
  });
  it('IpEndPoint constructor passed only host should parse accordingly', function () {
    var target = new btc.util.IpEndPoint(expectedHost);
    target.host().should.equal(expectedHost, 'Host value mismatch');
    var p = target.port();
    isNaN(p).should.be.true;
  });
  it('IpEndPoint toString should return host:port', function () {
    var target = new btc.util.IpEndPoint(hostAndPort);
    target.toString().should.equal(hostAndPort);
  });
  it('IpEndPoint::toString called on empty should return string::empty', function () {
    var target = new btc.util.IpEndPoint();
    target.toString().should.equal('');
  });
  it('IpEndPoint::toString called on non-empty should return host:port', function () {
    var target = new btc.util.IpEndPoint(hostAndPort);    
    target.toString().should.equal(hostAndPort);
  });
})();
/*
 * PeerInfo Class
 * 
 */
(function () {
  function peerInfoData() {
    return _.merge({},
      {
        "id": 3,
        "addr": "167.99.174.6:8333",
        "addrlocal": "5.199.130.188:43546",
        "addrbind": "127.0.0.1:50020",
        "services": "000000000000040d",
        "relaytxes": true, "lastsend": 1567555915,
        "lastrecv": 1567555915, "bytessent": 6690,
        "bytesrecv": 360371,
        "conntime": 1567553727, "timeoffset": -26,
        "pingtime": 0.312365,
        "minping": 0.309642,
        "version": 70015,
        "subver": "/Satoshi:0.17.1/",
        "inbound": false,
        "addnode": false,
        "startingheight": 593137,
        "banscore": 0,
        "synced_headers": 593140,
        "synced_blocks": 593133,
        "inflight": [
        ],
        "whitelisted": false,
        "minfeefilter": 0.00001000,
        "bytessent_per_msg": {
          "ping": 448,
          "version": 126
        },
        "bytesrecv_per_msg": {
          "addr": 30717,
          "getheaders": 1053
        }
      }, arguments.length > 0 ? arguments[0] : {});
  }

  function assertIsIpEndPoint(target){
    expect(target).to.be.not.null;
    expect(target._host).to.be.not.null;
    if (arguments.length > 1) {
      target._host.should.equal(arguments[1], 'Host value mismatch detected.');
    }
    expect(target._port).to.be.not.null;
    if (arguments.length > 2) {
      target._port.should.equal(arguments[2], 'Port value mismatch detected.');
    }
  }
  it('PeerInfo class should parse endpoints', function () {
    var target = new btc.util.PeerInfo(peerInfoData());
    // We have 3 ip endpoints to worry about
    assertIsIpEndPoint(target.addr);
    assertIsIpEndPoint(target.addrlocal);
    assertIsIpEndPoint(target.addrbind);
  });

})();