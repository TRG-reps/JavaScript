// Задача 1 -  Базовые условия if / else
// Напиши программу, которая проверяет возраст пользователя.
// Если меньше 18 — вывести: Доступ запрещён
// Если 18 и больше — вывести: Добро пожаловать!

let age = 18;

if (age < 18) {
  console.log("Доступ запрещен");
} else {
  console.log("Добро пожаловать");
}

//или

const message = age < 18 ? "Доступ запрещен" : "Добро пожаловать";
console.log(message);

// Задача 2 - Чётное или нечётное:
// Проверь, является ли число чётным.
// Подсказка: число % 2 === 0
// Проверка пароля:
// Если введённый пароль (let password = "12345") совпадает с "qwerty", вывести Доступ разрешён, иначе Неверный пароль.

let num = 2131321223211;

if (num % 2 === 0) {
  console.log("Четное");
} else {
  console.log("Нечетное");
}

//или

const result = num % 2 === 0 ? "Четное" : "Нечетное";
console.log(result);

let password = "12345";

if (password === "qwerty") {
  console.log("Доступ разрешен");
} else {
  console.log("Неверный пароль");
}

// Задача 3 - Логические операторы
// Рабочий день или выходной:
// Напиши проверку, если day — "суббота" или "воскресенье", вывести: Выходной. В остальных случаях — Рабочий день.

let day = "воскресен";
let messageDay =
  day === "суббота" || day === "воскресенье" ? "Выходной" : "Рабочий день";
console.log(messageDay);

//или

if (day === "суббота" || day === "воскресенье") {
  console.log("Выходной");
} else {
  console.log("Рабочий день");
}

// Задача 4 - Доступ по статусу:
// Есть две переменные:
// let isLoggedIn = true;   let isAdmin = false;
// Если пользователь вошёл в систему и является админом — показать "Панель администратора", иначе — "Нет доступа".

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Панель администратора");
} else {
  console.log("Нет доступа");
}

// Задача 5 - Тёмная тема:
// Если переменная darkModeEnabled = false, инвертируй её с помощью ! и выведи результат.

let darkModeEnabled = false;

console.log(!darkModeEnabled);

// Задача 6 - Баллы и зачёт:
// У пользователя есть let points = 78.
// С помощью тернарного оператора выведи:
// "Зачёт" если points >= 60
// "Не зачёт" если меньше

let points = 50;
console.log(points >= 60 ? "Зачет" : "Не зачет");

// Задача 7 - Показ имени:
// Пусть у пользователя есть переменная username = "".
// Выведи:
//    let nameToShow = username || "Гость";   console.log("Привет,", nameToShow);

let username = "";
let nameToShow = username || "Гость";
console.log("Привет,", nameToShow);

// Задача 8 - Разница между == и ===:
// Проверь и объясни результат в комментарии:
// console.log(0 == false); // ?   console.log(0 === false); // ?   console.log(null == undefined); // ?   console.log(null === undefined); // ?

console.log(0 == false); // true // при данном операторе js подбирает типы поэтому приравнивает значение false к нулю
console.log(0 === false); //false // т.к. число и булиан разные типы - в результате false
console.log(null == undefined); // true // правило-исключение, при данном операторе результат будет true
console.log(null === undefined); // false // т.к. считаются разными типами значений

// Задача 9 - выбор роли
// Переменная role = "user" может быть: "admin", "moderator", "user", "guest"
// Используй switch для вывода приветствия по роли:
// "Привет, админ!"
// "Привет, модератор!"
// "Привет, пользователь!"
// "Гость, войдите в систему"

let user = "moderator";

switch (user) {
  case "admin":
    console.log("Привет, админ!");
    break;

  case "moderator":
    console.log("Привет, модератор!");
    break;

  case "user":
    console.log("Привет, пользователь!");
    break;

  case "guest":
    console.log("Гость, войдите в систему");
    break;
}
