/*
// Задание 3: "Получение пользователя"
// Создай функцию `getUser()`:
// - возвращает Promise
// - возвращает объект:
//   { name: 'Alex', age: 20 }

// Создай async функцию:
// - получи пользователя через await
// - выведи его имя


*/

function getUser() {
    return new Promise ((resolve) => {
        resolve({ name: 'Alex', age: 20 })
    }) 
}

async function showUser() {
    const user = await getUser()
    console.log(user.name)
    
}


showUser()

