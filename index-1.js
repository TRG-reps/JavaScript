/*
// Задание 1: "Простой промис"
// Создай функцию `getMessage()`:
// - возвращает Promise
// - через 1 секунду resolve со строкой: "Привет из промиса"
// Сохрани результат в переменную и выведи через .then()
*/


function getMessage() {
  return new Promise ((resolve) => {
    setTimeout(() => {
     resolve('Привет из промиса')
  },1000)
  })
}


const result = getMessage()

result.then((info)=> {
console.log (info)
})

