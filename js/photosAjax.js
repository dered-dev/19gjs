

const printPhotos = (photos) => {
    let photosLayout = photos.reduce((acc, photo) => {
      return acc += `
        <div class="col-12 col-md-4 p3 mb-3" >
            <div class="card" >
                <img src="${photo.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Id photo:${photo.id}</h6>
                </div>
            </div>
        </div>
      `
    }, '')  
    document.querySelector('.all__photos').innerHTML = photosLayout
}


// Create an XMLHttpRequest object
const xhrPhotos = new XMLHttpRequest()
xhrPhotos.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399) {
        if(response.target.responseText  != ''){
            let photos = JSON.parse(response.target.responseText)
            printPhotos(photos)
        }
    }
}

// GET, DELETE 
// POST, PATCH, PUT
xhrPhotos.open("GET", "https://jsonplaceholder.typicode.com/photos", false)
xhrPhotos.send( )













