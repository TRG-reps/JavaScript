/*
// Задание 5: "Цепочка промисов"
// Создай функцию `start()`:
// - возвращает Promise с числом 2
// Построй цепочку:
// - сначала умножь на 3
// - потом прибавь 4
// - выведи итог
*/



function start () {
    return Promise.resolve(2)
}

start()
.then((num) => {
    return num * 3
})
.then((num) => {
    console.log( num + 4 )
})