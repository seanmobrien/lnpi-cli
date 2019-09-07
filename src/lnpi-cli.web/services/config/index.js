var _ = require("lodash");
var defaults = require("./defaults.js");
var configEnv = (process.env.NODE_ENV || "develop");

console.log("node environment = " + configEnv);

var config = require("./" + configEnv + ".js");
module.exports = _.merge({}, defaults, config);