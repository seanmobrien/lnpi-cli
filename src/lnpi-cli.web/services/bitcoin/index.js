/**
 * Bitcoin client wrapper used to query bitcoin-core 
 * 
 */

var _ = require("lodash");
var shellJs = require("shelljs");
var config = require('../../services/config/index');

module.exports = (function () {
  "use strict";
  function bitcoinClient() {
  }

  function makeMockIFace() {
    function makeMockFn(mockReturns) {
      return function () {
        return new Promise(function (resolve, reject) {
          resolve(mockReturns);
        });
      };
    }
    return {
      getBlockchainInfo: makeMockFn({
        "chain": "main",
        "blocks": 592857,
        "headers": 592857,
        "bestblockhash": "0000000000000000000bc03237dbc488db13989f289c44decfac9770842e76ff",
        "difficulty": 10771996663680.4,
        "mediantime": 1567397624,
        "verificationprogress": 0.9999984555417808,
        "initialblockdownload": false,
        "chainwork": "000000000000000000000000000000000000000008309e8e2a6eac56ccf7e4be",
        "size_on_disk": 270087613354,
        "pruned": false,
        "softforks": [
          {
            "id": "bip34",
            "version": 2,
            "reject": {
              "status": true
            }
          },
          {
            "id": "bip66",
            "version": 3,
            "reject": {
              "status": true
            }
          },
          {
            "id": "bip65",
            "version": 4,
            "reject": {
              "status": true
            }
          }
        ],
        "bip9_softforks": {
          "csv": {
            "status": "active",
            "startTime": 1462060800,
            "timeout": 1493596800,
            "since": 419328
          },
          "segwit": {
            "status": "active",
            "startTime": 1479168000,
            "timeout": 1510704000,
            "since": 481824
          }
        },
        "warnings": ""
      }),
      getPeerInfo: makeMockFn([
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
            "addr": 640,
            "feefilter": 32,
            "getaddr": 24,
            "getdata": 3295, "getheaders": 1053,
            "ping": 448,
            "pong": 608, "reject": 350,
            "sendcmpct": 66,
            "sendheaders": 24,
            "verack": 24, "version": 126
          },
          "bytesrecv_per_msg": {
            "addr": 30717,
            "feefilter": 32,
            "getheaders": 1053,
            "headers": 673, "inv": 305853, "notfound": 865,
            "ping": 608,
            "pong": 448, "sendcmpct": 66, "sendheaders": 24,
            "tx": 19882, "verack": 24,
            "version": 126
          }
        },
        {
          "id": 15,
          "addr": "188.40.105.14:8333",
          "addrlocal": "23.129.64.205:26230",
          "addrbind": "127.0.0.1:50058",
          "services": "000000000000040d",
          "relaytxes": true,
          "lastsend": 1567555912,
          "lastrecv": 1567555915,
          "bytessent": 2929,
          "bytesrecv": 272116,
          "conntime": 1567554169,
          "timeoffset": -3,
          "pingtime": 0.447232,
          "minping": 0.447232,
          "version": 70015,
          "subver": "/Satoshi:0.18.0/",
          "inbound": false,
          "addnode": false,
          "startingheight": 593137,
          "banscore": 0, "synced_headers": 593140,
          "synced_blocks": 593133,
          "inflight": [],                                                         
          "whitelisted": false,
          "minfeefilter": 0.00001000,
          "bytessent_per_msg": {
            "addr": 780,
            "feefilter": 32,
            "getaddr": 24,
            "getheaders": 1053,
            "ping": 320,
            "pong": 480,
            "sendcmpct": 66,
            "sendheaders": 24,
            "verack": 24,
            "version": 126
          },
          "bytesrecv_per_msg": {
            "addr": 30862,
            "feefilter": 32,
            "getheaders": 1053,
            "headers": 673,
            "inv": 238456,
            "ping": 480,
            "pong": 320,
            "sendcmpct": 66,
            "sendheaders": 24,
            "verack": 24,
            "version": 126
          }
        }, 
        {
          "id": 32,
          "addr": "218.145.29.195:8333",
          "addrlocal": "146.185.194.219:39890",
          "addrbind": "127.0.0.1:50122",
          "services": "000000000000000d",
          "relaytxes": true,
          "lastsend": 1567555915, "lastrecv": 1567555915,
          "bytessent": 2789,
          "bytesrecv": 178551,
          "conntime": 1567554980,
          "timeoffset": 85,
          "pingtime": 0.765248,
          "minping": 0.472805,
          "version": 70015,
          "subver": "/Satoshi:0.13.2/",
          "inbound": false,
          "addnode": false,
          "startingheight": 593138,
          "banscore": 0,
          "synced_headers": 593140,
          "synced_blocks": 593133,
          "inflight": [
          ],
          "whitelisted": false,
          "minfeefilter": 0.00000000,
          "bytessent_per_msg": {
            "addr": 620,
            "feefilter": 32,
            "getaddr": 24,
            "getdata": 302,
            "getheaders": 1053,
            "ping": 192,
            "pong": 256,
            "reject": 70,
            "sendcmpct": 66,
            "sendheaders": 24,
            "verack": 24,
            "version": 126
          },
          "bytesrecv_per_msg": {
            "addr": 30357,
            "getheaders": 1053,
            "headers": 673,
            "inv": 145564,
            "ping": 256,
            "pong": 192,
            "sendcmpct": 66,
            "sendheaders": 24,
            "tx": 216,
            "verack": 24,
            "version": 126
          }
        }
      ])
    };
  }

  function makeProdIFace() {
    function makeBitcoinShellCommand(args) {
      return function () {
        return new Promise(function (resolve, reject) {
          shellJs.exec('bitcoin-cli ' + args, function (code, stdout, stderr) {
            if (code === 0) {
              try {
                var data = JSON.parse(stdout);
                resolve(data);
              } catch (e) {
                reject(e);
              }              
            } else {
              reject(stderr);
            }
          });
        });
      };
    }

    return {
      getBlockchainInfo: makeBitcoinShellCommand('getblockchaininfo'),
      getPeerInfo: makeBitcoinShellCommand('getpeerinfo')
    };
  } 
  // Use either live or mock interface definitions based on btc.use_shim setting
  _.merge(bitcoinClient.prototype, config.btc.use_shim
    ? makeMockIFace()
    : makeProdIFace());

  return {
    getClientInstance: function () {
      return new bitcoinClient();
    }
  };
})();