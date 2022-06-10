


// GET
// VERBOS http -> (GET, POST, PUT, PATCH, DELETE)
// payload
// JSON.parse( texto ) -> obj 
// JSON.stringify( obj ) -> texto

const createUser =  ( objUser ) => {
  console.log(JSON.stringify(objUser))
  const xhttp = new XMLHttpRequest()
  xhttp.open( "POST",  
    "https://koders19gjs-default-rtdb.firebaseio.com/users/.json", true)
  xhttp.onload = function(data) {
    console.log(data)
      if(data.target.status >= 200 && data.target.status <= 399){
          console.log(data.target.response)
      }
  }
  xhttp.send( JSON.stringify(objUser) )
}

let user =  {
  name: 'Jorge luis',
  lastName: 'Camarillo',
  age: 31
}







