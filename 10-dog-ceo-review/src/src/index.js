// Fetch / Data 
function fetDogs(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(Array.isArray(data.message)){
            data.message.forEach(dogImg => buildImg(dogImg))
        } else{
            let select = document.querySelector('select')
            select.addEventListener('change', (e) => handleFilter(e,data))
            sortDogs(Object.entries(data.message))
        }
    })
}

fetDogs('https://dog.ceo/api/breeds/image/random/4')
fetDogs('https://dog.ceo/api/breeds/list/all')

// Dom
function buildImg(dog){
    let container = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = dog
    img.style.width = "200px"
    container.appendChild(img)
}   

function buildDogBreeds(breed){
    let container = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    let ul = document.createElement('ul')
    li.textContent = breed[0]
    breed[1].forEach(subBreed => {
        buildLi(subBreed, ul)
    })
    li.addEventListener('click', (e) => changeColor(e,li) )
    li.appendChild(ul)
    container.appendChild(li)
}

function buildLi(text, container){
    let li = document.createElement('li')
    li.textContent = text
    container.appendChild(li)
}

//handlers
function sortDogs(dogs){
    dogs.forEach(breed => buildDogBreeds(breed) )
}

function handleFilter(e, dogs){
    let container = document.querySelector('#dog-breeds')
    container.innerHTML = ''
    if(e.target.value == 'all'){
        sortDogs(Object.entries(dogs.message))
    }else {
        let filter = Object.entries(dogs.message).filter(breed => breed[0].startsWith(e.target.value))
        sortDogs(filter)
    }

}

function changeColor(e,li){
    console.log(e.target)
    li.style.color = 'red'
}