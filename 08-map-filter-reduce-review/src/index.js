//Data 
let drivingTests = [
    {name: 'Steven',
     instructor: 'Pearl',
     test: 'Parallel Parking',
     score: .80
    },
    {name: 'Connie',
    instructor: 'Pearl',
    test: 'Parallel Parking',
    score: .99
    },
    {
    name: 'Amethyst',
    instructor: 'Pearl',
    test: 'Parallel Parking',
    score: .15
    },
    {
    name: 'Amethyst',
    instructor: 'Garnet',
    test: 'Highway Merging',
    score: .55
    },
    {
    name: 'Steven',
    instructor: 'Garnet',
    test: 'Highway Merging',
    score: .75
    },
    {
    name: 'Connie',
    instructor: 'Garnet',
    test: 'Highway Merging',
    score: .80
    },
    {
    name: 'Amethyst',
    instructor: 'Garnet',
    test: 'Drifting',
    score: .95
    }
]


// drivingTests.forEach(test => console.log(test))

function allStudents(){
    let studentArr = drivingTests.map(test => test.name)
    //[Steven,Connie,Amethyst]
    let unqNameArr = []
    studentArr.forEach(student => {
        if(!unqNameArr.includes(student)){
            unqNameArr.push(student)
        }
    })
    return unqNameArr
}

let pearlTests = drivingTests.filter(test => test.instructor == 'Pearl')
console.log(pearlTests)

function averageScore(){
let reducer = (accumulator,currentValue) => {
    console.log("accumulator: ", accumulator)
    console.log("currentValue: ", currentValue)
    console.log("A+C: ", accumulator + currentValue.score)
    return accumulator + currentValue.score
} 
   let sum = drivingTests.reduce(reducer, 0)
   let ave = Math.floor(sum / drivingTests.length * 100)
   return ave
}
// console.log(averageScore())

let arr = [1,2,3,4,5]

let sum = arr.reduce((a, b) => {
    console.log("accumulator: ", a)
    console.log("currentValue: ", b)
    console.log("A+C: ", a + b)
    return a + b
}, 0)

console.log(sum)