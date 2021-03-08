// let garfield = {
//     name: 'Garfield',
//     breed: 'Persian Tabby',
//     introduction: function(){
//         return `Meow, my name is Garfield and I'm a Persian Tabby`
//     }
// }

// let helloKitty = {
//     name:'Hello kitty',
//     breed: 'Cartoon',
//     introduce: function(){
//         return `Meow, my name is Hello Kitty and I'm a Cartoon`
//     }
// }

// let keyboardCat = {
//     name: 'Keyboard Cat',
//     bread: 'Meowsician',
//     introduction: function(){
//         return `Meow, my name is Keyboard Cat and I'm a Meowsician`
//     }
// }

class Cat{
    constructor(name,breed, weight){
        this.name = name
        this.breed = breed
        this.weight = weight
    }
    introduce(){
        return `Meow, my name is ${this.name} and I am a ${this.breed}`
    }

    eat(foodName){
        this.weight += 1
        return `Yum, thanks for the ${foodName}. I now weight ${this.weight}`
    }
    static catsAreCool(){
        return 'cats are cool'
    }

}

console.log(Cat.catsAreCool())

let helloKitty = new Cat('Hello Kitty', 'Cartoon', 95)
let garfield = new Cat('Garfield', 'Persian Tabby', 30)
let keyboardCat = new Cat('Keyboard Cat', 'Meowsician', 10)
let rose = new Cat('Rose', 'Domestic long hair', 14)

console.log(rose.eat('fish'))
console.log(rose.introduce())

class Toy{
    constructor(name, img, likes){
        this.name = name
        this.img = img
        this.likes = likes
        this.reviews = []
    }

    addLikes(num){
        this.likes += num
    }

    addReview(review){
        this.reviews.push(review)
    }

 
}

let plagueDoctor = new Toy('Plague Doctor', 'https://www.squishable.com/mm5/graphics/00000001/squish_plague_doctor_15.jpg', 0)

// plagueDoctor.addReview('is very cute!')
