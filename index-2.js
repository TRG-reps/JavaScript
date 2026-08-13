/*
// Задание 2: "Успех или ошибка"
// Создай функцию `checkNumber(num)`:
// - возвращает Promise
// - если num > 10 → resolve("Число больше 10")
// - иначе → reject("Число слишком маленькое")
// Вызови функцию и обработай результат через .then() и .catch()
*/


function checkNumber(num) {
   return new Promise((resolve, reject) => {
    if (num > 10) {
        resolve ("Число больше 10")
    } else {
        reject("Число слишком маленькое")
    }
  })

}

checkNumber(11)
.then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })




