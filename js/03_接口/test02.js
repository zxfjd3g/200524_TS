/*
接口可以描述函数类型(参数的类型与返回的类型)
*/
var mySearch = function (s, subs) {
    // return s.includes(subs)
    return s.indexOf(subs) != -1;
};
console.log(mySearch('abcd', 'bc'));
