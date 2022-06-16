
// fetch()
// promesa 
// 1. pendiente
// 2. Resuelta / Rechazada


// peticiones GET DELETE
// fetch('https://koders19gjs-default-rtdb.firebaseio.com/koders/.json', {
//     method: 'GET'
// })
// .then( response => {
//     // comprobamos que el estatus de la respuesta es falso
//     if (!response.ok) {
//         // si si, lanzamos un error con un mensaje
//         let err = new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
//         throw err
//     } else {
//         // sino, retornamos la respuesta al siguiente then
//         return response.json()
//     }
// })
// .then( (response) => {
//     console.log(response)
//     let template = ''
//     for(koder in response) {
//         let {name} = response[koder]
//         template += `
//             <li>${name}</li>
//         `
//     }
//     document.querySelector('#lista__koders').innerHTML = template
// }).catch( err => {
//     console.log(err)
// })


// POST, PUT, PATCH
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify(_datos),
//   headers: {"Content-type": "application/json; charset=UTF-8"}
// })


// GET
// option -> objeto con varias propiedades


// Texto plano
// notacion JSON
// let objKoder = {
//     name: 'jorge',
//     bootcamp: 'js'
    
// }


// fetch('url', options)

// fetch('https://koders19gjs-default-rtdb.firebaseio.com/koders/.json')
// fetch( 'url', {
//     method: 'GET'
// }) 

// // POST
// let newKoder = {
//     age: "32",
//     biography: "Lorem ipsum",
//     bootcamp: "Js",
//     name: "Jorge Luis"
// }

// fetch( 'https://practica19gjs-default-rtdb.firebaseio.com/koders/.json', {
//     method: 'POST',
//     body: JSON.stringify(newKoder),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(( response)=> {
//     return response.json()
// })
// .then( (finalResponse) => {
//     console.log(finalResponse)
// })
// .catch( (err) => {
//     console.log(error)
// })


// PATCH

let koderUpdated = {
    age: "25",
    biography: "Lorem ipsum",
    bootcamp: "JavaScript",
    name: "Israel"
}
// let idKoder = "-N4e86ZCEN0r72jwM-k_"

// fetch(`https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`, {
//     method: 'PATCH',
//     body: JSON.stringify(koderUpdated),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(( response)=> {
//     return response.json()
// })
// .then( (finalResponse) => {
//     console.log(finalResponse)
// })
// .catch( (err) => {
//     console.log(error)
// })

// {name:'-hash'}
/**
 * 
 *  {
        age: "27",
        biography: "Lorem ipsum",
        bootcamp: "JavaScript",
        name: "Lenny updated"
    }
 */

let idKoder = "-N4e434aFia41K6ZYzts"
fetch(`https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`, {
    method: 'DELETE'
})
.then( response => {
    // comprobamos que el estatus de la respuesta es falso
    if (!response.ok) {
        // si si, lanzamos un error con un mensaje
        let err = new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
        throw err
    } else {
        // sino, retornamos la respuesta al siguiente then
        return response.json()
    }
})
.then( (response) => {
    console.log(response)
 
}).catch( err => {
    console.log(err)
})
    

