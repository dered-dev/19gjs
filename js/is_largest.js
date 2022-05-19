// codigo 
// Pedir al usuario que ingrese 3 números
// Imprimir en consola el mayor
// opcional usar alert()


let firstNumber = parseInt(prompt('Dame un numero', 1))
let secondNumber = parseInt(prompt('Dame un numero', 1))
let thirdNumber = parseInt(prompt('Dame un numero', 1))

// if(firstNumber > secondNumber &&  firstNumber > thirdNumber) {
//    alert(`El numero ${firstNumber} es el mayor`)
// } else if(secondNumber > firstNumber &&  secondNumber > thirdNumber) {
//    alert(`El numero ${secondNumber} es el mayor`)
// } else if(thirdNumber > firstNumber &&  thirdNumber > secondNumber) {
//    alert(`El numero ${thirdNumber} es el mayor`)
// } else {
//     alert('Los 3 numeros son iguales')
// }



if(firstNumber > secondNumber && thirdNumber ) {
    alert(`El numero ${firstNumber} es el mayor`)

} else if(secondNumber > firstNumber && thirdNumber) {
    alert(`El numero ${secondNumber} es el mayor`)

} else if(thirdNumber > firstNumber &&  secondNumber) {
    alert(`El numero ${thirdNumber} es el mayor`)

} else {
    alert('Los 3 numeros son iguales')
}