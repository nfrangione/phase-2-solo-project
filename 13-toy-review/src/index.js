document.addEventListener("DOMContentLoaded", () => {
  getAllToys()

  let addToy = false
  const addBtn = document.querySelector("#new-toy-btn")
  const toyFormContainer = document.querySelector(".container")
  const form = document.querySelector('.add-toy-form')

  form.addEventListener('submit', handleSubmit)

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  })

})

//Fetch data
function getAllToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(data => data.forEach(toy => makeToy(toy)))
}

function createToy(toy){
  fetch('http://localhost:3000/toys',{
    method:'POST',
    headers: 
      {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify(toy)
  })
  .then(res => res.json())
  .then(toy => makeToy(toy))
}

function updateLikes(likes, id){
  fetch(`http://localhost:3000/toys/${id}`,{
    method:'PATCH',
    headers: 
      {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify(likes)
  })
  .then(res => res.json())
  .then(toy => console.log(toy))
}


//DOM manipulation 

function makeToy(toy){
  let container = document.querySelector('#toy-collection')
  let card = document.createElement('div')
  card.classList = 'card'
  card.id = toy.id
  card.innerHTML = `
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button class="like-btn">Like <3</button>
  `
  card.querySelector('button').addEventListener('click', handleAddLikes)
  container.appendChild(card)
}

//handlers 

function handleSubmit(e){
  e.preventDefault()
  console.log(e.target.name.value)
  console.log(e.target.image.value)

  let toy = {
    name: e.target.name.value,
    image: e.target.image.value,
    likes: 0
  }
  
  createToy(toy)
}

function handleAddLikes(e){
  let likes = parseInt(e.target.previousElementSibling.innerText.split(' '))+1
  let toyId = e.target.parentElement.id
  let likesObj = {
    likes: likes
  }
  let card = document.getElementById(toyId)
  card.querySelector('p').innerText = `${likes} Likes `

  updateLikes(likesObj,toyId)
}