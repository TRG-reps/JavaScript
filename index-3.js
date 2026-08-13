/*
// Задание 3: "Имитация загрузки пользователя"
// Создай функцию `loadUser()`:
// - возвращает Promise
// - через 1.5 секунды возвращает объект:
//   { name: 'Alex', age: 20 }
// Выведи имя пользователя после получения

*/


function loadUser() {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
         resolve({ name: 'Alex', age: 20 })
         
        }, 1500)
    })

   
}

loadUser()
.then((user) => {
    console.log(user.name)
})