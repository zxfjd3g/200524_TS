var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    /*
    类的基本定义与使用
    */
    var Greeter = /** @class */ (function () {
        // 构造方法
        function Greeter(message) {
            this.message = message;
        }
        // 一般方法
        Greeter.prototype.greet = function () {
            return 'Hello ' + this.message;
        };
        return Greeter;
    }());
    var c = new Greeter('world');
    console.log(c.greet());
})();
(function () {
    /*
    类的继承
    */
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.run = function (distance) {
            console.log("Animal run " + distance + "m");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.cry = function () {
            console.log('wang! wang!');
        };
        return Dog;
    }(Animal));
    var d = new Dog();
    d.run(2);
    d.cry();
})();
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " run " + distance + "m");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            // 调用父类型构造方法
            return _super.call(this, name) || this;
        }
        Snake.prototype.run = function (distance) {
            if (distance === void 0) { distance = 2; }
            console.log('Snake sliding...');
            console.log(this.name + " run " + distance + "m");
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            // 调用父类型构造方法
            return _super.call(this, name) || this;
        }
        Horse.prototype.run = function (distance) {
            if (distance === void 0) { distance = 4; }
            console.log('Horse dashing...');
            console.log(this.name + " run " + distance + "m");
        };
        return Horse;
    }(Animal));
    var o1 = new Snake('s1');
    o1.run();
    var o2 = new Horse('h1');
    o2.run();
    // 父类型引用指向子类对象  ===> 通过父引用调用的是子类型实例的方法  ==> 多态
    var o3 = new Horse('aaa');
    o3.run();
    function run(o) {
        o.run();
    }
    run(new Snake('s2'));
    run(new Horse('h2'));
})();
