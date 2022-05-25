// functions
/**
 * 1. Declaracion e invocacion de funciones
 * 2. Funciones con parametros
 * 3. Funciones con parametros opcionales o valores por defectos
 * 4. Funciones de retorno
 */

function retorno (a, b ){
    if(a > b){
        return a
    } else {
        return b
    }
    // a > b ? a : b
}


// arrow functions -> funciones flecha



// sintaxys u
// function suma (a, b) {
//     return a + b
// }
// function suma() {
//     return a + b
// }


// declaracion /  inicializacion


// const suma = (a) => {
//     return a + b
// }

// const suma = a => {
//     return a + b
// }

// const suma = () => {
//     return a + b
// }


// string reverse
// formula
// Declaracion / inicializacion 
const strReverse = ( str = 'koder' ) => {
    let strReversed = ''

    for(i= str.length -1 ; i >= 0; i--){
        strReversed += str[i]
    }
    return strReversed

}

// utilizar
// invocar
console.log( strReverse('Hola') )



// reduccion de arrow functions
// large
const functionLarge = () => {
    // sentencias
    return  a + b
}
// small
const functionSmall = () => { a + b }
// One line
const functionOneLine = () => a + b


// Arrow fuunction
// Pedir al usuario una cadena de texto
// Verificar si esa oracion es un palindromo
// isPalindrome('hola') -> No es un palindromo
// isPalindrome('oso') -> SI es un palindromo

// anita lava la tina
// oso
// seres

// funcion de retorno
const isPalindrome = ( str ) => {
    // sentencias
    let strWithOutSpaces = str.trim().replaceAll(/\s/g,'').toLowerCase()
    let strReversed = ''
    console.log(strWithOutSpaces)

    for(i = strWithOutSpaces.length - 1; i >= 0; i--){
        strReversed += strWithOutSpaces[i]
    }

    if(strWithOutSpaces === strReversed){
        return 'SI es un palindromo'
    } else {
        return 'No es un palindromo'
    }
}




