var _ = require("lodash");
var defaults = require("./defaults.js");
var config = require("./" + (process.env.NODE_ENV || "develop") + ".js");
module.exports = _.merge({}, defaults, config);