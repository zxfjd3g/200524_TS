(function () {
    /*
    下面创建一个函数, 实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value
    */
    function getArray(value, count) {
        var arr = [];
        for (var index = 0; index < count; index++) {
            arr.push(value);
        }
        return arr;
    }
    // getArray(3, 5) // [3, 3, 3, 3, 3]
    // getArray('a', 5) // ['a', 'a', 'a', 'a', 'a']
    var arr1 = getArray(12.12, 5);
    var arr2 = getArray('abc', 6);
    console.log(arr1[0], arr2[0]);
    /*
    目标:
      1. 有语法提示
      2. 使用了不存在的语法要报错
    */
    console.log(arr1[0].toFixed(1), arr2[0].split(''));
    // console.log(arr2[0].toFixed(1), arr1[0].split(''))
})();
(function () {
    /*
    
  
    下面创建一个函数, 实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value
    泛型: 就是一个不确定的类型
    利用泛型技术解决问题?    函数泛型
    1. 定义泛型类型: 在函数名的右侧
    2. 使用泛型类型: 函数形参/返回值/函数体中
    3. 指定泛型的具体类型: 调用函数时, 函数名的右侧
    */
    function getArray(value, count) {
        var arr = [];
        for (var index = 0; index < count; index++) {
            arr.push(value);
        }
        return arr;
    }
    var arr1 = getArray(12.12, 5);
    var arr2 = getArray('abc', 6);
    console.log(arr1[0], arr2[0]);
    /*
    目标:
      1. 有语法提示
      2. 使用了不存在的语法要报错
    */
    console.log(arr1[0].toFixed(1), arr2[0].split(''));
    // console.log(arr2[0].toFixed(1), arr1[0].split(''))
    function swap(a, b) {
        return [a, b];
    }
    var result = swap('abc', 123);
    console.log(result[0].length, result[1].toFixed());
})();
(function () {
    /*
    泛型接口
    1. 定义泛型类型: 在接口名的右侧
    2. 使用泛型类型: 接口体中
    3. 指定泛型的具体类型: 在实现接口时, 接口名的右侧
    */
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age;
        }
        return User;
    }());
    var user1 = new User('tom', 12);
    var user2 = new User('tom2', 13);
    var UserCRUD = /** @class */ (function () {
        function UserCRUD() {
            this.data = []; // T[]
        }
        UserCRUD.prototype.add = function (item) {
            var id = Date.now();
            item.id = id;
            this.data.push(item);
            return id;
        };
        UserCRUD.prototype.getById = function (id) {
            return this.data.find(function (item) { return item.id === id; });
        };
        return UserCRUD;
    }());
    var uc = new UserCRUD();
    uc.add(user1);
    var id = uc.add(user2);
    console.log(uc.data);
    console.log(uc.getById(id));
    var Order = /** @class */ (function () {
        function Order() {
        }
        return Order;
    }());
})();
(function () {
    /*
  泛型类
  1. 定义泛型类型: 在定义类名的右侧
  2. 使用泛型类型: 类体中
  3. 指定泛型的具体类型: 创建类的实例时, 类名的右侧
  */
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    myGenericNumber.add(1, 2);
    var myGenericString = new GenericNumber();
    myGenericString.zeroValue = 'abc';
    myGenericString.add = function (x, y) {
        return x + y;
    };
    myGenericString.add('abc', 'ddd');
})();
(function () {
    /*
    泛型约束
    */
    // 没有泛型约束
    function fn(x) {
        // console.log(x.length)  // error
    }
    function fn2(x) {
        console.log(x.length); // error
    }
    // fn2(123)
    fn2('abc');
})();
