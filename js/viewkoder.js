
// url 
// http://127.0.0.1:5500/interior.html?koderkey=-N4TJNibKM9OvZbWSB_R


// window.location.search
// "?koderkey=-N4TJNibKM9OvZbWSB_R"
//  

let idKoder = window.location.search.substring(10)
console.log(idKoder)

// Hacer una peticion al server

// cuando el response este listo
// pintar la informacion del koder en un card

