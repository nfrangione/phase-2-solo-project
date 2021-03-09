// //Js Object Constructor 
// function Person(firstName, lastName, age, height){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.height = height
// }

// Person.prototype.birthday = function(){
//     this.age++
// }

// function Student(firstName, lastName, age, height, cohort){
//     Person.call(this,firstName, lastName, age, height)
//     this.cohort = cohort
// }

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student

let person1 = new Person('ix', 'Pro', '999', '5 6')
let student1 = new Student('Rose', 'Pro', '11', '1', '022221')
console.log(person1)
console.log(student1)
person1.birthday()
student1.birthday()
console.log(student1)
console.log(person1)

