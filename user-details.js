let JSONUser = new URL(location).searchParams.get('user');
let user = JSON.parse(JSONUser);

let divBig = document.getElementsByClassName('massive2')[0]
divBig.innerHTML = `id:${user.id} name:${user.name} username:${user.username} <br> email:${user.email} address:${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode} ${user.address.geo.lat} ${user.address.geo.lng} <br> phone:${user.phone} <br> website:${user.website} <br> about company:${user.company.name} ${user.company.catchPhrase} ${user.company.bs}`;


let postUser = document.createElement('button');
postUser.className = 'buttonClass'
postUser.innerText = 'post of current user';
divBig.appendChild(postUser);
postUser.onclick = function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(function (value) {
            return value.json();
        })
        .then(function (posts) {

            let PostsBox = document.getElementsByClassName('PostsBox')[0]

            for (const post of posts) {

                let Posts = document.createElement('p');
                Posts.innerText = post.title;
                Posts.className = 'postClass'

                let postDetal = document.createElement('button');
                postDetal.className = 'postDetalClass'

                let getDetailsAboutPost = document.createElement('a');
                getDetailsAboutPost.innerText = 'Get Details About Post';
                getDetailsAboutPost.href = `post-details.html?postId=${post.id}`
                getDetailsAboutPost.className = 'boxGetDetailsAboutPost'

                PostsBox.appendChild(Posts);
                postDetal.appendChild(getDetailsAboutPost);
                PostsBox.appendChild(postDetal);

            }
        })
}

// divBig.appendChild(postUser);


// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)