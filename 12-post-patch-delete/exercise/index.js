document.querySelector('#new-color-form').addEventListener('submit',handleSubmit)
function handleSubmit(e){
    e.preventDefault()
    console.log('hi')
    fetch('http://localhost:3000/colors',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({color: e.target.color.value})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let container = document.querySelector('#colors')
        let li = document.createElement('li')
        li.innerText = data.color
        container.appendChild(li)
    })
}
