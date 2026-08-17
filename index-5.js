/*
// Задание 5: "Сформировать описание постов"
// URL:
// https://jsonplaceholder.typicode.com/posts

// Создай async функцию:
// - получи посты
// - преобразуй их в массив строк:
//   "Пост #1: заголовок..."
// - выведи результат
*/



async function getPosts() {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()

   const list = posts.map((post) => {
    return `Пост #${post.id} заголовок: ${post.title}`
   })
   console.log(list)
}

getPosts()