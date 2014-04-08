
var Line = require('../src/line');

describe("line", function(){
    var line,
        config;

    beforeEach(function () {
        config = {
            p0 : [0,0],
            p1 : [1,0]
        }
        line = new Line(config);
    });

    describe('getslope()', function () {
        beforeEach(function(){
        });    

        it('should be defined', function () {
            expect(line.getslope).toEqual(jasmine.any(Function));
        });

        it('should return a numeric value', function () {
            expect(line.getslope()).toEqual(jasmine.any(Number));
        });
    });

    describe('yintercept()', function () {
        beforeEach(function(){
        });    

        it('should be defined', function () {
            expect(line.yintercept).toEqual(jasmine.any(Function));
        });

        it('should return a numeric value', function () {
            expect(line.yintercept()).toEqual(jasmine.any(Number));
        });
    });

    describe('f()', function () {
        beforeEach(function(){
        });    

        it('should be defined', function () {
            expect(line.f).toEqual(jasmine.any(Function));
        });
        it('should return a numeric value', function () {
            expect(line.f(0)).toEqual(jasmine.any(Number));
        });
     });
});
