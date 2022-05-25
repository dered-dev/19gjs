
// funciones

// invertir una cadena
// let strUser  = prompt('Dame una palabra', 'str').toLowerCase()
// let strReversed = ''

// for( i = strUser.length - 1; i >= 0; i-- ){
//     console.log(strReversed)
//     strReversed += strUser[i]
// }

// invocar la funcion

function invertirString() {
    let strUser  = prompt('Dame una palabra', 'str').toLowerCase()
    let strReversed = ''

    for(j = strUser.length - 1; j >= 0; j-- ){
        strReversed += strUser[j]
    }

    console.log(strReversed)

}
// invocar funcion
// invertirString()




// funciones  -> ok
// funciones de retorno ok
function getNumber() {
    let retorno = 'mensaje de retorno'
    // return -> termina la ejecucion de la funcion
    // return -> Devuelve 1 valor
    console.log('pasos intermedios')
    return retorno
    console.log('pasos intermedios')
}
// console.log( getNumber() )

function getNumberLight () {
    return 'mensaje de retorno'
}
// declarando la funcion
function numeroUno(){
    return 2
}

function numeroDos(){
    return 4
}

function numeroTres(){
    return 6
}

// function suma(){
//     let suma = numeroUno() + numeroDos() + numeroTres()
//     return suma
// }

// function suma(){
//     return numeroUno() + numeroDos() + numeroTres()
// }

// bolean -> true o false
// let getSuma = suma() 
// console.log(getSuma)

// Funciones con parametros

function suma(p1, p2 ){
    let total = 0
    total = p1 + p2
    return total
}

function sumaDos(p1, p2){
    return p1 + p2
}
// parametros opcionales
function sumaOpcional(p1, p2, p3 = 4 ){
    return p1 + p2 + p3
}


// Ejercicio
// Realiza una funcion
// Que pida al usuario 3 numeros
// retorne la suma de esos 3 numeros
// los 3 numeros deben pasarse como parametros

function addNumbers (a, b, c = 5) {
    // null, undefined, NaN -> Not a Number
    if(  ! (a && b && c) ) {
        console.error('Existen valores no definidos')
    } else {
        return a + b + c
    }
}

let numberOne = parseInt(prompt('Numero 1'))
let numberTwo = parseInt(prompt('Numero 2'))
let numberThree = parseInt(prompt('Numero 3'))

console.log(addNumbers (numberOne, numberTwo, numberThree))




function test(a, b = 5 ) {
    console.log(a,b)
    // validamos datos vacios
    // null, undefined, NaN
    if( a && b ){
        return a + b
    } else {
        console.error('Error')
    }
}












