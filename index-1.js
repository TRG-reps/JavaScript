// Задание 1: "Топ пользователи по количеству постов"
// URL:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

// Создай async функцию:
// - получи пользователей и посты
// - для каждого пользователя посчитай количество его постов
// - отсортируй пользователей по убыванию postsCount
// - верни топ-3 пользователей
// - выведи результат

async function getTop() {

    const dataUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataPosts = await fetch ('https://jsonplaceholder.typicode.com/posts')

    const users = await dataUsers.json()
    const posts = await dataPosts.json()

    const postNumber = users.map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id)

        return {
            ...user,
            postsCount: userPosts.length
        }
    })

    const sorted = postNumber.sort((a, b) => b.postsCount - a.postsCount)

    console.log(sorted.slice(0, 3))
}

getTop()