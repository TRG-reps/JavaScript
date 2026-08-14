/*
// Задание 5: "Два вызова подряд"
// Создай функции:
// 1. getA() → Promise с числом 2
// 2. getB() → Promise с числом 3

// Создай async функцию:
// - вызови обе функции через await
// - сложи результаты
// - выведи сумму
*/



function getA() {
    return new Promise ((resolve) => {
        resolve(2)
    }) 
}

function getB() {
    return new Promise((resolve) => {
        resolve(3)
    })
}


async function addFunctions() {
    const A = await getA()
    const B = await getB()

    console.log(A + B)

    
}

addFunctions()