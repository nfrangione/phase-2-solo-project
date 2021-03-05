/*
    Our schema!
    "name": "PARTY CAT",
    "image": "assets/party_cat.jpeg",
    "catchphrase": "Party on Party Cat",
    "likes": 10

    Our routes!
    GET/POST: http://localhost:3000/cats

    PATCH/DELETE: http://localhost:3000/cats/:id

*/

document.addEventListener('DOMContentLoaded', () => {
    getCats();
    document.querySelector('#add_cat_btn').addEventListener('click', () => {
        const form = document.getElementById('cat_form')
        form.style.visibility = "visible"
    })
    document.querySelector('#btn_likes').addEventListener('click', e => {
        handleLikes(e.target.parentElement)
    })
})

function handleLikes(ourCat) {
    const url = `http://localhost:3000/cats/${ourCat.dataset.primaryId}`
    const oldLikes = ourCat.querySelector('#cat_likes').innerText
    fetch(url, {
        method: 'PATCH', headers: {
            'Content-Type': "application/json"
        }, body: JSON.stringify({
            likes: parseInt(oldLikes) + 1
        })
    }).then(r => r.json()).then(updatedLikes => {
        //console.log("did it work?", updatedLikes)
        //defaultCat(updatedLikes)  why draw everything?  just the likes!
        document.querySelector('#cat_likes').textContent = updatedLikes.likes
    })
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    //make some new cat?
    const newCat = {
        name: e.target["cat-name"].value,
        image: e.target.image.value,
        catchphrase: e.target.phrase.value,
        likes: 0
    }
    //what next!
    postNewCat(newCat)
})

function postNewCat(newCat) {

    //editing the DOM here is optimistic
    //add the new cat to the side
    //         AND
    //add the info in the main section

    makeCat(newCat) //this puts new <li>'s on the left
    defaultCat(newCat) //this puts all the info on the right

    fetch('http://localhost:3000/cats', {
        method: 'POST', headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(newCat)
    }).then(resp => resp.json())
    .then( brandNewCat => {
        //editing the DOM here, is pessimistic
        // makeCat(brandNewCat)
        // defaultCat(brandNewCat)
    }).catch(error => console.log("DANGER!", error))
}

function defaultCat(cat) {
    //id="selected_cat_info"
    const selectedCat = document.getElementById('selected_cat_info');
    selectedCat.dataset.primaryId = cat.id
    selectedCat.querySelector('h2').textContent = cat.name
    selectedCat.querySelector('div').querySelector('img').src = cat.image
    selectedCat.querySelector('#cat_phrase').textContent = cat.catchphrase
    selectedCat.querySelector('#cat_likes').textContent = cat.likes
};

function getCats() {
    fetch('http://localhost:3000/cats')
    .then(resp => resp.json())
    .then(cats => {
        //make this cat out of cats
        cats.forEach( cat => {
            //make this cat
            makeCat(cat) //all this does is make the list on the left
        })
        defaultCat(cats[0]); //this is make the one cat for the right
    })
};

function makeCat(cat) {
    //write out an li set to the name of the cat
    const li = document.createElement('li');
    li.id = cat.id

    li.addEventListener('click', () => defaultCat(cat) );

    li.textContent = cat.name;
    //  id="cat_ul"
    const ul = document.querySelector('#cat_ul');
    ul.appendChild(li);
};
