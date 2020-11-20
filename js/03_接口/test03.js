var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.lightOn = function () {
        console.log('Car lightOn()');
    };
    Car.prototype.lightOff = function () {
        console.log('Car lightOff()');
    };
    Car.prototype.alert = function () {
        console.log('Car alert()');
    };
    return Car;
}());
var car = new Car();
car.lightOn();
car.lightOff();
car.alert();
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.lightOn = function () {
        console.log('Car lightOn()');
    };
    Car2.prototype.lightOff = function () {
        console.log('Car lightOff()');
    };
    Car2.prototype.alert = function () {
        console.log('Car alert()');
    };
    return Car2;
}());
