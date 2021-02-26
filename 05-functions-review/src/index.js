//Global
var cat = 'rose'
let dog = 'tod'
const fish = 'bill'
// console.log(cat, dog)
cat = 'adam'
dog = 'emiley'
// console.log(cat, dog, fish)

if(1 == 1){
   //block
   let pen = 'blue' 
} else {
    let pen = 'red'
}


// function speak(animal){
//    if(animal == 'cat'){
//        return 'meow'
//    } else if (animal == 'dog') {
//        return 'woof'
//    }
// }

let speak = animal => {
 if(animal == 'cat'){
       return 'meow'
   } else if (animal == 'dog') {
       return 'woof'
   }
}
// let eat = (food, time) => {
//     return `It's ${time}, we will eat ${food}`
// }
// let eat = (food, time) => {
//      () not needed but will still return
//     return (`It's ${time}, we will eat ${food}`)
// }

//let eat = (food, time) => (
// () allow you to do a multi line return
// but remember you can not do any logic between these ()
//    `It's ${time}, we will eat ${food}`
 //   )


const eat = (food, time) => `It's ${time()}, we will eat ${food()}`
const eat2 = (food, time) => `It's ${time}, we will eat ${food}`

//console.log(eat('pancakes', 'dinner'))

// food: cake
// time: breakfast

//A callback is a function passed as an argument to another function.

let bakeCake = () => 'cake'
let isMorning = () => 'breakfast'
let cake = 'cake'
let breakfast = 'breakfast'
//  console.log   ( 'cake'     'breakfast' )
console.log(eat2(bakeCake(), isMorning()))
console.log(eat(bakeCake, isMorning))

// food() => bakeCake()
// time() => isMorning()
//eat

let doMath = (num) => {
    return (num2) => num + num2 
}

console.log(doMath(2)(3))

let addTwo = (cb) => {
    return cb(2)
}

let sum = (num) => num + num

console.log(addTwo(sum))


let fakeAddEvent = (fakeEvent, cb){
    if(fakeEvent == 'click'){
        cb({eventType:click,target:'bleh'})
    }
}


// let arr = [1,2,3]

arr.map(num => num+1)