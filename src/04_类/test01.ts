(() => {
  /* 
  类的基本定义与使用
  */

  class Greeter {
    // 声明属性
    message: string

    // 构造方法
    constructor (message: string) {
      this.message = message
    }

    // 一般方法
    greet (): string {
      return 'Hello ' + this.message
    }
  }

  const c: Greeter = new Greeter('world')
  console.log(c.greet())
})()


;(() => {
  /* 
  类的继承
  */

  class Animal {
    run (distance: number) {
      console.log(`Animal run ${distance}m`)
    }
  }

  class Dog extends Animal {
    cry () {
      console.log('wang! wang!')
    }
  }

  const d: Dog = new Dog()
  d.run(2)
  d.cry()
})()


;(() => {
  class Animal {
    name: string
    
    constructor (name: string) {
      this.name = name
    }
  
    run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  
  }
  
  class Snake extends Animal {
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }

    run (distance: number=2) {
      console.log('Snake sliding...')
      console.log(`${this.name} run ${distance}m`)
    }
  }

  class Horse extends Animal {
    constructor (name: string) {
      // 调用父类型构造方法
      super(name)
    }

    run (distance: number=4) {
      console.log('Horse dashing...')
      console.log(`${this.name} run ${distance}m`)
    }
  }

  const o1: Snake = new Snake('s1')
  o1.run()
  const o2: Horse = new Horse('h1')
  o2.run()

  // 父类型引用指向子类对象  ===> 通过父引用调用的是子类型实例的方法  ==> 多态
  const o3: Animal = new Horse('aaa')
  o3.run()

  function run(o: Animal) {
    o.run()
  }
  run( new Snake('s2') )
  run( new Horse('h2') )
})()