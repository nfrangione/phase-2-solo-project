//Lets make an app to track orders at our bakery Flatiron Cakes!
// Array
const cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']
//Plain Old JavaScript Object
let cakeOrder1 = {
    id: 1,
    flavor: 'Earl Grey',
    size: 'cup cake',
    amount: 12,
    price: 18.00
}

// Nested data
const dayOrders = [
    {
        id: 13,
        flavor: 'Vanilla',
        size: '6" cake',
        amount: 1,
        price: 4.00
    },
    {
        id: 14,
        flavor: 'Raspberry Cardamon Rose',
        size: '9" cake',
        amount: 1,
        price: 50.00
    },
    {
        id: 15,
        flavor: 'Pink Champagne',
        size: 'cup cake',
        amount: 25,
        price: 37.5
    },
    {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00
    }
]

// Access array values through index
// console.log(cakeNames[2])
// console.log(cakeNames[cakeNames.length-1])

// reassign index value
cakeNames[2] = 'Carmel'

// push item to end of array
cakeNames.push('Raspberry and Lime')

// pop item from end of array
cakeNames.pop()

// unshift item to the front of the array
cakeNames.unshift('Raspberry and Lime')

// shift item from front of array

cakeNames.shift()
// console.log(cakeNames)


//Access object property through []
cakeOrder1['flavor']

// Access object property through 
cakeOrder1.flavor

// reassign key value
cakeOrder1.flavor = 'Pink Champagne'

// Object.values 
Object.values(cakeOrder1)

// Object.keys
Object.keys(cakeOrder1)

// Object.entries
// console.log(Object.entries(cakeOrder1))

//loops
function printCakes(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(i)
        console.log(arr[i])
    }
}
// printCakes(cakeNames)

function findFlavor(arr, flavor){
    let i = 0
    let found = false
    while(i !== arr.length){
        if(arr[i] == flavor){
            found = arr[i]
            break
        }
        i++
    }
    return found
}

//for...of
function downCaseCakes(){
    for(let item of cakeNames){
        console.log(item.toLowerCase())
    }
}


//for...in
function printObjPorps(){
    for(let key in cakeOrder1){
        console.log(key)
        console.log(cakeOrder1[key])
    }
}


//Higher order functions 
// .forEach()

// dayOrders.forEach(cake => console.log(cake))

// dayOrders.forEach((cake) =>{
//  console.log(cake)
// })

// dayOrders.forEach(function(cake){
//     console.log(cake)
// })


// .map()
let orderMap = dayOrders.map(() => 'cake')

// let orderMap = dayOrders.map(function(){
//     return 'cake'
// })

let prices = dayOrders.map(cake => cake.price)

// let flavors = dayOrders.map(cake => cake.flavor)

let flavors = dayOrders.map(function(cake){
    // console.log(cake)
    // console.log(cake.flavor)
    return cake.flavor
})

// console.log(flavors)
// [{},{},{},{}]
// ['Vanilla', 'Raspberry Cardamon Rose', 'Pink Champagne', 'Earl Grey']

// .find
// let bigCake = dayOrders.find(cake => cake.price > 40 )

let bigCake = dayOrders.find((cake) => {
    // console.log(cake)
    // console.log(cake.price < 20)
    return cake.price < 20
})
// console.log(bigCake)

//.filter 
// let smallCakes = dayOrders.filter(cake => cake.price < 20)
let smallCakes = dayOrders.filter((cake) => {
//    console.log(cake)
//    console.log(cake.price < 20)
   return cake.price < 20
})

// console.log(smallCakes)

// const reducer = (a, b) =>{
//     console.log('a: ', a)
//     console.log(b)
//    return  a + `, ${b.flavor}`
// }
const reducer = (a, b) =>{
    console.log('a: ', a)
    console.log(b)
    let result  
    b.price < 20? result = a + b.price : result = a
    return result
}

const total = dayOrders.reduce(reducer,0)
console.log(total)
