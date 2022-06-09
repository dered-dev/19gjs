

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


// Create an XMLHttpRequest object
const xhrPosts = new XMLHttpRequest()
xhrPosts.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399) {
        if(response.target.responseText  != ''){
            let posts = JSON.parse(response.target.responseText)
            printPosts(posts)
        }
    }
}

// GET, DELETE 
// POST, PATCH, PUT
xhrPosts.open("GET", "https://jsonplaceholder.typicode.com/posts", false)
xhrPosts.send( )













