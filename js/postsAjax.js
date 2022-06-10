

const printPosts = (posts) => {
    let postsLayout = posts.reduce((acc, post, idx, arr) => {
      return acc += `
        <div class="col-12 col-md-4 p3 mb-3" >
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Id post:${post.id}</h6>
                    <p class="card-text">${post.body}</p>
                </div>
            </div>
        </div>
      `
    }, '')
    console.log(postsLayout)
  
    document.querySelector('.all__posts').innerHTML = postsLayout
}
const printUserList = (usersFiltered) => {
    let allUserLayout = usersFiltered.reduce((acc, user, idx, arr) => {
      return acc += `
      <a href="#" class="list-group-item list-group-item-action " aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${user.name}</h5>
        </div>
        <p class="mb-1">${user.phone}</p>
        <small>${user.email}</small>
      </a>
      `
    }, '')
  
    document.querySelector('.all__posts').innerHTML = allUserLayout
}
const getInfo  = (url, callback) => {

    // Create an XMLHttpRequest object
    const xhrPosts = new XMLHttpRequest()
    xhrPosts.onload = (response) => {
        if(response.target.status >= 200 && response.target.status <= 399) {
            if(response.target.responseText  != ''){
                let data = JSON.parse(response.target.responseText)
                console.log(data)
                callback(data)
            }
        }
    }
    xhrPosts.open("GET", url, false)
    xhrPosts.send( )
}

let selector = document.querySelector('#typeurl')
selector.addEventListener('change', () => {
    if(selector.value == 'posts'){
        getInfo('https://jsonplaceholder.typicode.com/posts', printPosts )
    } else if(selector.value == 'users') {
        getInfo('https://jsonplaceholder.typicode.com/users', printUserList )
    }
})


















