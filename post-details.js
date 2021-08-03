let JSONPost = (new URL(location)).searchParams
const id = JSONPost.get('postId');

fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then ((value) => value.json())
    .then (post => {
      console.log(post)
    })




//     .searchParams.get('post');
//
// let post = JSON.parse(JSONPost);
//
// let divBig3 = document.getElementsByClassName('massive3')[0]
// divBig3.innerHTML =`${post.id} ${post.title} ${post.body}`
