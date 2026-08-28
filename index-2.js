/*
// Задание 2: "Ротация статусов задач"
// Есть массив:
const tasks = [
  { title: 'Task 1', status: 'new' },
  { title: 'Task 2', status: 'new' }
];

// Возможные статусы: ['new', 'inProgress', 'done']

// Создай функцию `rotateStatuses(arr)`:
// - каждые 2 секунды:
//   → меняй статус каждой задачи по кругу (new → inProgress → done → new)
//   → выводи обновлённый массив
// - останови после 3 полных циклов
*/

const tasks = [
  { title: "Task 1", status: "new" },
  { title: "Task 2", status: "done" },
];

const stats = ["new", "inProgress", "done"];

const rotateStatuses = (arr) => {
  let cycle = 0;
  let interval = setInterval(() => {
    arr.forEach((task) => {
      let index = stats.indexOf(task.status);
      task.status = stats[(index + 1) % stats.length];
      
    });
    console.log(arr)
    cycle++;

    if (cycle === 3) {
      clearInterval(interval);
    }
  }, 2000);
};

rotateStatuses(tasks);
