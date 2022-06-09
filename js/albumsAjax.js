const printAlbums = (albums) => {
  let albumsLayout = albums.reduce((acc, album) => {
    return (acc += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
           ${album.title}
            <span class="badge bg-primary rounded-pill">${album.id}</span>
        </li>
      `)
  }, "")

  document.querySelector(".all__albums").innerHTML = albumsLayout
}

const xhrAlbums = new XMLHttpRequest()
xhrAlbums.onload = (response) => {
  if (response.target.status >= 200 && response.target.status <= 399) {
    if (response.target.responseText != "") {
      let albums = JSON.parse(response.target.responseText)
      printAlbums(albums)
    }
  }
}

xhrAlbums.open("GET", "https://jsonplaceholder.typicode.com/albums", false)
xhrAlbums.send()
