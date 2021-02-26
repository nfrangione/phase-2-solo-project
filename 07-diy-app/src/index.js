//data
let cards = [{
    colors: "Green",
    imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130483&type=card",
    manaCost: "2 G G",
    name: "Abundance",
    originalText: "If you would draw a card, you may instead choose land or nonland and reveal cards from the top of your library until you reveal a card of the chosen kind. Put that card into your hand and put all other cards revealed this way on the bottom of your library in any order.",
    originalType: "Enchantment",
    power: null,
    toughness: null
},
{
    colors: "Blue",
    imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132072&type=card",
    manaCost: "1 U U",
    name: "Academy Researchers",
    originalText: "When Academy Researchers comes into play, you may put an Aura card from your hand into play attached to Academy Researchers.",
    originalType: "Creature - Human Wizard",
    power: "2",
    toughness: "2"
},
{
    colors: "Black",
    imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129491&type=card",
    manaCost: "3 B ",
    name: "Bog Wraith",
    originalText: "Swampwalk",
    originalType: "Creature - Wraith",
    power: "3",
    toughness: "3"
},
{
    colors: "White",
    imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129524&type=card",
    manaCost: "W",
    name: "Demystify",
    originalText: "Destroy target enchantment.",
    originalType: "Instant",
    power: null,
    toughness: null
},
{
    colors: "Blue",
    imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=134758&type=card",
    manaCost: "2 U",
    name: "Crafty Pathmage",
    originalText: "{T}: Target creature with power 2 or less is unblockable this turn.",
    originalType: "Creature - Human Wizard",
    power: "1",
    toughness: "1"
},
{
    colors: "Green",
    imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130522&type=card",
    manaCost: "2 G",
    name: "Civic Wayfinder",
    originalText: "When Civic Wayfinder comes into play, you may search your library for a basic land card, reveal it, and put it into your hand. If you do, shuffle your library.",
    originalType: "Creature - Elf Warrior Druid",
    power: "2",
    toughness: "2"
},
{
    colors: "White",
    imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=136279&type=card",
    manaCost: "2 W",
    name: "Benalish Knight",
    originalText: "Flash↵First strike",
    originalType: "Creature - Human Knight",
    power: "2",
    toughness: "2"
},
{
    colors: "White",
    imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129470&type=card",
    manaCost: "3 W",
    name: "Aven Cloudchaser",
    originalText: "Flying↵When Aven Cloudchaser comes into play, destroy target enchantment.",
    originalType: "Creature - Bird Soldier",
    power: "2",
    toughness: "2"   
}
]

// DOM
buildCards()
function buildCards(){
    cards.forEach(card => buildCard(card))
}

function buildCard(card){
    let container = document.querySelector('#card-list')
    let divCard = document.createElement('div')
    let h3Name = document.createElement('h3')
    divCard.id = card.name
    h3Name.textContent = card.name
    h3Name.addEventListener('click', () => {
        showMoreInfo(card)
    })

    divCard.appendChild(h3Name)
    container.appendChild(divCard)
}


//handlers
function showMoreInfo(card){
    let divCard = document.getElementById(card.name)
    let btn = document.createElement('button')
    let image = document.createElement('img')
    let h4Type = document.createElement('h4')
    let pText = document.createElement('p')
    let powerToughness = document.createElement('p')

    btn.textContent = 'x'
    image.src = card.imageUrl
    h4Type.textContent = card.originalType
    pText.textContent = card.originalText
    powerToughness.textContent = `${card.power}/${card.toughness}`

    btn.addEventListener('click', () => {
        divCard.innerHTML = ''
        let h3Name = document.createElement('h3')
        h3Name.textContent = card.name
        h3Name.addEventListener('click', () => {
            showMoreInfo(card)
        })
        divCard.appendChild(h3Name)
    })
    divCard.append(btn, h4Type, image, pText, powerToughness)
}