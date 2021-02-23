# Data Structures 
## SWBAT

- Use different Data Structure in JS
    - Array
    - Objects 

- Access and iterate through different Data Structure
    - Arrays
        - Index in array
        - Access single element in array and objects
        - Iterate through Array
        - .map()
        - .forEach()
        - .filter()
        - .find()
        - .findIndex()
        - .reduce()
        - .some()
        - for…of
    - Objects
        - dot notation 
        - bracket notation
        - Object.keys()
        - Object.values()
        - Object.entries()
        - Iterate through Object
        - for…in

- Understand how to use loops
    - for statement
    - do…while statement
    - while statement
    - break statement
    - continue statement
        
- Use conditional statements
    - [x] if statements
    - [x] if…else statement
    - [x] else if statement
    - Ternary operator
    - switch…case statement

## Data Structure in JS
While there are many Data Structures that can be implemented with JavaScript, the focus in this phase will be on Arrays and Objects. 

 **For other Data Structures please check out the links:**

- [Linked Lists](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)
- [Stacks and Queues](https://www.digitalocean.com/community/tutorials/js-stacks-queues)
- [Trees](https://medium.com/@iampika/javascript-trees-b8f3b4261c3a)
- [Binary Search Tree](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)
- [Graphs](https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/)

## Arrays
Arrays are a list of ordered elements between a pair of square brackets []. Each element has a value and an index denoting where it is in the list. It's important to note that arrays start at 0.

To access values from an array you can use their index
```
let arr = ['a', 'b', 'c']

// first element has an index of 0 and value of 'a' 
// arr[0] -> 'a'
// second element has an index of 1 and a value of 'b'
// arr[1] -> 'b'
// third  element has an index of 3 andd a value 'c'
// arr[2] -> 'c'

```

## Objects 
Objects are a collection of properties represented by key value pairs nested between curly braces {}. The key is on the left hand side and the value is on the right.

To access the value you can use dot or bracket notation. There are also Object methods that can return you arrays of an objects property keys and/or values

- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

- [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

- [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)


```
let obj = {
    key: 'value'
}

//dot notation
obj.key -> 'value

//bracket notation 
obj["key"] -> value

```


## Ternary operator
A ternary operator is a simple conditional, like a if... else. But its on one one line and uses ? and : instead of an if or else block.
The condition is to the left of the ? 
The true case is between the ? and : 
The else case is to the right of the :

```
// if... else
if(cat.name == 'rose'){
    return 'my cat!'
} else {
    return 'not my cat but still cute!'
}

// Ternary 
cat.name == 'rose'? 'my cat!' : 'not my cat but still cute'

```

## Switch 
A switch will run a block on code depending on a number of given conditions. 
Its a bit cleaner than a long list of if... if else... else.

```
// depending on the value of item, the switch will a different console.log
// If the items value doesn't match any of the cases, the switch run the default block and console.log 'snack'

switch(item) {
    case 'cake'
        console.log('dessert')
    case 'pasta'
        console.log('dinner')
    case 'overnight oats'
        console.log('breakfast')
    default
        console.log('snack')
}


```

## Array iterators 
There are a number of iterators for arrays. for loops are probably familiar at this point so lets take a look at for... of
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
a for... of is given an array and a variable that will hold the value of the element that's being iterated over

```
let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel']

for(let item of cakeNames){
    console.log(item)
}
// The above will print: 
// 'Chocolate Porter'
// 'Earl Grey'
// 'Salted Carmel'

```
## Array methods 
There are many useful built in array methods that are higher order functions.
Remember, a higher order function is a function that takes and/or returns a callback

A callback is a function being passed to a higher order function or is being returned by a higher order function 

All of the methods that will be cover are built in array method, which means they are function can be call on an array by using dot notation. They are also all higher order functions that will a callback as a parameter/argument

- **forEach()**
    - forEach() is called on the array cakeNames below.
    - It's passed an an anonymous arrow function with item as a parameter
    - item => console.log(item)
    - for each element in the cakeNames array, it will print its value
    - A forEach returns undefined and does not mutate or change the array its being called on

```
let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel']

cakeNames.forEach( item => console.log(item))
// The above will print: 
// 'Chocolate Porter'
// 'Earl Grey'
// 'Salted Carmel'

```

- **map()**
    - map() is called on the array cakeNames below.
    - It's passed an an anonymous arrow function with item as a parameter
    - item => item.toUpperCase()
    - remember single line arrow functions have an implicit return
    - toUpperCase() is a method that can be called on strings to change it to all uppercase characters
    - map returns a new array
    - for every item in the cakeNames array map will populate that index with the result off the callback it was passed

```
let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel']

cakeNames.map( item => item.toUpperCase())
// The above will return: 
['CHOCOLATE PORTER', 'EARL GREY', 'SALTED CARMEL']

```

- **find()**
    - find() is called on the array cakeNames bellow.
    - It's passed an an anonymous arrow function with item as a parameter, this callback must have a condition that will return true or false
    - item => item == 'Salted Carmel'
    - It will return the first element that that satisfies the condition 
    - If no element does, it will return undefined

```

let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel']

cakeNames.find(item => item == 'Salted Carmel')

// Will return: 
// 'Salted Carmel'


```

- **filter**
 - filter is like fine but will return a new array of elements that pass the condition 
 - filter() is called on the array cakeNames below.
 - item => item.startsWith('C')
 - .startsWith is called on a string and will return true or false if that string starts with whatever character is passed in

```
let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Coconut']

cakeNames.filter(item => item.startsWith('C'))

// Will return:
// ["Chocolate Porter", "Coconut"]

```

**reduce()**
 - reduce() is called on the array of numbers below.
 - It is passed a special callback that is a reducer function 
 - The reduce has an accumulator and a current value 
 - For every item in the array the accumulator is passed along
 - The current value, is the value of the element we are iterating on
 - so we can make adjustments to the accumulator using operations like add, subtract, multiply, concat etc. 
 - (accumulator, currentValue) => accumulator + currentValue)
 - reduce returns the output of the accumulator
 - reduce can take a second argument, which will be the starting value of the accumulator
```
let arr = [5,10,20]

const reducer = (accumulator, currentValue) => accumulator + currentValue

arr.reduce(reducer,0)
// Will return 35


```