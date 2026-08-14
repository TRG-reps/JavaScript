/*
// Задание 4: "Обработка результата"
// Создай функцию `getNumber()`:
// - возвращает Promise с числом 10

// Создай async функцию:
// - получи число через await
// - умножь его на 2
// - выведи результат

*/


function getNumber() {
    return new Promise((resolve) => {
        resolve(10)
    })
}

async function multiply() {
    const result = await getNumber()
    console.log(result * 2)
} 

multiply()