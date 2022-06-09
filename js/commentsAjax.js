

const printComments = (comments) => {
    let commentsLayout = comments.reduce( (acc, comment) => {
        return acc += `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">
                        ${comment.name}
                        
                    </div>
                    ${comment.body}
                    <p>${comment.email}</p>
                </div>
                <span class="badge bg-primary rounded-pill">${comment.id}</span>
            </li>
        `
    }, '')
  
    document.querySelector('.all__comments').innerHTML = commentsLayout
}


// Create an XMLHttpRequest object
const xhrComments = new XMLHttpRequest()
xhrComments.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399) {
        if(response.target.responseText  != ''){
            let comments = JSON.parse(response.target.responseText)
            printComments(comments)
        }
    }
}

// GET, DELETE 
// POST, PATCH, PUT
xhrComments.open("GET", "https://jsonplaceholder.typicode.com/comments", false)
xhrComments.send()
















