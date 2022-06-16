



// Seleccion de elementos
// Vanilla Js
let title = document.querySelector('.faketitle')
console.log(title)

// jQuery 
// $('selector')
let titleJQ = $('.faketitle')
console.log(titleJQ)

// agregar / eliminar una clase
title.classList.add('clasevanilla')
$('.faketitle').addClass('claseJQ')

title.classList.remove('clasevanilla')
$('.faketitle').removeClass('claseJQ')

// Modificar texto
title.innerText = 'Titulo con vanilla'
$('.faketitle').text('Titulo con JQ')

// modificar html interior 
title.innerHTML = '<span>titulo con vanilla</span>'
$('.faketitle').html('<span>titulo con JQ</span>')

// Ajax

