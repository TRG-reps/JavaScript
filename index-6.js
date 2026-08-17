/*
// Задание 6: "Комбинация пользователей и постов"
// URL:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

// Создай async функцию:
// - получи пользователей
// - получи посты
// - каждому пользователю добавь поле postsCount (кол-во его постов)
// - выведи обновлённый массив
*/


async function combUsers() {

    const usersData = await fetch ('https://jsonplaceholder.typicode.com/users')
    const postsData = await fetch ('https://jsonplaceholder.typicode.com/posts')

    const users = await usersData.json()
    const posts = await postsData.json()

   
   const result = users.map((user) => {

    const usersPosts = posts.filter ((post) => {
    return post.userId === user.id
   })

   return {
    ...user,
    postCount: usersPosts.length
   }

})

   console.log (result)

}

combUsers()