(function () {
    /* 1. 布尔值 */
    var isDone = false;
    isDone = true;
    // isDone = 3 // error
    /* 2. 数字 */
    var a1 = 10; // 十进制
    var a2 = 10; // 二进制
    var a3 = 10; // 八进制
    var a4 = 0xa; // 十六进制
    /* 3. 字符串 */
    var name = 'tom';
    name = 'jack';
    var age = 12;
    var info = "My name is " + name + ", I am " + age + " years old!";
    /* 4. undefined 和 null */
    var u = undefined;
    var n = null;
    name = null;
    name = undefined;
    /* 5. 数组 */
    var arr = [1, 2, 4];
    var arr2 = ['abc', 'aaa'];
    /* 6. 元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同 */
    var t = ['tom', 23];
    // t = ['tom', 'aaa'] // error
    /* 7. 枚举: enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字 */
    var Color;
    (function (Color) {
        Color[Color["RED"] = 0] = "RED";
        Color[Color["GREEN"] = 1] = "GREEN";
        Color[Color["BLUE"] = 2] = "BLUE";
    })(Color || (Color = {}));
    console.log(Color, Color.GREEN);
    var myColor = Color.GREEN;
    console.log(myColor, Color[myColor]);
    var Color2;
    (function (Color2) {
        Color2[Color2["RED"] = 3] = "RED";
        Color2[Color2["GREEN"] = 4] = "GREEN";
        Color2[Color2["BLUE"] = 5] = "BLUE";
    })(Color2 || (Color2 = {}));
    console.log(Color2);
    /* 8. any */
    var notSure = 123;
    notSure = 'abc';
    var arr3 = ['abc', 123, {}];
    /* 9. void: 当一个函数没有返回值时，你通常会见到其返回值类型是 void */
    function fn() {
        return 'abc';
    }
    function fn2() {
        // return undefined
        return null;
    }
    /* 9. object */
    function fn3(obj) {
        // return 'abc' // error
        return {};
        // return () => {}
        // return []
        // return null
        // return undefined
    }
    // fn3('abc') // error
    fn3(function () { });
})();
