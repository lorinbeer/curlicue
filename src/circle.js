

/**
 * (x-h)^2 + (y-k)^2 = r^2
 * x*x + y*y = r^2
 * x^2 - r^2 = -y^2
 * 
 */
var Circle = function (config) {
    this._radius;
    this._center;
};

Circle.prototype.center = function() {
    return this._center;
};

Circle.prototype.radius = function() {
    return this._radius;
};

// x^2 - r^2 = -y^2
Circle.prototype.f  = function(x) {
    var y = 0;
    y = x*x - this._radius*this._radius;
    return (-1 * Math.sqrt(y));
};
