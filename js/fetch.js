

// fetch('http://example.com/movies.json')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch( error => {
//     console.log(error)
// })

// fetch()
// promesa 
// 1. pendiente
// 2. Resuelta / Rechazada

// const fetch = () => {
//     return new Promise((resolve, reject)=> {
//         resolve('todo ok')
//         reject('todo mal')
//     })
// }


// peticiones GET
fetch('https://koders19gjs-default-rtdb.firebaseio.com/koders/.json')
.then( response => {
    return response.json()
})
.then( (response) => {
    console.log(response)
    // listar koders
    let template = ''
    for(koder in response) {
        let {name} = response[koder]
        template += `
            <li>${name}</li>
        `
    }

    document.querySelector('#lista__koders').innerHTML = template


}).catch( err => {
    console.log(err.error)

})


