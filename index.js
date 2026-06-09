// Задача 1 - Приветствие (база)
// Напиши функцию `sayHello`, которая принимает имя человека и выводит в консоль приветствие.
// Пример: sayHello("Аня") → "Привет, Аня!"

function sayHello (name) {
  console.log (`Привет, ${name}!`)
}
sayHello("Аня") 

// Задача 2 - Квадрат числа + return
// Напиши функцию `square(num)`, которая возвращает квадрат числа.
// Затем вызови эту функцию 3 раза с разными числами и сохрани результат в переменные.

function square(num) {
  return num * num
}

const a = square(2);
const b = square(4);
const c = square(323)

console.log(a,b,c) 

// Задача 3 - Сравнение чисел
// Напиши функцию `isBigger(a, b)` 
// Она должна возвращать true, если a > b, иначе false.
// Пример: isBigger(10, 5) → true

isBigger = (a, b) => a > b;

console.log(isBigger(1, 2))

// Задача 4 - Колбэк внутри
// Напиши функцию `doTwice(callback)`, которая вызывает переданную ей функцию дважды
function sayHi() {
  console.log("Привет!");
}
function doTwice(callback) {
    callback();
    callback();  
}
doTwice(sayHi);
// → Привет!
// → Привет!

// Задача 5 - Комбинация функций
// Создай две функции:
// 1. `formatName(name)` — возвращает строку в виде "Пользователь: <имя>"
// 2. `greet(name)` — вызывает `formatName(name)` и выводит результат в консоль с текстом: "Добро пожаловать, Пользователь: <имя>"
// Пример вызова: greet("Лена") → "Добро пожаловать, Пользователь: Лена"

function formatName(naame) {
  return `Пользователь: ${naame}`
}

function greet (naame) {
  return console.log(`Добро пожаловать, ${formatName (naame)}`)
  }

  greet("Ruslan")

// Задача 6 - Напиши функцию `createMultiplier(multiplier)`, которая возвращает новую функцию.
// Эта новая функция createMultiplier должна принимать число и умножать его на multiplier.
// Пример:
// const double = createMultiplier(2);
// console.log(double(5)); // → 10
// const triple = createMultiplier(3);
// console.log(triple(4)); // → 12


function createMultiplier (multiplier) {
  return function (num) {
    return num * multiplier
  }
}

