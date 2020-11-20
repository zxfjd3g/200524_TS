(() => {
  function add(x: number, y: number): number {
    return x + y
  }
  
  let myAdd = function(x: number, y: number): number { 
    return x + y
  }

  // 完整写法
  let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number { 
    return x + y
  }

  myAdd(2, 3)

  // 默认参数与可选参数
  function buildName(firstName: string='A', lastName?: string): string {
    if (lastName) {
      return firstName + '-' + lastName
    } else {
      return firstName
    }
  }
  
  console.log(buildName('C', 'D'))
  console.log(buildName('C'))
  console.log(buildName())

  // 剩余参数
  function info(x: string, ...args: string[]) {
    console.log(x, args)
  }
  info('abc', 'c', 'b', 'a')

})()

;(() => {
  /* 
  函数重载: 函数名相同, 而形参不同的多个函数
  需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 
  */

  // 重载函数声明
  function add (x: string, y: string): string
  function add (x: number, y: number): number

  // 定义函数实现
  function add (a: string|number, b: string|number):string|number {
    if (typeof a==='string' && typeof b==='string') {
      return a + b
    } else if (typeof a==='number' && typeof b==='number') {
      return a + b
    }
  }

  console.log(add('abc', 'cba'))
  console.log(add(123, 321))

  // console.log(add('abc', 123))   // error

})()