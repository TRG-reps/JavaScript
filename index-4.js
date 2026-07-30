/*
// Задание 4: "Отложенная фильтрация данных"
// Есть массив:
const usersData = [
  { name: 'Alex', age: 20 },
  { name: 'John', age: 17 },
  { name: 'Kate', age: 25 }
];

// Создай функцию `delayedFilter(arr)`:
// - через setTimeout:
//   → отфильтруй пользователей старше 18
//   → добавь им поле isAdult = true
// - выведи результат
*/

const usersData = [
  { name: "Alex", age: 20 },
  { name: "John", age: 17 },
  { name: "Kate", age: 25 },
];

const delayedFilter = (arr) => {
  setTimeout(() => {
    const adults = arr.filter((user) => user.age >= 18);
    let filter = adults.map((adult) => ({
      ...adult,
      isAdult: true,
    }));
    console.log(filter);
  }, 2000);
};

delayedFilter(usersData);
