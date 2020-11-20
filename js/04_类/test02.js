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
    public: 都可以
    protected: 子类
    private: 只能内部自己访问
    */
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
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sex = '男';
            _this.age = 18;
            return _this;
        }
        Person.prototype.run = function (distance) {
            if (distance === void 0) { distance = 5; }
            _super.prototype.run.call(this);
            console.log(this.name, this.sex, this.age);
        };
        return Person;
    }(Animal));
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Student.prototype.run = function (distance) {
            if (distance === void 0) { distance = 6; }
            console.log(this.name, this.sex);
            // console.log(this.age)  // error
        };
        return Student;
    }(Person));
    var s = new Student('s1');
    console.log(s.name);
    // console.log(s.sex, s.age)
})();
(function () {
    var Person = /** @class */ (function () {
        function Person() {
            this.firstName = 'A';
            this.lastName = 'B';
        }
        Object.defineProperty(Person.prototype, "fullName", {
            get: function () {
                return this.firstName + '-' + this.lastName;
            },
            set: function (value) {
                var names = value.split('-');
                this.firstName = names[0];
                this.lastName = names[1];
            },
            enumerable: false,
            configurable: true
        });
        Person.count = 0;
        return Person;
    }());
    var p = new Person();
    console.log(p.fullName);
    p.firstName = 'C';
    p.lastName = 'D';
    console.log(p.fullName);
    p.fullName = 'E-F';
    console.log(p.firstName, p.lastName);
})();
(function () {
    /*
    抽象类
      不能创建实例对象, 只有实现类才能创建实例
      可以包含未实现的抽象方法
    */
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.test = function () {
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.cry = function () {
            console.log(' Dog cry()');
        };
        return Dog;
    }(Animal));
    // const a = new Animal()  // error
    var d = new Dog();
    d.cry();
    d.test();
})();
