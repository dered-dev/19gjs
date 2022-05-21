// Ciclos


/*

    for(inicio; fin ; aumento/decremento){
        // sentences
    }

    while(){}
        // sentences
    do{
        // sentences
    }while()
*/


for(let i = 1; i <= 10; i++){
    // sentencias
    // console.log('5 x '+ i)
    console.log(` 5 x ${i} = ${5*i} `)
} 


// 'hola koders'
// '01234567891'
// '12345678901'
// imprimir cada palabra del string
let str = 'Hola Koder'
let fin = str.length


// for(let i = 0; i < fin; i++){
//     console.log(str[i])
// } 

// "Hola Koder"
// Imprimir en consola cada una de las vocales
// ciclos y condicionales


for(let i = 0; i < fin; i++){
    let caracter = str[i]
    // console.log(caracter)
    if(
        caracter == 'a' || 
        caracter == 'e' || 
        caracter == 'i' || 
        caracter == 'o' || 
        caracter == 'u'
    ){
        console.log(caracter)
    }
} 

// "Hola Koder"
// Imprimir en consola cada una de las consonantes
// ciclos y condicionales

for(let i = 0; i < fin; i++){
    let caracter = str[i]
    // console.log(caracter)
    if(
        caracter !== 'a' && 
        caracter !== 'e' && 
        caracter !== 'i' && 
        caracter !== 'o' && 
        caracter !== 'u' &&
        caracter !== ' ' 
    ){
        console.log(caracter)
    }
} 









// Ejercicios

/**
 * For
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * 
 */



/**
  * While
  * Escribir un programa que le pida al usuario un numero
  * que imprima en consola el numero dado si es positivo y pedir otro numero
  * si el numero es negativo, salir del ciclo
  * 
  */


/** 
 * For
 * Dado los siguientes 2 strings
 * 'smtp'
 * 'aeiou'
 * Imprimir en consola las siguientes combinaciones
 * -> sa, se, si, so , su 
 * -> ma, me, mi, mo , mu 
 * -> ta, te, ti, to , tu 
 * -> pa, pe, pi, po , pu
 */