// convertir los grados celsius to farentheit

let celsius = prompt('Temperatura actual', 23)
if( celsius === null ) {
    console.log('Temperatura incorrecta')    
} else {
    let far = parseInt(celsius) * 9/5 + 32
    let messageToShow = `La temperatura actual es de ${far} ºF`
    window.alert(messageToShow) 
}

