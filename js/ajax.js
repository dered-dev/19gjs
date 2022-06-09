

// Ajax
// Asyncronic JavaScaript And XML
// XMLHttpRequest


/**
    Holds the status of the XMLHttpRequest.
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
 */


// formar request
// enviar request
// esperar respuesta
// recibir response
// procesar el response

const printUsers = (arrObjs) => {
    let template = arrObjs.reduce((acc, user,) => {
        return acc += `
            <li>
                ${user.id}: ${user.title} 
                <p>${user.body}</p>
            </li>
        `
    }, '')
    document.querySelector('#lista__users').innerHTML = template
}

// Create an XMLHttpRequest object
const primerPeticion = new XMLHttpRequest()

let users = []

// Define a callback function
primerPeticion.onload = (response) => {
    // Here you can use the Data
    console.log('REspuesta lista')
    console.log(response.target)

    if(response.target.status >= 200 && response.target.status <= 299) {
        // la respuesta fue satisfactoria
        console.log( response.target.responseText )
        // JSON
        // metodos 
        // .parse( text - Object ) 
        // .stringify( obj - text)

        let responseJSON = JSON.parse(response.target.responseText)
        users = responseJSON
        printUsers(users)
    }
}

// Send a request
// GET, POST, DELETE, PATCH, PUT
primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/posts", false)
// console.log(primerPeticion)
primerPeticion.send()
// console.log(primerPeticion)











