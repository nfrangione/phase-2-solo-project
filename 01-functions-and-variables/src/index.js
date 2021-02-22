//Define a functions
function introduction(){
    console.log('Thanks for tuning in to the Flatiron podcast, where we talk about techniques for learning coding')
}

//introduction //reference
//introduction() //invocation or calling the function 

let guestAppearance = () => {
    let guest = prompt('Welcome to the Flatiron Podcast, what is your name?')
    return guest
}

//One line implicit return

let sayHi = () => 'Hello, happy to be here!'

let whereToListen = location => `To hear more episodes go to ${location}`

let thisWeeksSubject = (week, subject) => `It's week ${week} and this weeks topic will be... ${subject}!`


function welcomeGuest(cb){
    console.log(`Please help us welcome our guest! ${cb()}`)
}

function payGuest(base){
    return function(numOfAppearance){
        console.log(`guest pay:  ${numOfAppearance * base}`)
    }
}

//Scope
let host = 'Rose'

function recordShow(){
    let epName = 'ep2. JavaScript Scope'
    console.log(`${epName} with ${host}`)
}


if('cat' == 'cat'){
    var cookie = 'peanut butter'
    let cookie2 = 'snickerdoodle'
}


const producer = 'Paul'
host = 'Adam'
// producer = 'Rose'
// console.log(host)
// console.log(producer)
// console.log(cake)

//The Call Stack

// function twoThree(){
//     return `${testingOne()}, two, three`
// }

// function testingOne(){
    
//     return `Testing one`
// }

function preShowCheck(){
    console.log('begin pre-show check')
    micCheck()
    console.log('done with preShowCheck')
    return 
}

function micCheck(){
    debugger
    console.log('testing one two three')
    soundCheck()
    console.log('done wit mic check')
    return
}

function soundCheck(){
    debugger
    console.log('can you hear the beep?')
    recordingCheck()
    console.log('done with sound check')
    return
}

function recordingCheck(){
    debugger
    console.log('playing back recording... sounds like everything is fine')
    console.log('done with recording check')
    return
}

function runTheShow(week, subject){
    recordShow()
    welcomeGuest(guestAppearance)
    sayHi()
    thisWeeksSubject(week, subject)
    payGuest(100)(1)
}
runTheShow('one', 'the call stack')