// Задание 2: "Пользователи без постов"
// URL:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

// Создай async функцию:
// - получи пользователей и посты
// - найди пользователей, у которых нет ни одного поста
// - верни массив таких пользователей
// - выведи результат


async function usersWithoutPost() {

const dataUsers = await fetch ('https://jsonplaceholder.typicode.com/users')
const dataPosts = await fetch ('https://jsonplaceholder.typicode.com/posts')


const users = await dataUsers.json()
const posts = await dataPosts.json()


const noPost = users.filter ((user) => {
   const us = !posts.some((post) => post.userId === user.id)
   return us
})

console.log(noPost)

}

usersWithoutPost()