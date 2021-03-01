// console.log('A')

// setTimeout(() => {
//   console.log('D')
//   },500)

// setTimeout(() => {
// console.log('B')
// },1000)

// console.log('C')

// const promise1 = new Promise((resolve, reject)=> {
//   setTimeout(() => {
//     resolve('Success!')
//   },1000)
// })

// promise1
// .then(() => console.log('hi'))
// .catch(() => console.log('booo'))

function getAllAnimals(){
  fetch('http://localhost:3000/animals')
  .then(response => response.json())
  .then(animals => {
    animals.forEach(animal => renderOneAnimal(animal))
   
  })
  .catch(error => console.log(error))
}
// getAllAnimals()


// const getAllAnimalsWithAsync = async () => {
//   const response = await fetch('http://localhost:3000/animals')
//   const animals = await response.json()
//   animals.forEach(animal => renderOneAnimal(animal))

// }
const getAllAnimalsWithAsync = async () => {
  try {
    const response = await fetch('http://localhost:3000/animals')
    if(response.ok) {
      const data = await response.json()
      console.log(data)
      return data
    } else {
      throw new Error(`Error in fetch: ${response.statusCode}`)
    }

  } catch (error) {
    console.log(error)
  }
}
getAllAnimalsWithAsync()

console.log('E')



function renderOneAnimal(animal){
  const card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
    <img src="${animal.imageUrl}">
    <div class="content">
      <h4>${animal.name}</h4>
      <p>
        $<span class="donation-count">${animal.donations}</span> Donated
      </p>
    </div>
  `
  document.querySelector('#animal-list').append(card)
}