// Задание 1: "Добавление элемента"
// Создай массив `fruits`
// Создай функцию `addFruit(arr, fruit)`:
// - добавляет fruit в конец массива
// - возвращает обновлённый массив
// Сохрани результат вызова функции в переменную и выведи её в консоль
// Пример:
// const result = addFruit(fruits, "apple")

const fruits = [];

function addFruit(arr, fruit) {
  arr.push(fruit);
  return arr;
}

const result = addFruit(fruits, "apple");
console.log(result);

// Задание 2: "Удаление последнего"
// Создай массив `numbers`
// Создай функцию `removeLast(arr)`:
// - удаляет последний элемент
// - возвращает удалённое значение
// Сохрани результат в переменную и выведи в консоль
// Пример:
// const removed = removeLast(numbers)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeLast(arr) {
  return arr.pop();
}

const removed = removeLast(numbers);
console.log(numbers);

// Задание 3: "Проверка наличия"
// Создай массив `users`
// Создай функцию `hasUser(arr, name)`:
// - проверяет, есть ли name в массиве
// - возвращает true или false
// Сохрани результат в переменную и выведи в консоль
// Пример:
// const exists = hasUser(users, "Alex")

const users = [];

function hasUser(arr, name) {
  return arr.includes(name);
}

const exists = hasUser(users, "Alex");
console.log(exists);

// Задание 4: "Получить индекс"
// Создай массив `colors`
// Создай функцию `getIndex(arr, color)`:
// - возвращает индекс элемента
// - если нет — возвращает -1
// Сохрани результат в переменную и выведи в консоль
// Пример:
// const index = getIndex(colors, "red")

const colors = ["red"];

function getIndex(arr, color) {
  return arr.indexOf(color);
}

const index = getIndex(colors, "red");
console.log(index);

// Задание 5: "Добавление в начало"
// Создай массив `tasks`
// Создай функцию `addTaskToStart(arr, task)`:
// - добавляет задачу в начало массива
// - возвращает массив
// Сохрани результат в переменную и выведи в консоль
// Пример:
// const updatedTasks = addTaskToStart(tasks, "Сделать ДЗ")

const tasks = [];

function addTaskToStart(arr, task) {
  arr.unshift(task);
  return arr;
}

const updatedTasks = addTaskToStart(tasks, "Сделать ДЗ");
console.log(updatedTasks);

// Задание 6: "Удаление первого элемента"
// Создай массив `messages`
// Создай функцию `removeFirst(arr)`:
// - удаляет первый элемент массива
// - возвращает его
// Сохрани результат в переменную и выведи в консоль
// Пример:
// const first = removeFirst(messages)

const messages = ["Hi", "Hello"];

function removeFirst(arr) {
  return arr.shift();
}

const first = removeFirst(messages);
console.log(first);

// Задание 7: "Преобразование в строку"
// Создай массив `words`
// Создай функцию `makeSentence(arr)`:
// - объединяет элементы массива в строку через пробел
// - возвращает строку
// Сохрани результат в переменную и выведи в консоль
// Пример:
// const sentence = makeSentence(words)

const words = ["My", "name", "is", "John", "!"];

function makeSentence(arr) {
  return arr.join(" ");
}

const sentence = makeSentence(words);
console.log(sentence);

// Задание 8: "Количество элементов"
// Создай массив `items`
// Создай функцию `getCount(arr)`:
// - возвращает количество элементов в массиве
// Сохрани результат в переменную и выведи в консоль
// Пример:
// const count = getCount(items)

const items = ["apple", "chery", "lemon"];

function getCount(arr) {
  return arr.length;
}

const count = getCount(items);
console.log(count);

// Задание 9: "Уникальность элемента"
// Создай массив `emails`
// Создай функцию `addEmail(arr, email)`:
// - если email уже есть — не добавляет
// - если нет — добавляет в массив
// - возвращает массив
// Сохрани результат в переменную и выведи в консоль
// Пример:
// const updatedEmails = addEmail(emails, "test@mail.com")

const emails = ["test@mail.com"];

function addEmail(arr, email) {
  if (!arr.includes(email)) {
    arr.push(email);
    return arr;
  }
  return arr;
}

const updatedEmails = addEmail(emails, "test@mail.com");
console.log(updatedEmails);
