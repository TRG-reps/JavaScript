/*
// Задание 3: "Найти пользователя"
// URL:
// https://jsonplaceholder.typicode.com/users

// Создай async функцию `findUserById(id)`:
// - получи всех пользователей
// - найди пользователя по id
// - выведи его имя и email


*/

async function findUserById(id) {

const data = await fetch('https://jsonplaceholder.typicode.com/users')

const users = await data.json()

const user =  users.find((user) => {
    return user.id === id
})
console.log(user.name, user.email)



}

findUserById(2)

