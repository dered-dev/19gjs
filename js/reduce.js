
const hacerJugo = (cajafrutas) => {
    let jugo = ''
    cajafrutas.forEach( (fruta) => {
        jugo = jugo + fruta
    })
    return jugo
}

// let frutas = ['naranja','naranja', 'naranja']
// let recipiente = hacerJugo(frutas)
// console.log(recipiente)

// reduce
// .map( callback)
// .foreach( callback)
// .filter( callback)

// .reduce(callback, initialValue)

// let frutas = ['naranja','naranja', 'naranja']

// frutas.forEach( (fruta, index, arr ) => {

// }, '') 
let numeros = [1,2,3]
let totalSuma = numeros.reduce( (total, cv, index, arr) => {
    return total += cv
}, 100 )
console.log(totalSuma)



let frutas = ['naranja','naranja', 'zanahoria']
let vaso = frutas.reduce( (recipiente, fruta, index, arr ) => {
    return recipiente + fruta
}, '' ) 
console.log(vaso)


/**
 * funcion con .reduce()
 * getInitialLetters( ['jorge','luis', 'camarillo', 'cristobal'] )
 * -> 'jlcc'
 */

const getInitialLetters = (arr) => {
    let onlyInitialLetters = ''
    onlyInitialLetters =  arr.reduce((previousValue, currentValue, currentIndex, array) => {
        return previousValue += currentValue.charAt(0)
    }, '')
    return onlyInitialLetters
}

const getInitialLettersSmall = (arr) => arr.reduce((acc, cv) => acc += cv.charAt(0) , '')

// let arrow = () =>{ 

//     return  [].map( () => {
//         return algo
//     })

// }

// let arrowSmall = () => 1 + 5



/**
 * funcion con .reduce()
 * getDoubleNumbers( [4, 7, 9])
 * -> [8, 14, 18] 
 */

const getDoubleNumbers = (arr) => {

    // let doubleNUmbersArr = []
    // doubleNUmbersArr = arr.reduce( (acc, elemento, index) => {
    //     acc.push(elemento * 2)
    //     return acc
    // }, [] )
    // return doubleNUmbersArr


    return arr.reduce( (acc, elemento) => {
        acc.push(elemento * 2)
        return acc
    }, [] )
}

console.log(getDoubleNumbers( [4, 7, 9]))

/**
 * funcion
 * getAverage( [1,2,3,4])
 * -> 2.5
 * 
 */

const getAverage = (arr) => {

    // return arr.reduce((acc, cv) =>  {
    //     return acc + cv
    // }, 0) / arr.length

    return arr.reduce( (acc, cv) => acc + cv , 0) / arr.length

} 











