// Ejercicio 1
// investigar while, y do while


// Utilizar Condicionales, Ciclo for, Metodos de string

/**
 * Ejercicio 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */

// const numberUser = parseInt( prompt('Dame un numero entre 1 y 10') )
// if( numberUser >= 1 && numberUser <= 10 ){

//     for(let i = 1; i <= 10; i++){
//         console.log(`${ numberUser } x ${i} = ${ numberUser * i } `)
//     } 
// } else {
// 	// console.log('Número inválido')
//     console.warn('Número inválido')
//     // console.error('Número inválido')
// }


/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */

// const phrase = prompt('Escribe una frase').toLowerCase()
// let vowels = ''
// let consonants = ''
// for(let i = 0; i < phrase.length; i++ ){
    
// 	if(phrase[i] !== ' ' && phrase[i] !== ',' && phrase[i] !== '.'){
// 		if(
// 			phrase[i] == 'a' || 
// 			phrase[i] == 'e' || 
// 			phrase[i] == 'i' || 
// 			phrase[i] == 'o' || 
// 			phrase[i] == 'u' || 
// 			phrase[i] == 'á' || 
// 			phrase[i] == 'é' || 
// 			phrase[i] == 'í' || 
// 			phrase[i] == 'ó' || 
// 			phrase[i] == 'ú'
// 		){
// 			vowels += phrase[i]
// 		} else {
//             console.log(phrase[i])
// 			consonants += phrase[i]
// 		}
// 	}
// }
// console.log(vowels)
// console.log(consonants)

/**
 * 
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 * 
 */

// const evenRange = parseInt( prompt('Escribe un numero') )
// for(i = 1; i <= evenRange; i++){
// 	if(i % 2 === 0){
// 		console.log(i)
// 	}
// }


/**
 * 
 * Ejercicio 5. Opcional
 * Pedir el usuario una palabra
 * Invertir esa palabra e imprimirla en consola
 * p.ej. 'Hola' -> 'aloh'
 *
 */


 const nameUser = window.prompt('Escribe una palabra')
 let stringReversed = ''
//  console.log(stringReversed.length)

//  'Hola' str -> aloh
//  '0123' indices
//  '3210' indices
//  '1234' length
let finCadena = nameUser.length - 1

for( let i = finCadena; i >= 0; i-- ){
	stringReversed += nameUser[i]
}
console.log(stringReversed)


console.log(nameUser.split('').reverse().join(''))
