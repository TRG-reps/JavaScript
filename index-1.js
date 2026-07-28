/*
// Задание 1: "Отложенная активация пользователей"
// Есть массив пользователей:
const users = [
  { name: 'Alex', isActive: false },
  { name: 'John', isActive: false },
  { name: 'Kate', isActive: false }
];

// Создай функцию `activateUsers(arr)`:
// - для каждого пользователя установи разную задержку (например: index * 1000)
// - через setTimeout меняй isActive на true
// - при активации выводи: "Пользователь Alex активирован"
// - после всех активаций выведи весь массив
*/


const users = [
  { name: 'Alex', isActive: false },
  { name: 'John', isActive: false },
  { name: 'Kate', isActive: false }
]


const activateUsers = (arr) => {
arr.forEach ((element, index) => {
  setTimeout(() => {
    element.isActive = true;
    console.log(`Пользователь ${element.name} активирован`)
  }, index * 1000)
  
})
setTimeout(() => {
  console.log(arr)
}, arr.length * 1000) 
}

activateUsers(users)

