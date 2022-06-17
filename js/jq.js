



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


// seleccion de multiples elementos
let allLi = document.querySelectorAll('li')
allLi.forEach( ( item) => {
    item.classList.add('list__item')
    item.style.color = 'red'
    item.style.color = 'red'
    item.style.color = 'red'
    item.style.color = 'red'
})
 
// concatenar metodos
// $('li').addClass('list__item').css('color','red').addClass('otraclase')
$('li').addClass('list__item')
.css( { color: 'red',fontSize: '20px',fontStyle: 'italic'})
.addClass('otra clase tres cuatro cinco')

// ocultar / mostrar elementos
// ocultar
// $('.ocultar').hide()
// $('.ocultar').fadeOut().addClass('oculto')
// $('.ocultar').slideUp()
// mostrar
// $('.ocultar').show()
// $('.ocultar').fadeIn()
// $('.ocultar').slideDown()



// Ajax
// crud
// fetch(options)
// Crud
// body: JSON.stringify(newKoder),
// $.ajax({
//   method: "POST",
//   url: "https://koders19gjs-default-rtdb.firebaseio.com/koders/.json",
//   data: JSON.stringify( { name: 'nuevo desde JQ', age: '20', biography: 'lorem', bootcamp: 'js'})
// })
// .done( ( response ) => {
//   // todo salio bien
//   alert( "Data Saved: " + response );
//   console.log(response)
//   // Que hacer si se cumplio el post

// })
// .fail(function() {
//   // si algo salio mal
//   alert( "error", err );
// })
// .always(function() {
//   // siempre que se ejecute la peticion 
//   alert( "complete" );
// })

// let idKoder = '-N4jGlHU2PnLytgG_rwg'
// $.ajax({
//     method: "PATCH",
//     url: `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
//     data: JSON.stringify( { name: 'nuevo desde JQ updated', age: '20', biography: 'lorem', bootcamp: 'js'})
//   })
//   .done( ( response ) => {
//     // todo salio bien
//     console.log(response)
//     // Que hacer si se cumplio el post
  
//   })
//   .fail(function() {
//     // si algo salio mal
//     console.log( "error");
//   })

// Delete
// let idKoder = '-N4jGlHU2PnLytgG_rwg'
// $.ajax({
//     method: "DELETE",
//     url: `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`
//   })
//   .done( ( response ) => {
//     // todo salio bien
//     console.log(response)
//     // Que hacer si se cumplio el post
  
//   })
//   .fail(function() {
//     // si algo salio mal
//     console.log( "error");
//   })

// Obtener datos
// read -> GET

// xmlhttprequest
// $.ajax({
//     method: "GET",
//     url: `https://koders19gjs-default-rtdb.firebaseio.com/koders/.json`
//   })
//   .done( ( response ) => {
//     // todo salio bien
//     // Que hacer si se cumplio el post
//     console.log(response)
//     let template = ''
//     for(item in response) {
//         template += `
//             <li>${response[item].name}</li>
//         `
//     }
//     $('.lista__koders').html(template)
  
//   })
//   .fail(function() {
//     // si algo salio mal
//     console.log( "error");
//   })

