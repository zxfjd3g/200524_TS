/*
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
接口类型的对象
    多了或者少了属性是不允许的
    可选属性: ?
    只读属性: readonly
*/
var p = {
    // id: 'abc', // error
    id: 2,
    name: 'tom',
    age: 13,
};
// p.id = 3  // error
