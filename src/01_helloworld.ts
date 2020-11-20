(() => {
  function greeter (person: string) {
    return 'Hello3333, ' + person
  }
  
  let user = 'Yee'
  // let user = [0, 1, 2]
  console.log(greeter(user))
})()

;(() => {
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user = {
    firstName: 'Yee',
    lastName: 'Huang',
  }
  
  console.log(greeter(user))
})()

;(() => {
  class User {
    fullName: string
    firstName: string
    lastName: string
  
    constructor (firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = firstName + ' ' + lastName
    }
  }
  
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
  }
  
  let user = new User('Yee', 'Huang')
  
  console.log(greeter(user))
})()