/*
// Задание 2: "Вывести имена пользователей"
// Используй тот же URL

// Создай async функцию:
// - получи пользователей
// - сформируй новый массив только с именами
// - выведи результат
*/


async function getNames() {

  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await data.json()


  

   const names =  users.map((user) => {
    return user.name
  })
  console.log(names)
}

getNames()