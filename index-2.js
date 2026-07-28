/*
Создай функцию startCounter().

Требования:

Каждую секунду выводи в консоль:
1
2
3
4
5
После вывода 5 останови интервал через clearInterval().
*/


const startCounter = () => {
    let seconds = 1
    let timer = setInterval(() => {
        console.log(seconds)
        seconds++
        if (seconds > 5) {
            clearInterval(timer)
        }
    }, 1000)
}

startCounter()