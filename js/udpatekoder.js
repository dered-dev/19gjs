// Update Koder
console.log("SU codigo para Actualizar un koder aquí")
// Obtener id
let idKoder = window.location.search.substring(10)

// TRaer informacion de ese koder
// const xhttp = new XMLHttpRequest()
// xhttp.open( 'GET', `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`, true)
// xhttp.onload = function(data) {
//     if(data.target.status >= 200 && data.target.status <= 399){

//       let response = JSON.parse(data.target.response)
//       if(response){

//         let { name, age, biography, bootcamp } = response
//         // pintar esa informacion en el formulario
//         document.querySelector('#nombre').value = name
//         document.querySelector('#edad').value = age
//         document.querySelector('#bootcamp').value = bootcamp
//         document.querySelector('#biografia').value = biography

//       } else {
//         alert('Usuario no existente')
//       }
//     }
// }
// xhttp.send()

// FETch
fetch(
  `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
  {
    method: "GET"
  }
)
  .then((response) => {
    if (!response.ok) {
      let err = new Error(
        `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
      )
      throw err
    } else {
      return response.json()
    }
  })
  .then((response) => {
    console.log(response)
    let { name, age, biography, bootcamp } = response
    document.querySelector("#nombre").value = name
    document.querySelector("#edad").value = age
    document.querySelector("#bootcamp").value = bootcamp
    document.querySelector("#biografia").value = biography
  })
  .catch((err) => {
    console.log(err)
  })

let btnActualizar = document.getElementById("updateKoder")
btnActualizar.addEventListener("click", () => {
  // obtener la data
  let name = document.getElementById("nombre").value
  let age = document.getElementById("edad").value
  let biography = document.getElementById("biografia").value
  let bootcamp = document.getElementById("bootcamp").value

  // validar la data
  if (name === "" || age === "" || biography === "" || bootcamp === "") {
    alert("Campos vacios")
  } else {
    // formar el nuevo koder
    let koderUpdated = {
      name: name,
      age: age,
      biography: biography,
      bootcamp: bootcamp
    }

    console.log(koderUpdated)

    // hacer el envio XMLHttpRequest
    // const httpXHR = new XMLHttpRequest()
    // httpXHR.onload = (response) => {
    //   if(response.target.status >= 200 && response.target.status <= 399) {
    //     let responseFirebase = JSON.parse(response.target.response)
    //     alert(`Koder actualizado correctamente. `)
    //   }
    // }
    // httpXHR.open('PATCH', `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`, true)
    // httpXHR.send( JSON.stringify(koderUpdated) )

    // hacer el envio fetch
    fetch(
      `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(koderUpdated),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then((response) => {
        return response.json()
      })
      .then((finalResponse) => {
        console.log(finalResponse)
      })
      .catch((err) => {
        console.log(error)
      })
  }
})

/**
 * Eliminar koder
 */

let btnEliminar = document.getElementById("deleteKoder")
btnEliminar.addEventListener("click", () => {
  // hacer el envio
  // const httpXHR = new XMLHttpRequest()
  // httpXHR.onload = (response) => {
  //   console.log(response)
  //   if(response.target.status >= 200 && response.target.status <= 399) {
  //     let responseFirebase = JSON.parse(response.target.response)
  //     console.log(responseFirebase)
  //     alert(`Koder eliminado exitosamente. `)
  //   }
  // }
  // httpXHR.open('DELETE',
  // `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`, true)
  // httpXHR.send()

  // fetch


  fetch(
    `https://koders19gjs-default-rtdb.firebaseio.com/koders/${idKoder}.json`,
    {
      method: "DELETE"
    }
  )
    .then((response) => {
      if (!response.ok) {
        let err = new Error(
          `Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`
        )
        throw err
      } else {
        return response.json()
      }
    })
    .then((response) => {
      console.log(response)
      window.location.pathname = "/index.html"
    })
    .catch((err) => {
      console.log(err)
    })
})
