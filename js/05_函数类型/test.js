(function () {
    function add(x, y) {
        return x + y;
    }
    var myAdd = function (x, y) {
        return x + y;
    };
    // 完整写法
    var myAdd2 = function (x, y) {
        return x + y;
    };
    myAdd(2, 3);
    // 默认参数与可选参数
    function buildName(firstName, lastName) {
        if (firstName === void 0) { firstName = 'A'; }
        if (lastName) {
            return firstName + '-' + lastName;
        }
        else {
            return firstName;
        }
    }
    console.log(buildName('C', 'D'));
    console.log(buildName('C'));
    console.log(buildName());
    // 剩余参数
    function info(x) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log(x, args);
    }
    info('abc', 'c', 'b', 'a');
})();
(function () {
    /*
    函数重载: 函数名相同, 而形参不同的多个函数
    需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加
    */
    // 定义函数实现
    function add(a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
        else if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
    }
    console.log(add('abc', 'cba'));
    console.log(add(123, 321));
    // console.log(add('abc', 123))   // error
})();
