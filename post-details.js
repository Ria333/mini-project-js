let JSONPost = (new URL(location)).searchParams

const id = JSONPost.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((value) => value.json())
    .then(post => {
        let divBig3 = document.getElementsByClassName('massive3')[0]
        divBig3.innerHTML = `post.id:${post.id}  <h3> ${post.title} </h3> <p> ${post.body}</p>`
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((value) => value.json())
    .then(comments => {
        let commentsBox = document.getElementsByClassName('commentsBox')[0]

        for (const comment of comments) {
            let comm = document.createElement('p')
            comm.innerHTML = `id:${comment.id} <br> name:${comment.name} <br> email:${comment.email} <br> ${comment.body}`
            comm.className = 'commDiv'
            commentsBox.appendChild(comm)
        }
    })
