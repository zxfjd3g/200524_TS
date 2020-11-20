(() => {
  /* 
  public: 都可以
  protected: 子类
  private: 只能内部自己访问
  */
  class Animal {
    public name: string
  
    public constructor (name: string) {
      this.name = name
    }
  
    public run (distance: number=0) {
      console.log(`${this.name} run ${distance}m`)
    }
  }
  
  class Person extends Animal {
    protected sex: string = '男'
    private age: number = 18
  
    run (distance: number=5) {
    super.run()
     console.log(this.name, this.sex, this.age)
    }
  }
  
  class Student extends Person {
    run (distance: number=6) {
      console.log(this.name, this.sex)
      // console.log(this.age)  // error
    }
  }

  const s: Student = new Student('s1')
  console.log(s.name)
  // console.log(s.sex, s.age)

})()


;(() => {
  class Person {
    static count: Number = 0
    firstName: string = 'A'
    lastName: string = 'B'
    get fullName () {
      return this.firstName + '-' + this.lastName
    }
    set fullName (value) {
      const names = value.split('-')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  
  const p = new Person()
  console.log(p.fullName)
  
  p.firstName = 'C'
  p.lastName =  'D'
  console.log(p.fullName)
  
  p.fullName = 'E-F'
  console.log(p.firstName, p.lastName)
})()

;(() => {
  /* 
  抽象类
    不能创建实例对象, 只有实现类才能创建实例
    可以包含未实现的抽象方法
  */

  abstract class Animal {
    abstract cry ()

    test () {
      
    }
  }

  class Dog extends Animal {
    cry () {
      console.log(' Dog cry()')
    }
  }

  // const a = new Animal()  // error
  const d = new Dog()
  d.cry()
  d.test()

})()