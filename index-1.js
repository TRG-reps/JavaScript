/*
// Задание 1: "Постепенное удаление пользователей"
// Есть массив:
const users = [
  { name: 'Alex' },
  { name: 'John' },
  { name: 'Kate' },
  { name: 'Mike' }
];

// Создай функцию `removeUsers(arr)`:
// - каждые 1 секунду удаляй одного пользователя (с конца массива)
// - выводи: "Удалён пользователь: Mike"
// - когда массив станет пустым — останови процесс
// - в конце выведи пус
*/


const users = [
  { name: 'Alex' },
  { name: 'John' },
  { name: 'Kate' },
  { name: 'Mike' }
]


const removeUsers = (arr) => {
  let interval = setInterval(() => {
  let delUser = arr.pop()
  console.log(`Удален пользователь: ${delUser.name}`)
  if (arr.length === 0) {
    clearInterval(interval)
    console.log(arr)
  }
  
  }, 1000)
  
}


removeUsers(users)

