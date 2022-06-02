


/**
 * Metodos de objetos
 * Sintaxis
 * Object.methodName()
 */

// CRUD
// Object.keys()

let obj = {
    'name': 'Jorge',
    'lastName': 'Camarillo',
    'age': 31,
    isMentor: true
}

// ['name', 'lastName']
let arrKeys = []
for( propiedad in obj) {
    arrKeys.push(propiedad)
}
console.log(arrKeys)

// Object.keys(obj)
// -> [key, key, key]
let llaves = Object.keys( obj )

// str.method()
// arr.method()
// Object.method( obj )
// [].forEach((value, index, array) => {})
Object.keys( obj ).forEach((llave)=> {
    console.log( obj[llave] )
})



// Object.assign()
// Object.assign(obj, obj)

let jorge = {
    name : 'jorge'
}

let lore = {
    lastName : 'Camarillo',
    age: 30,
    name : 'Lore'
}

Object.assign(jorge, lore)
console.log(jorge)


// Object.entries()
// -> [ [ key, value ], [ key, value], ... ]
// let obj = {
//     'name': 'Jorge',
//     'lastName': 'Camarillo'
// }

// -> 
    // [ 
    //     [ 'name', 'Jorge' ], 
    //     [ 'lastName', 'Camarillo' ]
    // ]

let resultEntries = Object.entries(obj)
console.log(resultEntries)

// Object.values( obj )
// -> [value1, value2, ...]

let resultValues = Object.values( obj )
console.log(resultValues)

// Object.freeze()
// Create, Read, Update, Delete
// Read
// Object.freeze( obj )

// Object.create( obj )

let galletaBase = {
    forma: 'redonda',
    sabor: 'vainilla'
}

let nuevaGalleta = Object.create( galletaBase )
console.log(galletaBase)


nuevaGalleta.decorado = 'batman'
nuevaGalleta.forma = 'cuadrada'
nuevaGalleta.sabor = 'chocolate'
console.log(nuevaGalleta)
console.log(nuevaGalleta.forma)
console.log(nuevaGalleta.sabor)
// console.log(galletaBase)

// nuevaGalleta.age = 40
// nuevaGalleta.name = 'jorge'

// console.log(nuevaGalleta)
// console.log(nuevaGalleta.name)


// Object.seal()
// Create, Read, Update, Delete
// Read, Update

let objSeal = {
    name: 'kike',
    lastName: 'Acosta'
}


Object.seal( objSeal )
// delete objSeal['lastName']
delete objSeal.lastName

console.log(objSeal)


// Object.create()
// Object.keys()
// Object.values()
// Object.entries()
 
// let objEmpleado = {
//     name: 'jorge',
//     age: 30,
//     salario: 3000,
//     puesto: 'Gerente',
//     idEmpleado: 1000
// }

let salarios = {
    'jorge':  300,
    'mario':  400,
    'juan':  500,
    'Cris':  700,
}

let totalEmpleados = Object.keys(salarios).length
let totalFinal = Object.values(salarios).reduce( (acc, salario) => acc + salario )

// let totalFinal = 0
// Object.values(salarios)
// .forEach( (salario) => {
//     totalFinal += salario
// })


// let soloSalarios = Object.values(salarios)
// let totalFinal = 0 
// for(i = 0; i < soloSalarios.length; i++) {
//     totalFinal += soloSalarios[i]
// }


console.log('totalEmpleados', totalEmpleados)
console.log('total', totalFinal)















