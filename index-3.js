// Задание 3: "Обогащение комментариев"
// URL:
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/posts

// Создай async функцию:
// - получи комментарии и посты
// - добавь к каждому комментарию поле postTitle (название поста)
// - верни новый массив комментариев
// - выведи результат



async function addComment() {

 const dataComm = await fetch('https://jsonplaceholder.typicode.com/comments')
 const comms = await dataComm.json()
 
 const dataPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
 const posts = await dataPosts.json()

 console.log(comms, posts)

 let result = comms.map((comm) => {
  const postWithCom = posts.find((post) => post.id === comm.postId )
  
  return {
    ...comm,
    postTitle: postWithCom.title
  }
 })

 
console.log(result)
return result

}

addComment()