/**
 * Bitcoin client wrapper used to query bitcoin-core 
 * 
 */

var _ = require("lodash");
var shellJs = require("shelljs");
var config = require('../../services/config/index');

var fnGetClientInstance = (function () {
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
            "getdata": 3295,
            "getheaders": 1053,
            "ping": 448,
            "pong": 608,
            "reject": 350,
            "sendcmpct": 66,
            "sendheaders": 24,
            "verack": 24,
            "version": 126
          },
          "bytesrecv_per_msg": {
            "addr": 30717,
            "feefilter": 32,
            "getheaders": 1053,
            "headers": 673,
            "inv": 305853,
            "notfound": 865,
            "ping": 608,
            "pong": 448,
            "sendcmpct": 66,
            "sendheaders": 24,
            "tx": 19882,
            "verack": 24,
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

  /********************************************
  * Creates a new bitcoin core client instance
  * @returns {bitcoinClient}
  *********************************************/
  return function () {
    return new bitcoinClient();
  };
})();

/**
* IpEndPoint attaches to an ip endpoint (host+port)
* @class
*/
var IpEndPoint = (function () {
  /**
   * IpEndPoint attaches to an ip endpoint (host+port)
   * @class
   */
  function ipEndPoint() {
    var self = this,
      _data = arguments.length > 0
        ? (function parseData(input) {
          var dr = { host: null, port: 0 };
          var t = typeof input, n;
          if (t === 'string') {
            // TODO: How do we handle endpoints without ports?
            var sep = input.lastIndexOf(':');
            if (sep < 1) {
              dr.host = input.trim();
            } else {
              n = Number.parseInt(input.substr(sep + 1));
              if (!isNaN(n)) {
                dr.port = n;
              }
              dr.host = input.substr(0, sep).trim();
            }
          } else if (t === 'object') {
            if (input.port !== undefined) {
              n = Number.parseInt(input.port);
              if (!isNaN(n)) {
                dr.port = n;
              }
            }
            if (input.host !== undefined) {
              dr.host = input.host;
            }
          } else {
            console.error('Unexpected input passed to ipendpoint', { input: input, type: t });
          }
          return dr;
        })(arguments[0])
        : { host: null, port: 0 };
    self._host = _data.host;
    self._port = _data.port;
  }

  function fnToString() {
    return this.isEmpty()
      ? ''
      : this._port > 0
        ? (this._host || '') + ':' + this._port
        : this._host;
  }

  /**
   * Checks if this is an empty IpEndPoint
   * @returns {boolean} true if this is an empty endpoint
   */
  ipEndPoint.prototype.isEmpty = function () {
    return this._host === null && this._port < 1;
  };
  /**
   * Builds a string representation of this instance
   * @returns {string} String representation of instance.
   */
  ipEndPoint.prototype.toString = fnToString;
  /**
   * Builds a JSON representation of this instance
   * @returns {string} JSON representation of instance.
   */
  ipEndPoint.prototype.toJSON = fnToString;
  /**
   * Returns the host portion of this endpoint
   * @returns {string} Endpoint host
   */
  ipEndPoint.prototype.host = function () {
    return this._host;
  };
  /**
   * Returns the port portion of this endpoint
   * @returns {Number} Endpoint port
   */
  ipEndPoint.prototype.port = function () {
    return this._port < 1 ? NaN : this._port;
  };

  return ipEndPoint;
})();

/**
* NodeSupportedServices helps enumerate a node service bitmask
* @class
*/
var NodeSupportedServices = (function () {
  function nodeSupportedServices() {
    var initialValue = 0;
    if (arguments.length > 0) {
      switch (typeof arguments[0]) {
        case 'string':
          initialValue = new Number('0x' + arguments[0]).valueOf();
          break;
        case 'number':
          initialValue = arguments[0];
          break;
        case 'object':
          if (arguments[0] === null) {
            initialValue = 0;
          } else {
            // Copy constructor
            if (typeof arguments[0].value === 'number') {
              initialValue = arguments[0].value;
            } else {
              console.warn('unexpected object passed to NodeSupportedServices constructor', { input: arguments });
            }
          }
          break;
        default:
          console.warn('unexpected object passed to NodeSupportedServices constructor', { input: arguments });
          break;
      }
    }
    /**    
    * @field {number} Instance value
    */
    this.value = initialValue;
  }
  /**
  * Node Supported Service flags
  * @readonly
  * @enum {number}
  */
  nodeSupportedServices.NodeSupportedServiceFlag = {
    /** Unnamed */
    Unnamed: 0x0,
    /** Full node that can be asked for blocks. */
    NODE_NETWORK: 0x0001,
    /** Full node capable of responding to a getutxo protocol request */
    NODE_GETUTXO: 0x0002,
    /** Full node willing and capable of fulfilling bloom requests */
    NODE_BLOOM: 0x0004,
    /** Full node that can be asked for segregated witness data */
    NODE_WITNESS: 0x0008,
    /** Full node that supports Xtreme Thinblocks. */
    NODE_XTHIN: 0x0010,
    /** Same as NODE_NETWORK, but has at least the last 288 blocks.  See BIP159 for additional details. */
    NODE_NETWORK_LIMITED: 0x0400
  };
  /**
  * Node Supported Service names
  * @readonly
  * @enum {number}
  */
  nodeSupportedServices.NodeSupportedServiceName = {
    /** Unnamed **/
    Unnamed: 'Unnamed',
    /** Full node that can be asked for blocks. **/
    Network: 'Network',
    /** Full node capable of responding to a getutxo protocol request **/
    GetUtxo: 'GetUTXO',
    /** Full node willing and capable of fulfilling bloom requests **/
    Bloom: 'Bloom',
    /** Full node that can be asked for segregated witness data **/
    Witness: 'SegWit',
    /** Full node that supports Xtreme Thinblocks. **/
    XtremeThin: 'XtremeThinblocks',
    /** Same as NODE_NETWORK, but has at least the last 288 blocks.  See BIP159 for additional details. **/
    NetworkLimited: 'NetworkLimited'
  };
  /**
  * Returns a description for a given @typeref {nodeSupportedServices} value.
  * @param {nodeSupportedServices.NodeSupportedServiceFlag} service - The service flag to describe.
  * @returns {string} Description for flag.
  */
  nodeSupportedServices.describeServiceFlag = function (service) {
    switch (service) {
      case nodeSupportedServices.NodeSupportedServiceFlag.NODE_NETWORK:
        return nodeSupportedServices.NodeSupportedServiceName.Network;
      case nodeSupportedServices.NodeSupportedServiceFlag.NODE_BLOOM:
        return nodeSupportedServices.NodeSupportedServiceName.Bloom;
      case nodeSupportedServices.NodeSupportedServiceFlag.NODE_GETUTXO:
        return nodeSupportedServices.NodeSupportedServiceName.GetUtxo;
      case nodeSupportedServices.NodeSupportedServiceFlag.NODE_NETWORK_LIMITED:
        return nodeSupportedServices.NodeSupportedServiceName.NetworkLimited;
      case nodeSupportedServices.NodeSupportedServiceFlag.NODE_WITNESS:
        return nodeSupportedServices.NodeSupportedServiceName.Witness;
      case nodeSupportedServices.NodeSupportedServiceFlag.NODE_XTHIN:
        return nodeSupportedServices.NodeSupportedServiceName.XtremeThin;
      default:
        return 'Unknown';
    }
  };  
  /**
  * Enumerates all node service types that this instance supports.
  * @returns {nodeSupportedServices.NodeSupportedServiceFlag[]} Array of supported service bits.
  */
  function all(){
    var check = this.value, ret = [];
    _.each(nodeSupportedServices.NodeSupportedServiceFlag, x => {
      if (x > 0 && (check & x) === x) {
        ret.push(x);
      }
    });
    return ret;
  }
 
  /**
   * Builds a string representation of this instance
   * @returns {string} String representation of instance.
   */
  function fnToString() {
    return this.value.toString(16);
  }
  /**
  * Determines if this instance supports the requested service.
  * @param {nodeSupportedServices.NodeSupportedServiceFlag} service - The service to evaluate against.
  * @returns {boolean} true if this instance supports the requested service.
  */
  function supports(service) {
    return new Boolean((this.value & service) === service);
  }
 


  _.merge(nodeSupportedServices.prototype, {
    all: all,
    supports: supports,
    toJSON: fnToString,
    toString: fnToString
  });

  return nodeSupportedServices;
})();


/*
* MessageSizeDictionary class contains bytes used by various messages
* @class
*/
var MessageSizeDictionary = (function () {
  function messageSizeDictionary() {
    var self = this;
    if (arguments.length > 0 && arguments[0] != null) {
      _.each(arguments[0], function (v, k) {
        var vBuf = Number.parseInt(v);
        if (!isNaN(vBuf)) {
          self[k] = vBuf;
        }
      });
    }
  }

  /*
  * Adds the specified number of bytes to a message, optionally 
  * overwriting the existing value.
  * @param {string} msg - Name of the message bytes are added to.
  * @param {number} bytes - Number of bytes to add.
  * @param {boolean} [overwrite=false] - If true, any previous value will be overwritten.
  * @returns {number} New value for the specified message.
  */
  messageSizeDictionary.prototype.add = function (msg, bytes, overwrite) {
    if (typeof msg !== 'string') {
      throw new Error("Message name is a required argument");
    }
    msg = msg.trim();
    bytes = Number.parseInt(bytes);
    if (isNaN(bytes)) {
      throw new Error('bytes must be numeric value');
    }
    if (new Boolean(overwrite) === true) {
      this[msg] = bytes;
    } else {
      var current = this[msg] || 0;
      this[msg] = (current + bytes);
      bytes = this[msg];
    }
    return bytes;
  };
  /*
  * Determines whether a message is in the dictionary. 
  * @param {string} key - Message key to look for.
  * @returns {boolean} true if the given key is present, otherwise false.
  */
  messageSizeDictionary.prototype.contains = function (key) {
    return !isNaN(this[key]);
  };
  /*
  * Returns total number of bytes consumed by the specified message types.
  * @param {string} msg - Comma-deliminted Name of message to lookup.
  * @returns {number} Number of bytes used for this message type.
  */
  messageSizeDictionary.prototype.get = function (msg) {
    var nBuf;
    if (typeof msg === 'string') {
      // Were we passed multiple comma-delimited messages?
      var parts = msg.split(',');
      return this.get(parts);
    } else if (Array.isArray(msg)) {
      // Otherwise let's assume we have an arary
      var arrBuf = 0;
      for (var idx = 0; idx < msg.length; idx++) {
        nBuf = Number.parseInt(this[msg[idx]]);
        if (!isNaN(nBuf)) {
          arrBuf += nBuf;
        }
      }
      nBuf = arrBuf;
    } else {
      // Catch-all
      nBuf = 0;
    }
    return nBuf;
  };
  /*
  * Returns total number of message types contained in this dictionary.
  * @returns {Number} Number of messages in this dictionary.
  */
  messageSizeDictionary.prototype.length = function () {
    var ret = 0;
    _.each(this, v => {
      if (!isNaN(v)) {
        ret++;
      }
    });
    return ret;
  };
  return messageSizeDictionary;
})();

var PeerInfo = (function () {
  /**
   * PeerInfo attaches to getpeerinfo data 
   * @class
   */
  function peerInfo() {
    var self = this;
    if (arguments.length > 0) {
      _.merge(self, arguments[0]);
      // Attach to complex child values
      _.each([
        { members: ['addr', 'addrlocal', 'addrbind'], factory: x => new IpEndPoint(x) },
        { members: ['bytessent_per_msg', 'bytesrecv_per_msg'], factory: x => new MessageSizeDictionary(x) },
        { members: ['services'], factory: x => new NodeSupportedServices(x) }
      ], function (vtable) {
        var factory = vtable.factory;
        var members = typeof vtable.members === 'string' ? [vtable.members] : vtable.members;
        _.each(members, function (key) {
          var v = self[key];
          if (v) {
            self[key] = factory(v);
          }
        });
      });
    }
  }

  return peerInfo;
})();
/*
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
    "version": 126
  },
  "bytesrecv_per_msg": {
    "addr": 30717,        
  }
 */
module.exports = {
  util: {
    IpEndPoint: IpEndPoint,
    MessageSizeDictionary: MessageSizeDictionary,
    NodeSupportedServices: NodeSupportedServices,
    PeerInfo: PeerInfo
  },
  getClientInstance: fnGetClientInstance
};