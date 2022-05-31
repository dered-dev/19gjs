/**
 * Repaso Arrow functions
 * -> Parametros
 * -> Invocacion de funciones
 */

// Declaracion de la funcion
const suma = (a, b = 3) => {
    // sentencias
    let total = a + b
    return total
    
}

// invocar
// suma() -> sin argumentos
// suma(2,3)
// suma() 
// 0

// arr.join('-')

// arr.map( callback )

// arr.reduce( callback(acc,cv,index, arr), initialValue )

// arr.forEach( callback )
// arr.filter( callback )

// arr.map( function (cv, index, arr) {} )
// [1,2,3].map( (cv, index, arr) => { }  )

// funcion declarativa
const doubleNumber = ( cv, index, arr ) => {
    let total = cv * 2
    // variable de bloque
    return total
}


// let totalFuncion = doubleNumber( 1000 )
// console.log(totalFuncion)

let multiArray = [100,1000,10,2,4]

// función como argumento
// [200, 2000, 20, 4, 8 ]
let resultado = multiArray.map( doubleNumber )
console.log(resultado)

let resultFuncionAnonima = multiArray.map( 
    // función anonima
    ( cv, index, arr ) => {
        let total = cv * 2
        return total
    }
)
console.log(resultFuncionAnonima)

// multiArray.map( cv => cv * 2 )





/**
 * Repaso métodos de array
 * 
 */

//  ['s', 't', 'r'].filter( (cv) => cv === 'r' ? cv : null )
// ['s','t','r'].filter( (cv, index, arr) => {
//     if(cv === 'r'){
//         return cv
//     }
// })

let arr = ['s', 'r','r']
let result = arr.filter( (cv) => {
    if(cv === 'r') {
        return cv
    }
})
console.log(result)


// 

const filterPares = (acc, cv, index, arr) => {
    if( cv % 2 === 0){
        acc.push(cv) 
        return acc
    } else {
        return acc
    }
}

let reducePares = (arr) => {
    let soloPares = arr.reduce( filterPares , [] )
    return soloPares
}



/**
 * Ejercicio
 * Escribir una funcion, Que dado una array de numeros y strings, 
 * retorne un array con solo los que son de tipo string
 * filterArray( [1, 2, "a", "b"] ) 
 * -> ["a", "b"]
 * 
 * Implementar soluciones con
 * .forEach() 
 * .filter()
 * .reduce()
 *
*/


const filterArray = (arr) => {
    let onlyStrings = []
    arr.forEach( (item) => {
        if(typeof item === 'string'){
            onlyStrings.push(item)
        }
    })

    return onlyStrings
}

// filterArray( [1, 2, "a", "b"] ) 


const filterArrayFilter = (arr) => {
    let onlyStrings = []
    onlyStrings = arr.filter( (cv) => {
        if(typeof cv === 'string'){
            return cv
        }
    } )

    return  onlyStrings
}

// filterArrayFilter( [1, 2, "a", "b"] ) 

const filterArrayReduce = (arr) => {
    let onlyStrings = []
    onlyStrings = arr.reduce((acc, cv) => {
        if(typeof cv === 'string') {
            acc.push(cv) 
        }

        return acc
    }, [])
    return onlyStrings
}

// filterArrayReduce( [1, 2, "a", "b"] )

