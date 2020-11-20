(() => {
  /* 
  下面创建一个函数, 实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value
  */
  function getArray(value: any, count: number): any[] {
    const arr: any[] = []

    for (let index = 0; index < count; index++) {
      arr.push(value)
    }

    return arr
  }

  // getArray(3, 5) // [3, 3, 3, 3, 3]
  // getArray('a', 5) // ['a', 'a', 'a', 'a', 'a']

  const arr1 = getArray(12.12, 5)
  const arr2 = getArray('abc', 6)
  console.log(arr1[0], arr2[0])
  /* 
  目标:
    1. 有语法提示
    2. 使用了不存在的语法要报错
  */
  console.log(arr1[0].toFixed(1), arr2[0].split(''))
  // console.log(arr2[0].toFixed(1), arr1[0].split(''))

})()


;(() => {
  /* 
  

  下面创建一个函数, 实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value
  泛型: 就是一个不确定的类型
  利用泛型技术解决问题?    函数泛型
  1. 定义泛型类型: 在函数名的右侧
  2. 使用泛型类型: 函数形参/返回值/函数体中
  3. 指定泛型的具体类型: 调用函数时, 函数名的右侧
  */
  function getArray<T>(value: T, count: number): T[] {
    const arr: T[] = []

    for (let index = 0; index < count; index++) {
      arr.push(value)
    }

    return arr
  }


  const arr1 = getArray<number>(12.12, 5)
  const arr2 = getArray<string>('abc', 6)
  console.log(arr1[0], arr2[0])
  /* 
  目标:
    1. 有语法提示
    2. 使用了不存在的语法要报错
  */
  console.log(arr1[0].toFixed(1), arr2[0].split(''))
  // console.log(arr2[0].toFixed(1), arr1[0].split(''))


  function swap <K, V> (a: K, b: V): [K, V] {
    return [a, b]
  }
  const result = swap<string, number>('abc', 123)
  console.log(result[0].length, result[1].toFixed())

})()

;(() => {
  /* 
  泛型接口
  1. 定义泛型类型: 在接口名的右侧
  2. 使用泛型类型: 接口体中
  3. 指定泛型的具体类型: 在实现接口时, 接口名的右侧
  */

  interface ICRUD<T> {
    data: Array<T>   // T[]
    add (item: T): number
    getById (id: number): T
  }


  class User {
    id?: number
    name: string
    age: number

    constructor (name, age) {
      this.name = name
      this.age
    }
  }

  const user1 = new User('tom', 12)
  const user2 = new User('tom2', 13)

  class UserCRUD implements ICRUD<User> {
    data: Array<User> = []   // T[]
    add (item: User): number {
      const id = Date.now()
      item.id = id
      this.data.push(item)
      return id
    }
    getById (id: number): User {
      return this.data.find(item => item.id===id)
    }
  }

  const uc = new UserCRUD()
  uc.add(user1)
  const id = uc.add(user2)
  console.log(uc.data)
  console.log(uc.getById(id))

  class Order {

  }

})()

;(() => {

    /* 
  泛型类
  1. 定义泛型类型: 在定义类名的右侧
  2. 使用泛型类型: 类体中
  3. 指定泛型的具体类型: 创建类的实例时, 类名的右侧
  */

  class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }
  
  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y 
  }

  myGenericNumber.add(1, 2)
  
  let myGenericString = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) { 
    return x + y
  }
  myGenericString.add('abc', 'ddd')

})()

;(() => {
  /* 
  泛型约束
  */
  // 没有泛型约束
  function fn <T>(x: T): void {
    // console.log(x.length)  // error
  }

  interface Lengthwise {
    length: number;
  }

  function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)  // error
  }

  // fn2(123)
  fn2('abc')

})()