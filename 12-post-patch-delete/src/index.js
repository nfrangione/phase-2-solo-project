//Initial Render
getAllAnimals()

//Fetch Data
function getAllAnimals(){
  fetch('http://localhost:3000/animals')
  .then(response => response.json())
  .then(animals => animals.forEach(animal => renderOneAnimal(animal)))
  .catch(error => console.log(error))
}



//Dom Manipulation 
function renderOneAnimal(animal){
  const card = document.createElement('li')
  card.className = 'card'
  card.id = animal.id
  card.innerHTML = `
    <img src="${animal.imageUrl}">
    <div class="content" id=${animal.id}>
      <h4>${animal.name}</h4>
      <p>
        $ <span class="donation-count">${animal.donations}</span> Donated
      </p>
      <button id='donation_btn'>Donate $10</button>
      <button id='delete_btn'>Delete</button>
    </div>
  `

  document.querySelector('#animal-list').append(card)
}

//Handlers 
