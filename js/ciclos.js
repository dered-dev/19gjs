// Ciclos


/*

    for(inicio; fin ; aumento/decremento){
        // sentences
    }

    while(){}
        // sentences
    do{
        // sentences
    }while()
*/


for(let i = 1; i <= 10; i++){
    // sentencias
    // console.log('5 x '+ i)
    console.log(` 5 x ${i} = ${5*i} `)
} 


// 'hola koders'
// '01234567891'
// '12345678901'

let str = 'Hola Koder'
let fin = str.length
console.log(fin)
// console.log(str[0])

// for(let i = 0; i < fin; i++){
//     console.log(str[i])
// } 

// "Hola Koder"
// Imprimir en consola cada una de las vocales
// ciclos y condicionales

for(let i = 0; i < fin; i++){
    let caracter = str[i]
    if(caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u'){
        console.log(caracter)
    }
} 






