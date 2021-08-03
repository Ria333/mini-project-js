let JSONUser = new URL(location).searchParams.get('user');
let user = JSON.parse (JSONUser);

let divBig = document.getElementsByClassName('massive2')[0]
divBig.innerHTML =`${user.id} ${user.name} ${user.username} ${user.email} ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode} ${user.address.geo.lat} ${user.address.geo.lng} ${user.phone} ${user.website} ${user.company.name}  ${user.company.catchPhrase} ${user.company.bs}`;


let postUser = document.createElement ('button');
postUser.innerText = 'post of current user';
divBig.appendChild(postUser);
postUser.onclick = function (){

    fetch (`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then ((value) => value.json())
        .then (function (posts){

            let PostsBox = document.getElementsByClassName('PostsBox')[0]

            for (const post of posts) {

                let Posts = document.createElement('p');
                Posts.innerText = post.title;

                let postDetal = document.createElement ('button');

                let getDetailsAboutPost = document.createElement ('a');
                getDetailsAboutPost.innerText = 'Get Details About Post';
                getDetailsAboutPost.href = `post-details.html?postId=${post.id}`

                PostsBox.appendChild(Posts);
                postDetal.appendChild(getDetailsAboutPost);
                PostsBox.appendChild(postDetal);

            }})}

divBig.appendChild(postUser);







// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
