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
 * MessageSizeDictionary Class
 * 
 */
(function () {

  var testData = {
    "version": 123,
    "getheaders": 1053,
    "ping": 20,
    "number": "321"
   },
    expectedCount = 4;

  function createTarget() {
    var args = _.merge({}, testData, arguments.length === 0 ? {} : arguments[0]);
    return new btc.util.MessageSizeDictionary(args);
  }

  it('MessageSizeDictionary constructor copies valid values', function () {
    var target = createTarget();
    target.length().should.equal(expectedCount);
  });
  it('MessageSizeDictionary constructor ignores invalid values', function () {
    var target = createTarget({"badvalue": "not a string"});
    target.length().should.equal(expectedCount);
  });
  it('MessageSizeDictionary constructor converts into numeric', function () {
    var target = createTarget();
    target.number.should.equal(321);
  });
  it('MessageSizeDictionary::add new key adds new value', function () {
    var target = createTarget(),
      key = "new_key",
      val = 123;
    target.add(key, val).should.equal(val);
    target.length().should.equal(expectedCount + 1);
  });
  it('MessageSizeDictionary::add existing key updates value', function () {
    var target = createTarget(),
      key = "version",
      val = 123,
      expected_val = 246;
    target.add(key, val).should.equal(expected_val);
    target.length().should.equal(expectedCount);
  });
  it('MessageSizeDictionary::get existing key returns expected value', function () {
    var target = createTarget(),
      key = "version",
      expected_val = 123;
    target.get(key).should.equal(expected_val);
  });
  it('MessageSizeDictionary::get missing key returns expected value', function () {
    var target = createTarget(),
      key = "not-there",
      expected_val = 0;
    target.get(key).should.equal(expected_val);
  });
  it('MessageSizeDictionary::get multiple keys returns sum', function () {
    var target = createTarget(),
      key = "version,ping",
      expected_val = 143;
    target.get(key).should.equal(expected_val);
  });
})();

/*
 * NodeServiceFlag
 *

(function () {

  function createTarget() {
    var v = 0;
    for (var idx = 0; idx < arguments.length; idx++) {
      v = v | arguments[idx];
    }
    return new btc.util.NodeServiceFlags(v);
  }

  it('NodeServiceFlag::get retrieves services', function () {
    var target = createTarget(
      btc.globals.ServiceIdentifier.NODE_GETUTXO,
      btc.globals.ServiceIdentifier.NODE_WITNESS,
      btc.globals.ServiceIdentifier.NODE_NETWORK
    );
    target.get(btc.globals.ServiceIdentifier.NODE_GETUTXO).should.be.true;
    target.get(btc.globals.ServiceIdentifier.NODE_WITNESS).should.be.true;
    target.get(btc.globals.ServiceIdentifier.NODE_NETWORK).should.be.true;
    target.get(btc.globals.ServiceIdentifier.NODE_BLOOM).should.be.false;
  });
  it('NodeServiceFlag::all retrieves services', function () {
    var target = createTarget(
      btc.globals.ServiceIdentifier.NODE_GETUTXO,
      btc.globals.ServiceIdentifier.NODE_WITNESS,
      btc.globals.ServiceIdentifier.NODE_NETWORK
    );
    var services = target.all();
    services.length.should.be.equal(3);
  });
})();
 */
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
  function assertIsMessageDictionary(target) {
    expect(target).to.be.not.null;
    var count = target.length();
    count.should.not.equal(0);    
  }
  it('PeerInfo class should parse endpoints', function () {
    var target = new btc.util.PeerInfo(peerInfoData());
    // We have 3 ip endpoints to worry about
    assertIsIpEndPoint(target.addr);
    assertIsIpEndPoint(target.addrlocal);
    assertIsIpEndPoint(target.addrbind);
  });
  it('PeerInfo class should parse message dictionary', function () {
    var target = new btc.util.PeerInfo(peerInfoData());
    // We have 3 ip endpoints to worry about
    assertIsMessageDictionary(target.bytessent_per_msg);
    assertIsMessageDictionary(target.bytesrecv_per_msg);
  });

})();