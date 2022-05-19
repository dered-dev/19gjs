
let firstNumberUser = parseInt(prompt('Dame el primer numero', 1))
let secondNumberUser = parseInt(prompt('Dame el segundo numero', 1))

// firstNumberUser > secondNumberUser ?
//     console.log(`${firstNumberUser} es mayor que ${secondNumberUser}`)
//     :
//     console.log(`${secondNumberUser} es mayor que ${firstNumberUser}`)


// if(){
//     if(){
         
//     } else {
        
//     }
// } else {

// }

firstNumberUser !== secondNumberUser ? (
        firstNumberUser > secondNumberUser ?
            console.log(`${firstNumberUser} es mayor que ${secondNumberUser}`)
            :
            console.log(`${secondNumberUser} es mayor que ${firstNumberUser}`)
    ) 
    :
    console.log('Son iguales')
