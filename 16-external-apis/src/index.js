//gengar
document.querySelector('form').addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    getPokemon(e.target.search.value)
}

function getPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(pokemon => buildCard(pokemon))
}

function handleAddToTeam(pokeObj){
    fetch('http://localhost:3000/team',{
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(pokeObj)
    })
}


function buildCard(pokemon){
    let pokeObj = {
        name: pokemon.name,
        sprites: {
            front_default:pokemon.sprites.front_default
        }
    }
    let h3 = document.querySelector('#name')
    let img = document.querySelector('img')
    let card = document.querySelector('.card')
    let btn = document.createElement('button')

    h3.textContent = pokemon.name
    img.src = pokemon.sprites.front_default
    btn.textContent = 'Add Pokemon'
    btn.addEventListener('click', () => handleAddToTeam(pokeObj))

    card.appendChild(btn)

}