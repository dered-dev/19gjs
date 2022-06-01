/**
 * Objetos
 */
// {
//     propiedad:  valor,
//     key:  value,
// }

let koder = {
  name: "jorge",
  horario: ["7-10"],
  isActive: true,
  lastBild: false,
  modules: {
    js: true,
    maquetado: true,
    backend: false,
    react: false
  }
}
console.log(koder)
if(koder.lastBild) {
    console.log(koder)
} else {
    console.log('DEsactivando koder...')
    koder.isActive = false
}

console.log(koder)


console.log(koder)
let generation = koder.generation
let pasoBackend = koder.modules.backend
// let backendPassed = koder['modules'].backend
// let backendPassed = koder['modules']['backend']

console.log(generation, pasoBackend)
// Diferente de null, undefined, NaN => true
if (pasoBackend) {
  console.log(` 
        ${koder.name} si paso el modulo de backend y tiene 
        El horario ${koder.horario[0]}
    `)
}

// koder.isActive ? "activo" : "inactivo"


// Creando nuevas propiedades 


// let car = { }
// console.log(car)
// // car['model'] = 'jetta'
// car.model = 'jetta'
// console.log(car)

// let koder = {
//     name: "jorge",
//     horario: ["7-10"],
//     isActive: true,
//     lastBild: false,
//     modules: {
//       js: true,
//       maquetado: true,
//       backend: false,
//       react: false
//     }
//   }

let koderAssign =  {}

// usando dot notation
/*
koderAssign.name = 'jorge'
koderAssign.horario = ["7-10"]
koderAssign.isActive = true
koderAssign.lastBild = false

// nested objects
koderAssign.modules = {}
koderAssign.modules.maquetado = true
koderAssign.modules.js = true
koderAssign.modules.backend = false
koderAssign.modules.react = false
console.log(koderAssign)
*/

// usando backet notation
// koderAssign['lastName'] = 'jorge'
koderAssign.lastName = 'jorge'
// console.log(koderAssign)


let objSalarios = {
    'lenny' : '30000',
    'Ernesto' : '20000',
    'jorge' : '20000',
    'Kike' : '25000',
}

console.log(objSalarios['Ernesto'])

// Iterando Objetos
// bucles- ciclos
// for ( key in objeto ) { }
for( key in objSalarios ){
    console.log(objSalarios[key])
}



/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */



/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro 
 * Objeto de salarios
 */




/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 * 
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */

const isAnObjectOrArray = (element) => {

}



// CRUD
// C -> create
let objectCar = {
    model: 'jetta',
    doors: 4,
    year: 2022,
    cilindraje: 2,
    color: 'rojo'
}
console.log(objectCar)

// R -> Read
console.log(objectCar.model)
console.log(objectCar.color)

// U -> Update
objectCar.color = 'verde'
console.log(objectCar.color)

// D -> Delete
console.log(objectCar)
delete objectCar.cilindraje
console.log(objectCar)

// Crear / actualizar un objeto
// Leer propiedades de un objeto
// Como iterar propiedades de un objeto
// Eliminar propiedades de un objeto



