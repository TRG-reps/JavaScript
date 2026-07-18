

// Задание 1: "Назначить ID пользователям"
// Есть массив users:
const users = [
  { name: 'Alex' },
  { name: 'John' },
  { name: 'Kate' }
];

// Создай функцию `addIds(arr)`:
// - с помощью forEach добавляет каждому объекту поле id (начиная с 1)
// - возвращает обновлённый массив
// Сохрани результат в переменную и выведи в консоль



const users = [
  { name: 'Alex' },
  { name: 'John' },
  { name: 'Kate' }
];



 const addIds = (arr) => {arr.forEach((user,index) => (user.id = index +1))
return arr}



const result = addIds(users)
console.log(result)



// Задание 2: "Добавить статус онлайн"
// Есть массив users:
const usersOnline = [
  { name: 'Alex', lastVisit: 2 },
  { name: 'John', lastVisit: 10 },
  { name: 'Kate', lastVisit: 1 }
];

// Создай функцию `setOnlineStatus(arr)`:
// - если lastVisit <= 3 → online = true
// - иначе online = false
// - добавь это поле каждому объекту через forEach
// - верни массив
// Сохрани результат в переменную и выведи


const usersOnline = [
  { name: 'Alex', lastVisit: 2 },
  { name: 'John', lastVisit: 10 },
  { name: 'Kate', lastVisit: 1 }
]

function addQ (arr) {
  arr.forEach((user) => user.lastVisit <= 3 ? user.online = true : user.online = false)
  return arr
}

console.log(addQ(usersOnline))


// Задание 3: "Активные пользователи с телефонами"
// Есть массив:
const usersData = [
  { name: 'Alex', isActive: true, phone: '123' },
  { name: 'John', isActive: false, phone: null },
  { name: 'Kate', isActive: true, phone: '456' }
];

// Создай функцию `getValidUsers(arr)`:
// - возвращает только тех, у кого isActive = true и есть phone
// Сохрани результат в переменную и выведи



const usersData = [
  { name: 'Alex', isActive: true, phone: '123' },
  { name: 'John', isActive: false, phone: null },
  { name: 'Kate', isActive: true, phone: '456' }
]

const getValidUsers = (arr) => arr.filter((user) => user.isActive && user.phone)

console.log(getValidUsers(usersData))




// Задание 4: "Дорогие и доступные товары"
// Есть массив:
const shopItems = [
  { title: 'Phone', price: 800, inStock: true },
  { title: 'TV', price: 1500, inStock: false },
  { title: 'Laptop', price: 1200, inStock: true }
];

// Создай функцию `getAvailableExpensive(arr)`:
// - верни товары дороже 1000 и которые есть в наличии
// Сохрани результат и выведи




const shopItems = [
  { title: 'Phone', price: 800, inStock: true },
  { title: 'TV', price: 1500, inStock: false },
  { title: 'Laptop', price: 1200, inStock: true }
]


const getAvailableExpensive = (arr) => arr.filter((item) => item.price > 1000 && item.inStock)

console.log(getAvailableExpensive(shopItems))




// Задание 5: "Добавить описание пользователя"
// Есть массив:
const people = [
  { name: 'Alex', age: 20 },
  { name: 'John', age: 30 }
];

// Создай функцию `addDescription(arr)`:
// - верни новый массив
// - добавь каждому объекту поле description: "Имя: Alex, Возраст: 20"
// Сохрани результат и выведи



const people = [
  { name: 'Alex', age: 20 },
  { name: 'John', age: 30 }
]

const addDescription = (arr) => arr.map((user) => ({
  ...user,
  description: `Имя: ${user.name}, Возраст: ${user.age}`
}))

console.log(addDescription(people))



// Задание 6: "Формирование статуса заказа"
// Есть массив:
const ordersList = [
  { id: 1, total: 500 },
  { id: 2, total: 2000 }
];

// Создай функцию `addStatus(arr)`:
// - если total > 1000 → status = "VIP"
// - иначе status = "обычный"
// - верни новый массив объектов
// Сохрани результат и выведи



const ordersList = [
  { id: 1, total: 500 },
  { id: 2, total: 2000 }
]

const addStatus = (arr) => arr.map((order) => ({
  ...order,
  status: order.total > 1000 ? 'VIP' : 'обычный'
}))

console.log(addStatus(ordersList))



// Задание 7: "Проверка ролей"
// Есть массив:
const roles = ['user', 'admin', 'moderator'];

const usersRoles = [
  { name: 'Alex', role: 'admin' },
  { name: 'John', role: 'guest' }
];

// Создай функцию `checkRoles(arr, roles)`:
// - добавь каждому пользователю поле hasAccess (true/false)
// - true если его role есть в массиве roles
// - верни массив
// Сохрани результат и выведи



const roles = ['user', 'admin', 'moderator'];

const usersRoles = [
  { name: 'Alex', role: 'admin' },
  { name: 'John', role: 'guest' }
]


const checkRoles = (arr, roles) => arr.map((user) => ({
  ...user,
  hasAccess: roles.includes(user.role)
}))

console.log(checkRoles(usersRoles, roles))



// Задание 8: "Позиция категории"
// Есть массив:
const categories = ['tech', 'food', 'books'];

const productsData = [
  { title: 'Laptop', category: 'tech' },
  { title: 'Pizza', category: 'food' }
];

// Создай функцию `addCategoryIndex(arr, categories)`:
// - добавь каждому объекту поле categoryIndex (через indexOf)
// - верни массив
// Сохрани результат и выведи



const categories = ['tech', 'food', 'books'];

const productsData = [
  { title: 'Laptop', category: 'tech' },
  { title: 'Pizza', category: 'food' },
];

const addCategoryIndex = (arr, categories) => arr.map((product) => ({
  ...product,
  categoryIndex: categories.indexOf(product.category)
}) )

console.log(addCategoryIndex(productsData, categories))



// Задание 9: "Найти и отметить пользователя"
// Есть массив:
const usersList = [
  { name: 'Alex' },
  { name: 'John' },
  { name: 'Kate' }
];

// Создай функцию `markUser(arr, name)`:
// - найди индекс пользователя по имени (findIndex)
// - добавь найденному пользователю поле selected = true
// - верни массив
// Сохрани результат и выведи


const usersList = [
  { name: 'Alex' },
  { name: 'John' },
  { name: 'Kate' }
]


const markUser = (arr, name) => {
  const index = arr.findIndex((user) => user.name === name)
  arr[index].selected = true
  return arr
}

console.log(markUser(usersList, 'Kate'))
*/
/*
// Задание 10: "Проверка на ошибки"
// Есть массив:
const logs = [
  { message: 'ok', isError: false },
  { message: 'fail', isError: true }
];

// Создай функцию `checkErrors(arr)`:
// - если есть хотя бы одна ошибка:
//   → добавь каждому объекту поле hasGlobalError = true
// - иначе false
// - верни массив
// Сохрани результат и выведи




const logs = [
  { message: 'ok', isError: false },
  { message: 'fail', isError: true }
]


const checkErrors = (arr) => arr.map((user) => ({
  ...user,
  hasGlobalError: arr.some((user) => user.isError )
  
})) 

console.log(checkErrors(logs))



// Задание 11: "Проверка завершения задач"
// Есть массив:
const tasksList = [
  { title: 'A', done: true },
  { title: 'B', done: true }
];

// Создай функцию `markCompletion(arr)`:
// - если все задачи выполнены:
//   → добавь каждому completedAll = true
// - иначе false
// - верни массив
// Сохрани результат и выведи




const tasksList = [
  { title: 'A', done: true },
  { title: 'B', done: true }
]

function markCompletion(arr) {
  const isOk = arr.every((task) => task.done)
  return arr.map((task) => ({
    ...task,
    completedAll: isOk
  }))
}

console.log(markCompletion(tasksList))



// Задание 12: "Сборка объекта пользователей"
// Есть массив:
const usersArr = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'John' }
];

// Создай функцию `toObject(arr)`:
// - преобразуй массив в объект вида:
// { 1: { id: 1, name: 'Alex' }, 2: { ... } }
// - используй reduce
// Сохрани результат и выведи


const usersArr = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'John' }
]

const toObject = (arr) => arr.reduce((acc, user) => {
  acc[user.id] = user

  return acc


}, {})

console.log(toObject(usersArr))



















