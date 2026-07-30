/*
// Задание 6: "Постепенное начисление баланса"
// Есть массив пользователей:
const usersBalance = [
  { name: 'Alex', balance: 0 },
  { name: 'John', balance: 0 }
];

// Создай функцию `startBonus(arr)`:
// - каждые 1 секунду:
//   → увеличивай баланс каждого пользователя на 100
//   → выводи текущий баланс
// - останови процесс, когда у всех баланс >= 300
// - добавь поле isRich = true тем, кто достиг 300
*/

const usersBalance = [
  { name: "Alex", balance: 0 },
  { name: "John", balance: 0 },
];

const startBonus = (arr) => {
  let interval = setInterval(() => {
    arr.forEach((user) => {
      user.balance += 100;
      console.log(`${user.name} balance is ${user.balance}`);
      if (user.balance >= 300) {
        user.isRich = true;
      }
    });
    if (arr.every((user) => user.balance >= 300)) {
      clearInterval(interval);
      console.log(arr);
    }
  }, 1000);
};

startBonus(usersBalance);
