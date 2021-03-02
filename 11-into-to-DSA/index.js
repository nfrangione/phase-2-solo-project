//Given an Array, find the first duplicate value that occurs. If there are no duplicates, return -1.

// Input: [2, 1, 3, 3, 2]
// Output: 3

// Input: [1, 2, 3, 4]
// Output: -1
// "1" != 1

//Check every value in array
//Set a default var to -1
//Hold values that I've checked in an obj
//if value is in obj
    // set default var to val
    // break loop
//else 
    //add value to obj

//Pseudocode
// map {}
// result -1
// for ..of
// if map[item] is true
// result = item
// else
// map[item] = item
// return result

// Input: [1, 2, 3, 4]


//MAP{1:1,2:2,3:3,4:4}
// Result: -1

function findFirstDupe(arr){
    let map = {}
    let result = -1
    for(let item of arr){

        if(map[item] === item){
            result = item
            break
        }
        map[item] = item
    }
    return result
}
console.log('findFirstDupe',findFirstDupe([1, 2, 3, 4]))
console.log('findFirstDupe',findFirstDupe([1,1, 2,2, 3, 4]))
console.log('findFirstDupe',findFirstDupe(["1", 1, 3, 4]))