/*
// Задание 1: "Система уведомлений"
// Есть массив уведомлений:
const notifications = [
  { id: 1, message: 'Новое сообщение', read: false },
  { id: 2, message: 'Обновление профиля', read: false }
];

// Создай функцию `startNotifications(arr)`:
// - каждую секунду показывай одно уведомление (по очереди)
// - после показа помечай его как read = true
// - когда все уведомления показаны — останови интервал
// - в конце выведи обновлённый массив
*/

const notifications = [
  { id: 1, message: "Новое сообщение", read: false },
  { id: 2, message: "Обновление профиля", read: false },
];

const startNotifications = (arr) => {
  let index = 0;
  let interval = setInterval(() => {
    console.log(arr[index].message);
    arr[index].read = true;
    index++;
    if (index === arr.length) {
      clearInterval(interval);
      console.log(arr);
    }
  }, 1000);
};

startNotifications(notifications);
