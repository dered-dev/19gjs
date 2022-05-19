// condicionales
// Operadores de asignacion
let total = 0
let a = 4
let b = 5

total =  a + b

// total = total + 5
// total += 5

// total = total - 3
// total -= 3

// total = total * 2
// total *= 2

// total = total / 3
// total /= 3

// total = total % 3
// total %= 3


// console.log(total)

// if( 2 === "2" ) { // false
//     console.log('son iguales 2')
//     //..
    
// } else if ( 3 ===  "3" ) { //false
//     console.log('son iguales 3')
// } else {
//     //default
//     console.log('por defecto')
// }

// console.log('entro aqui')


// Operador ternario
// expresion ? true : false

let numero = 3
// if( numero % 2 === 0 ){
//     console.log(' es par')
// } else {
//     console.log('es impar')
// }

// numero % 2 === 0 ? console.log('Es par') : console.log('es impar')
// numero % 2 === 0 
//     ? 
//     console.log(' es par')
//     : 
//     console.log('es impar')

// let esPar = numero % 2 === 0 ? true : false
// console.log(`El numero ${numero} es ${esPar === true ? 'par' : 'impar' } `)

// switch
let age = parseInt( prompt('cual es tu edad', 17) )
let isAge = age >= 18 ? true : false

switch (isAge) {
    case true:
        console.log('Eres Mayor de edad')
        break
    case false: 
        console.log('eres Menor de edad')
        break
    default:
        console.log('No es una edad valida')
        break
}

