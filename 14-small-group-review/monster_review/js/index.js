const monstrURL = 'http://localhost:3000/monsters/?_limit=50&_page=1';

document.addEventListener('DOMContentLoaded', () => {
    loadMonsters(monstrURL);
});

function loadMonsters(url) {
    fetch(url).then(r => r.json()).then(monsters => {
        monsters.forEach(monster => {
            const newMonster = applyMonster(monster, buildMonster())
            document.getElementById('monster-container').append(newMonster);
        });
    });
};

function applyMonster(monster, container) {
    container.id = monster.id;
    container.querySelector('h2').textContent = monster.name;
    container.querySelector('h4').textContent = monster.age;
    container.querySelector('p').textContent = monster.description;
    return container;
};

function buildMonster() {
    const div = document.createElement('div');
    const name = document.createElement('h2');
    const age = document.createElement('h4');
    const description = document.createElement('p');
    div.append(name, age, description);
    return div;
};