/* 
接口与类
*/
/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口
*/
interface Light {
  lightOn (): any
  lightOff (): any
}

interface Alarm {
  alert (): void
}

class Car implements Light, Alarm{
  lightOn (): any {
    console.log('Car lightOn()')
  }

  lightOff (): any {
    console.log('Car lightOff()')
  }

  alert (): void {
    console.log('Car alert()')
  }
}

const car = new Car()
car.lightOn()
car.lightOff()
car.alert()

interface LightableAlarm extends Alarm, Light {
  
}

class Car2 implements LightableAlarm{
  lightOn (): any {
    console.log('Car lightOn()')
  }

  lightOff (): any {
    console.log('Car lightOff()')
  }

  alert (): void {
    console.log('Car alert()')
  }
}