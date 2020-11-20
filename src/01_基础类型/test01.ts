(() => {
  /* 1. 布尔值 */
  let isDone: boolean = false
  isDone = true
  // isDone = 3 // error

  /* 2. 数字 */
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制


  /* 3. 字符串 */
  let name:string = 'tom'
  name = 'jack'
  let age:number = 12
  const info: string = `My name is ${name}, I am ${age} years old!`

  /* 4. undefined 和 null */
  let u: undefined = undefined
  let n: null = null
  name = null
  name = undefined

  /* 5. 数组 */
  let arr: number[] = [1, 2, 4]
  let arr2: Array<string> = ['abc', 'aaa']

  /* 6. 元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同 */
  let t: [string, number] = ['tom', 23]
  // t = ['tom', 'aaa'] // error

  /* 7. 枚举: enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字 */

  enum Color {
    RED,
    GREEN,
    BLUE
  }

  console.log(Color, Color.GREEN)

  let myColor: Color = Color.GREEN
  console.log(myColor, Color[myColor])
  enum Color2 {
    RED=3,
    GREEN,
    BLUE
  }
  console.log(Color2)

  /* 8. any */
  let notSure: any = 123
  notSure = 'abc'
  let arr3: any[] = ['abc', 123, {}]

  /* 9. void: 当一个函数没有返回值时，你通常会见到其返回值类型是 void */
  function fn (): string {
    return 'abc'
  }
  function fn2(): void {
    // return undefined
    return null
  }

  /* 9. object */
  function fn3(obj: object): object {
    
    // return 'abc' // error
    return {}
    // return () => {}
    // return []
    // return null
    // return undefined
  }
  // fn3('abc') // error
  fn3(() => {})


})()