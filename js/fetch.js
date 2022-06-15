

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
fetch('https:/ssskoders19gjs-default-rtdb.firebaseio.com/koders/.json')
.then( response => {
    if (!response.ok) {
        throw new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
    } else {
        return response.json()
    }
})
.then( (response) => {
    let template = ''
    for(koder in response) {
        let {name} = response[koder]
        template += `
            <li>${name}</li>
        `
    }
    document.querySelector('#lista__koders').innerHTML = template
}).catch( err => {
    console.log(err)
})


