/*
// Задание 3: "Проверка неактивных пользователей"
// Есть массив:
const usersLastSeen = [
  { name: 'Alex', lastSeen: 2 },
  { name: 'John', lastSeen: 10 },
  { name: 'Kate', lastSeen: 5 }
];

// Создай функцию `markInactive(arr)`:
// - через setTimeout (например 2 секунды)
// - пройдись по массиву и добавь поле isInactive:
//   true если lastSeen > 5
// - выведи обновлённый массив
*/

const usersLastSeen = [
    { name: 'Alex', lastSeen: 2 },
    { name: 'John', lastSeen: 10 },
    { name: 'Kate', lastSeen: 5 }
  ]

  const markInactive = (arr) => {
    setTimeout(() => {
        arr.forEach((user) => {
            let nonActive = user.lastSeen > 5
            user.isInactive = nonActive 
        } )
    console.log(arr)
    }, 2000)
  }

  markInactive(usersLastSeen)




