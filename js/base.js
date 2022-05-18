
// crear variables
// let, const, var son Palabras reservadas

// Constantes
const koder3 = 'Ernesto' // no  la puedo modificar
const URL = 'https://www.google.com'
const PI = 3.1416

// variables
var koder = 'Jorge' // se pueden modificar
let koder2 = 'Noemi' // se pueden modificar


// scope
// let para variables
// const para constantes  


// operador typeof 
let valor1 = 5
let valor2 = 3
console.log(valor1 + valor2)
console.log(typeof valor1 )

// Concatenar variables
// 'string' + variable
let koderExample = 'Jorge'
let nombreConcatenado = 'Hola ' + koderExample
// console.log(nombreConcatenado)
// template literals
// placeholders
// `string  ${variable} `

const age = 30
console.log(`Hola ${koder}, tienes  ${age} años`)

// Pedir valores al usuario
// prompt(mensaje, valorDelMensajePorDefecto)
// let nombreKoder = prompt('Dame tu nombre', 'Jorge')

if( nombreKoder !== null ) {
    console.log(nombreKoder)
    // ...
} else {
    console.log('Nombre vacio')
}

// Convertir strings a numeros
let ageKoder = prompt('Dame tu edad', 30)
console.log(ageKoder)
let newAgeKoder = parseInt(ageKoder)
console.log(newAgeKoder)


// pedir al usuario los grados celsius en su localidad
// convertir ºC to ºF
// celsius * 9/5 + 32
// calcular los ºF

let celsius = prompt('Temperatura actual', 23)
if( celsius === null ) {
    console.log('Temperatura incorrecta')    
} else {
    let far = parseInt(celsius) * 9/5 + 32
    console.log(`La temperatura actual es de ${far} ºF`) 
}
