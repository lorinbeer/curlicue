
var util = require('./util.js');

/**
 * y = mx + c
 */

var Line = function(config) {
    this._slope = util.slope(config.p0, config.p1);
    this._c = util.yIntercept(this._slope, config.p0);
};

Line.prototype.getslope = function() {
    return this._slope;     
};

Line.prototype.yintercept = function() {
    return this._c;
};

Line.prototype.f = function(x) {
    return this._slope * x + this._c;
};


module.exports = Line;
