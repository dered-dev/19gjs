
// Metodos de array
// .forEach()
// .map()
// .filter()
// .reduce()
// .find()



// let arr = [10, 20, 30, 40]

// for(i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((valorDeCadaIteracion, indiceDelElemento, arrayOriginal) => {})
let arr = [10, 20, 30, 40, 50, 60, 70]

// arr.forEach( (currentValue, index, arr) => {
//     console.log(currentValue, arr)
// } )

// arr.forEach( (currentValue) => {
//     console.log(currentValue)
// } )

// arr.forEach( currentValue => {
//     console.log(currentValue)
// } )

// arr.forEach( currentValue => console.log(currentValue) )

let arrCities = ['méxicO','RIo', 'Los AngelEs']

/**
 * Escribir una funcion
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitalizadas
 * capitalize(['méxicO','RIo', 'Los AngelEs'])
 * -> ['México','Rio', 'Los Angeles']
 * 
 */
const capitalize = (arr) => {
    let capCities = []
    arr.forEach( (city) => {
        let cityCapitalized = `${city[0].toUpperCase()}${city.slice(1).toLowerCase() }`
        capCities.push(cityCapitalized)
    })
    return capCities
}

const capitalizeMap = (arr) => {
    let capCities = arr.map( (city) => {
        return `${city[0].toUpperCase()}${city.slice(1).toLowerCase() }`
    })
    return capCities
}

const capitalizeMapReduced = (arr) => {
    // return ['México','Rio', 'Los Angeles']
    // ['México','Rio', 'Los Angeles'] 
    return arr.map( (city) => {
        return `${city[0].toUpperCase()}${city.slice(1).toLowerCase() }`
    })
}




/**
 * .map()
 * [1,2,3,4]
 * -> [2,4,6,8]
 */

let mapArr = [1,2,3,4]
// let interMap = [17, 19, 21, 23]
let doubleArr = mapArr.map( (cv) => {
    let transformado = cv * 2
    transformado += 5
    transformado += 10

    return transformado
})


let arrStr = ['hola','mundo']

/**
 * Funcion
 * getFirstLast(['hola','mundo'])
 * output -> ['ha','mo']
 * .map()
 */

const getFirstLast = (arr) => {
    let arraySliced = arr.map((item) => {
        return `${ item.slice(0) }${ item.slice(-1)}`
    })
    return arraySliced
}

const getFirstLastReduced = (arr) => {
    return arr.map((item) => {
        return `${ item.slice(0) }${ item.slice(-1)}`
    })
}

const getFirstLastMostReduced = (arr) => {
    return arr.map( item => `${ item.slice(0) }${ item.slice(-1)}` )
}

const getReduced = arr => arr.map( item => `${ item.slice(0) }${ item.slice(-1)}` )








