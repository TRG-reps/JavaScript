
// Задание 1
// "Обогащение заказов данными пользователей"
// Есть массив пользователей:
const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'John' }
];

// Есть массив заказов:
const orders = [
  { id: 101, userId: 1, total: 500 },
  { id: 102, userId: 2, total: 1500 },
  { id: 103, userId: 1, total: 700 }
];

// Создай функцию `attachUserToOrders(orders, users)`:
// - с помощью forEach пройдись по orders
// - найди пользователя по userId
// - добавь в каждый заказ поле userName
// - если пользователь не найден → userName = "Unknown"
// - верни массив заказов
// Сохрани результат в переменную и выведи



const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'John' }
]


const orders = [
  { id: 101, userId: 1, total: 500 },
  { id: 102, userId: 2, total: 1500 },
  { id: 103, userId: 1, total: 700 }
]

const attachUserToOrders = (orders, users) => {
  orders.forEach((order) => {
    const user = users.find(user => user.id === order.userId)
    order.userName = user ? user.name : 'Unknown'
  }
  )
  return orders
}

console.log(attachUserToOrders(orders, users))



// Задание 2
// "Формирование профиля пользователя"
// Есть массив:
const usersData = [
  {
    name: 'Alex',
    age: 20,
    hobbies: ['sport', 'music']
  },
  {
    name: 'John',
    age: 30,
    hobbies: ['reading']
  }
];

// Создай функцию `buildProfiles(arr)`:
// - верни новый массив
// - для каждого пользователя:
//   → добавь поле hobbiesCount (кол-во хобби)
//   → добавь поле isAdult (age >= 18)
//   → добавь поле summary: "Alex (20) — 2 hobbies"
// - не изменяй оригинальный массив
// Сохрани результат и выведи






const usersData = [
  {
    name: 'Alex',
    age: 20,
    hobbies: ['sport', 'music']
  },
  {
    name: 'John',
    age: 30,
    hobbies: ['reading']
  }
]


const buildProfiles = (arr) => 
  arr.map((user) => ({
    ...user,
    hobbiesCount: user.hobbies.length,
    isAdult: user.age >= 18,
    summary: `${user.name} (${user.age}) - ${user.hobbies.length} hobbies `
  }))


console.log(buildProfiles(usersData))





// Задание 3
// "Фильтрация сложных заказов"
// Есть массив:
const ordersData = [
  {
    id: 1,
    items: ['phone', 'case'],
    total: 800,
    status: 'delivered'
  },
  {
    id: 2,
    items: [],
    total: 0,
    status: 'pending'
  },
  {
    id: 3,
    items: ['laptop'],
    total: 2000,
    status: 'delivered'
  }
];

// Создай функцию `getValidOrders(arr)`:
// - верни только те заказы:
//   → у которых есть хотя бы один товар (items.length > 0)
//   → статус = 'delivered'
//   → total > 1000
// Сохрани результат и выведи



const ordersData = [
  {
    id: 1,
    items: ['phone', 'case'],
    total: 800,
    status: 'delivered'
  },
  {
    id: 2,
    items: [],
    total: 0,
    status: 'pending'
  },
  {
    id: 3,
    items: ['laptop'],
    total: 2000,
    status: 'delivered'
  }
]

const getValidOrders = (arr) => arr.filter((order) => order.items.length > 0 && order.status === 'delivered' && order.total > 1000 )

console.log(getValidOrders(ordersData))











