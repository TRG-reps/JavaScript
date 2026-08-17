/*
// Задание 1: "Получить список пользователей"
// Используй fetch:
// https://jsonplaceholder.typicode.com/users

// Создай async функцию:
// - получи данные
// - преобразуй в JSON
// - выведи массив пользователей в консоль

*/


async function getUsers() {

const data =  await fetch ('https://jsonplaceholder.typicode.com/users')

const users = await data.json()

console.log(users)
}

getUsers()