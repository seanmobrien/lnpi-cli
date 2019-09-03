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
      })
    };
  }

  function makeProdIFace() {
    function getBlockchainInfo() {
      return new Promise(function (resolve, reject) {
        shellJs.exec('bitcoin-cli getblockchaininfo', function (code, stdout, stderr) {
          if (code === 0) {
            resolve(stdout);
          } else {
            reject(stderr);
          }
        });
      });
    }

    return {
      getBlockchainInfo: getBlockchainInfo
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