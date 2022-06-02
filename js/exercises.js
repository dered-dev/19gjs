

/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } ) 
 * => [ ['a', 1], ['b', 2]]
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 
 * 1 con Object.entries() y
 *  Otra con .map()
 */
// solución con .entries()
const makePairs = (obj) =>  {
    return Object.entries(obj)
}

// solución con .map()
const makePairsMap = (obj) => {
    return Object.keys(obj)
            .map( (cv) => {
                return [cv, obj[cv]]
            })
}

/**
 * Dado un objeto de salarios
 * Crear una funcion que retorne una lista 
 * con los salarios ordenados de menor a mayor
 * orderSalary( salarios)
 * -> [4000, 5000, 7000] 
 */

 let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000
}

const orderSalary = (obj) => {
    let listaSalarios = Object.values(obj)
    listaSalarios.sort()
    return listaSalarios
}
const orderSalarySmall = (obj) => Object.values(obj).sort()


let orderedSalarios = orderSalarySmall(salarios)
console.log(orderedSalarios)
