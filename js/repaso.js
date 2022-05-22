
/**
 * Condicionales
 * -> Operadores de asignacion
 * -> Operadores de comparacion
 * 
 */

// 2 escenarios
// let age = 17
// if(age < 18){
//     console.log('Soy menor de edad')
//     console.log('Soy menor de edad')
// } else {
//     console.log('Soy mayor de edad')
// }  


// age < 18 ? (true) : (false)

// age < 18 ? (
//         console.log('Soy menor de edad'),
//         console.log('Soy menor de edad'),
//         alert('Soy menor de edad'),
//         console.log('otro cosa')
//     )
//     : (
//         console.log('Soy mayor de edad'),
//         console.log('Soy mayor de edad')
//     ) 
    
// age < 18 && console.log('lo que sea')

// let age = 31

// if(age < 20 ){
//     console.log('tienes menos de 20 años')
// } else if(age >= 20 && age <= 30) {
//     console.log('tienes entre 20 y 30 años')

// } else if(age > 30 && age <= 40) {
//     console.log('tienes entre 31 y 40 años')

// } else if(age > 30 && age <= 40) {
//     console.log('tienes entre 31 y 40 años 2')
// } else {
//     console.log('Mensaje por defecto')
// }

// if(age > 30 && age <= 40){
//     // sentencias
//     console.log('tienes entre 31 y 40 años test')
// }

// if(age > 30 && age <= 40){
//     // sentencias
//     console.log('tienes entre 31 y 40 años test2')
// }

// if(age > 30 && age <= 40){
//     // sentencias
//     console.log('tienes entre 31 y 40 años test2')
// }

// let a = 10
// let b = 20
// let c = 31

// if( 
//     (a % 2 === 0) && 
//     (b % 2 === 0) && 
//     (c % 2 === 0) 
// ){
//     console.log('Todo son pares')
// } else {
//     console.log('Existe un impar')
// }



// Operadores aritmeticos
// /
// *
// +
// -
// %

// Operadores logicos
// and -> &&
// or  -> ||


// operadores de asignacion

// Operadores de comparacion



// if(a % 2 === 0){
//     console.log('a es par')
// } 

// if(b % 2 === 0){
//     console.log('b es par')
// }

// if(c % 2 === 0){
//     console.log('c es par')
// }



// age < 18 ? 
//     console.log('Soy menor de edad') 
//     : 
//     console.log('Soy mayor de edad')

// condicionales
// estructura de control
// let age = 30
// switch(age){
//     case 20: 
//         console.log('20 años')
//         // sentencias
//         break
//     case 30:
//         break
//     default:
//         console.log('sentencias')
//         break
// }
// // condicion :
// //     Sentencias
// // break

// if(condicion) // case
// {   // :
//     // sentencias
// } // break
// else if(condicion) // case
// { //:
// // sentencias
// } // break
// else // default
//     { // :
//         // sentencias
// }// break
/**
 * Metodos de string
 */

// .length -> propiedad
// .toLowerCase()
// .toUpperCase()
// ...


// str.method(p1,p2,p...)
// str.replace(pattern, replacement).toLowerCase()

let cadena = 'hola'
let splited = cadena.split('')
// ['h','o','l','a']
let commas = splited.join(',')
// [].join() -> 'h,o,l,a,'
let uppercased = commas.toUpperCase()
// 'H,O,L,A,'
console.log(uppercased)

// concatenacion de metodos  
let resultado = 
    cadena
    .split('')
    .join(',')
    .toUpperCase()

console.log(resultado)

/**
 * Ciclos
 * 
 */

for(numeroTabla = 1; numeroTabla <= 10; numeroTabla++){
    // numeroTabla = 1 -> 10
    for(i = 1; i <= 10; i++) {
        // i = 1 -> 10
        console.log(` ${numeroTabla} x ${i} = ${numeroTabla} * ${i} `)
    }
}








// counter / inicio
// while(fin/expresion/condicion){
//     // sentencias

//     // aumento / decremento
// }

// counter / inicio
// do {
//     // sentencias
//     // aumento / decremento
// } while(fin/expresion/condicion)


function nombreDeLaFuncion() {
    console.log('Mi primera funcion')
}

// nombreDeLaFuncion()


