// Задание 5: "Группировка постов по пользователям"
// URL:
// https://jsonplaceholder.typicode.com/posts

// Создай async функцию:
// - получи посты
// - сгруппируй их в объект:
//   {
//     userId: [посты]
//   }
// - используй reduce
// - выведи результат


async function groupUsers() {

const dataPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
const posts = await dataPosts.json()

let result = posts.reduce ((acc, post) => {

  if (!acc[post.userId]) {
    acc[post.userId] = []
  }
  acc[post.userId].push(post)
  return acc

}, {})

console.log(result)
return result



}

groupUsers()