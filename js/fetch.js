
// fetch()
// promesa 
// 1. pendiente
// 2. Resuelta / Rechazada


// peticiones GET
fetch('https://koders19gjs-default-rtdb.firebaseio.com/koders/.json')
.then( response => {
    // comprobamos que el estatus de la respuesta es falso
    if (!response.ok) {
        // si si, lanzamos un error con un mensaje
        throw new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
    } else {
        // sino, retornamos la respuesta al siguiente then
        return response.json()
    }
})
.then( (response) => {
    console.log(response)
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


