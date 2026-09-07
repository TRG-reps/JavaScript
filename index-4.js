// Задание 4: "Фильтрация постов по длине"
// URL:
// https://jsonplaceholder.typicode.com/posts

// Создай async функцию:
// - получи посты
// - оставь только те, у которых длина body > 100 символов
// - преобразуй результат в массив:
//   { id, shortBody } (первые 20 символов body)
// - выведи результат

async function addComment() {

  const dataPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await dataPosts.json();
  

 
 const longposts = posts.filter(post => post.body.length > 100)

 let result = longposts.map((post) => {
  return {
  id: post.id,
  shortbody: post.body.slice(0, 20)
  }
 })

 console.log(result)
 return result


}

addComment()