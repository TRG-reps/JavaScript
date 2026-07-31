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
    { title: 'Task 1', status: 'new' },
    { title: 'Task 2', status: 'new' }
  ];

let stats = ['new', 'inProgress', 'done']



 const rotateStatuses = (arr) => {
    
    let index = 0
    let cycle = 0
    
    let interval = setInterval(() => {
        
    arr.forEach((task) => {
     task.status = stats[index]
     console.log(task.status)
     })
     
     index++
    if (index === stats.length) {
        index = 0
     cycle++}

    if (cycle === 3) {
        clearInterval(interval)
        
    }

    

    
     }, 2000)

     

 }

 rotateStatuses(tasks)
