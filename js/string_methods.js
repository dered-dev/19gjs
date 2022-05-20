
// Metodos de string
// funciones
// str.nombreMetodo(p1,p2,pN)
// .toUpperCase()
// .toLowerCase()
// .substring(start, end)
// .slice(start, end)

// Ejercicio
// str.method()
// str.method(p1,...)

let strSaludo = 'Hola Koders'
/**
 * 'Hola Koders'
 * Cuantas vocales existen
*/

console.log(strSaludo.match(/[aeiou]/gi).length)


/**
 * 'Hola Koders'
 * Cuantos caracteres son
*/

console.log(strSaludo.length)
/**
 * 'Hola Koders'
 * Cortar el string en 2 strings 
 * -> "hola" "koders"
*/


console.log(strSaludo.split(' '))

/**
 * 'Hola Koders'
 * Reemplazar todas las Vocales por *
 * -> "h*l* k*d*rs"
*/
strSaludo = strSaludo.replaceAll('a', '*')
strSaludo = strSaludo.replaceAll('e', '*')
strSaludo = strSaludo.replaceAll('i', '*')
strSaludo = strSaludo.replaceAll('o', '*')
strSaludo = strSaludo.replaceAll('u', '*')

console.log(strSaludo)
