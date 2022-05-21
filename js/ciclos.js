// Ciclos


/*

    for(inicio; fin ; aumento/decremento){
        // sentences
    }

    while(expresion){
        // sentences

    }

    do{
        // sentences
    } while(expresion)
*/


for(let i = 1; i <= 10; i++){
    console.log(` 5 x ${i} = ${5*i} `)
}


let counter = 1
while(counter <= 10) {
    console.log(` 5 x ${counter} = ${ 5 * counter } `)
    counter++
}


do {
    console.log(counter)
    // console.log(` 5 x ${counter} = ${ 5 * counter } `)
    counter++
} while(counter <= 10)




/**
 * 
 * Imprimir cada caracter de un string
 * 
 */ 

let str = 'Hola Koder'
let fin = str.length - 1

// Solucion for
for(let i = 0; i < fin; i++){
    console.log(str[i])
} 

// solucion while
let counter2 = 0
while(counter2 <= fin) {
    console.log( str[counter2] )
    counter2++
}

counter2 = 0
do {
    // console.log(counter2)
    let letra = str[counter2]
    console.log( letra )
    counter2++
} while(counter2 <= fin)


/**
 * 'Hola Koder'
 * -> 'redok aloh'
 * Imprimir el string invertido
 * 
 * 
 */ 

 let counterReverse = fin
 let ReversedStr = ''
 while(counterReverse >= 0) {
     console.log( str[counterReverse] )
     ReversedStr += str[counterReverse]
     counterReverse--
 }

 console.log(ReversedStr)

/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 * 
 */ 


/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 * 
 */ 









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