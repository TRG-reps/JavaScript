/*
// Задание 1: "Простая задержка"
// Создай функцию `getMessage()`:
// - возвращает Promise
// - через 1 секунду возвращает строку: "Привет"

// Создай async функцию:
// - вызови getMessage() через await
// - выведи результат в консоль
*/


function getMessage() {
  return new Promise ((resolve) => {
setTimeout(() => {
  resolve('Привет')
}, 1000)
  })
}

async function showMessage () {
  console.log(await getMessage())
}

showMessage()