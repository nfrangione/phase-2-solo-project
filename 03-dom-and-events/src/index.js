//DOM Selectors 
// <body>
// id
// classes 
let commentsH3 = document.querySelector('h3')
let form = document.querySelector('#comment-form')
//document.querySelector('#comments')
document.querySelector('.btn')
document.querySelectorAll('div')
document.getElementsByTagName('button')
document.getElementById('helicopter-parent')
let allBtns = document.getElementsByClassName('btn')

//DOM Manipulation 
commentsH3.textContent = 'Events and the DOM'
commentsH3.classList = 'green'
commentsH3.id = 'big'

function addH3(){
    let p = document.createElement('p')
    p.textContent = 'YOOOOOOOOOOO!'
    commentsH3.appendChild(p)
}
// addH3()

function nyanCat(){
    let commentsContainer = document.querySelector('#comments')
    commentsContainer.innerHTML = `<iframe src="https://giphy.com/embed/sIIhZliB2McAo" width="480" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nyan-cat-sIIhZliB2McAo">via GIPHY</a></p>`
}
// nyanCat()


//Event listeners 

// commentsH3.addEventListener('click',function(e){
//     console.log(e)
//     console.log('hi')
// })
// commentsH3.addEventListener('click', () => console.log('hi'))
commentsH3.addEventListener('mouseover', removeClass)  
commentsH3.addEventListener('mouseout', (e) => {
    e.target.classList.add('green')
})
allBtns[1].addEventListener('click', () => {
    alert('Hello! I am an alert box!!')
})
allBtns[2].addEventListener('click', () => console.log('something'))
allBtns[3].addEventListener('click', () => console.error("don't click"))

form.addEventListener('submit', handleSubmit)


//Event Handlers 

function removeClass(e){
    e.target.classList.remove('green')
}

function handleSubmit(e){
    e.preventDefault();
    console.log(e.target['new-comment'].value)
    let div = document.createElement('div')
    div.textContent = e.target.comment.value
    let commentsContainer = document.querySelector('#comments-container')
    commentsContainer.appendChild(div)
}





