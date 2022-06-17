// Create Koder
console.log("SU codigo para crear un koder aquí")

let btnEnviar = document.getElementById("sendKoder")
btnEnviar.addEventListener("click", () => {

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
    let newKoder = {
      name: name,
      age: age,
      biography: biography,
      bootcamp: bootcamp
    }

    console.log(newKoder)

    // Envio con XMLHttpRequest

    // const httpXHR = new XMLHttpRequest()
    // httpXHR.onload = (response) => {
    //   if(response.target.status >= 200 && response.target.status <= 399) {
    //     let responseFirebase = JSON.parse(response.target.response)
    //     alert(`Koder registrado exitosamente con el id ${responseFirebase.name} `)
    //   }
    // }

    // httpXHR.open('POST', 'https://koders19gjs-default-rtdb.firebaseio.com/koders/.json', true)
    // httpXHR.send( JSON.stringify(newKoder) )

    // Envio con fetch
    fetch("https://koders19gjs-default-rtdb.firebaseio.com/koders/.json", {
      method: "POST",
      body: JSON.stringify(newKoder),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((finalResponse) => {
      console.log(finalResponse)
      // {name:'-hashdadadad'}
      alert(`Koder registrado exitosamente con el id ${finalResponse.name} `)
    })
    .catch((err) => {
      console.log(err)
    })
  }
})

