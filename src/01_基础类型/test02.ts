/* 
联合类型（Union Types）表示取值可以为多种类型中的一种
*/
(() => {
  /* 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值 */
  function getString(value: number|string): string {
    return value.toString()
  }
  console.log(getString(123), getString('abc'))


  /* 
  类型断言(Type Assertion): 可以用来手动指定一个值的类型
  语法:
      方式一: <类型>值
      方式二: 值 as 类型  tsx中只能用这种方式
  */
  /* 需求2: 定义一个一个函数得到一个数字或字符串值的长度 */
  function getLength(value: number|string) {
    if ((<string>value).length) {
      return (value as string).length
    } 

    return value.toString().length
  }
  console.log(getLength(123), getLength('abcd'))

  /* 
  类型推断
  类型推断: TS会在没有明确的指定类型的时候推测出一个类型
  */
  let a = 123  // 推断为number
  // a = 'abc'  // error

  let aa  // 推断为any
  aa = 123
  aa = 'abc'



})()