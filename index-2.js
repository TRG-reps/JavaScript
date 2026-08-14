/*
// Задание 2: "Проверка числа"
// Создай функцию `checkNumber(num)`:
// - возвращает Promise
// - если num > 5 → resolve("Ок")
// - иначе → reject("Ошибка")

// Создай async функцию:
// - вызови checkNumber с числом
// - используй try/catch для обработки
// - выведи результат

*/


function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve('Ok')
    } else {
      reject('Ошибка')
    }
  })
}


async function showNumber() {
  try {
    console.log( await checkNumber(8))
     
} catch (error) {
  console.log(error)
}
}

showNumber()
