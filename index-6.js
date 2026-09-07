// Задание 6: "Поиск активного пользователя"
// URL:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/comments

// Создай async функцию:
// - получи пользователей и комментарии
// - посчитай, сколько комментариев оставил каждый пользователь (по email)
// - найди пользователя с максимальным количеством комментариев
// - выведи его имя и количество комментариев



async function activeUser() {
  
   const userData = await fetch ('https://jsonplaceholder.typicode.com/users')
   const commentsData = await fetch ('https://jsonplaceholder.typicode.com/comments')

   const users = await userData.json()
   const comments = await commentsData.json()

   
   let result = users.map((user) => {
      let userComm = comments.filter(comm => comm.email === user.email)
     
       return {
         ...user,
         commentsCount:userComm.length
       }
   })

    let active = result.reduce ((acc, user) => {

     if (acc.commentsCount < user.commentsCount) {
      return user
     } else { return acc}

    }, result[0])

    console.log(active.name, active.commentsCount)
    return result
 



}

activeUser()