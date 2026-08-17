/*
// Задание 4: "Получить посты пользователя"
// URL:
// https://jsonplaceholder.typicode.com/posts

// Создай async функцию `getPostsByUser(userId)`:
// - получи все посты
// - отфильтруй посты по userId
// - выведи массив постов


*/


async function  getPostsByUser(userId) {

const data = await fetch('https://jsonplaceholder.typicode.com/posts')

const posts = await data.json()



const list = posts.filter((post) => post.userId === userId)

console.log(list)



}

getPostsByUser(1)