/*
// Задание 4: "Обработка данных"
// Создай функцию `getNumber()`:
// - возвращает Promise с числом 5
// В .then():
// - умножь число на 2
// - выведи результат
*/

function getNumber() {

return new Promise ((resolve) => {
    resolve(5)
})

}

getNumber()
.then((num) => {
    console.log(num * 2)
})