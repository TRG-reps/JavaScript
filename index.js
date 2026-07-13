
// Задача 1 - С помощью метода массива выведи в консоль значение каждого элемента 
const names = ['Alice', 'Bob', 'Charlie'];

names.forEach((name) => console.log(name))




// Задача 2 - Выведи в консоль имена с порядковым номером (начиная с 1):

// Результат:
// 1. Alice  
// 2. Bob  
// 3. Charlie



const names = ['Alice', 'Bob', 'Charlie']

names.forEach((element, index) => console.log(`${index + 1}. ${element}`))



// Задача 3 - У тебя массив заказов orders
const orders = [
  { id: 101, product: 'Laptop' },
  { id: 102, product: 'Phone' },
  { id: 103, product: 'Tablet' }
];

// Используя метод массива, выведи в консоль сообщение для каждого заказа: 
// Заказ #101: Laptop
// Заказ #102: Phone
// ...



const orders = [
  { id: 101, product: 'Laptop' },
  { id: 102, product: 'Phone' },
  { id: 103, product: 'Tablet' }
]

orders.forEach((order) => console.log(`Заказ ${order.id}: ${order.product}`))



// Задача 4 - Удвой все числа в массиве:
const nums = [1, 2, 3];
// Верни новый массив: [2, 4, 6]





const nums = [1, 2, 3]

const double = nums.map((numb) => numb * 2)
console.log(double)



// Задача 5 - Из массива имён создай массив объектов:
const arrayNames = ['Alice', 'Bob'];

//  Нужно получить:
[
  { name: 'Alice', length: 5 },
  { name: 'Bob', length: 3 }
]



const arrayNames = ['Alice', 'Bob']

 const objNames = arrayNames.map((arrName) => ({ name: arrName, length: arrName.length})) 
 console.log(objNames)



// Задача 6 - У тебя массив пользователей users:
const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 17 }
];

// Создай новый массив строк вида: ['Alice (20 лет)', 'Bob (17 лет)']



const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 17 }
]

const newUsers = users.map((user) => `${user.name} (${user.age} лет)`)
console.log(newUsers)



// Задача 7 - Отфильтруй пользователей старше 18 лет:
const dataUsers = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 25 }
];
//  Ожидается только те, кто age > 18



const dataUsers = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 25 }
];

console.log(dataUsers.filter((user) => user.age > 18))



// Задача 8 - У тебя массив заказов, нужно оставить только те, где статус — 'delivered':
const dataOrders = [
  { id: 1, status: 'delivered' },
  { id: 2, status: 'pending' },
  { id: 3, status: 'delivered' }
];

//  Результат в консоли:
[
  { id: 1, status: 'delivered' },
  { id: 3, status: 'delivered' }

  

  const dataOrders = [
    { id: 1, status: 'delivered' },
    { id: 2, status: 'pending' },
    { id: 3, status: 'delivered' }
  ]


  
  console.log(dataOrders.filter((order) => order.status === 'delivered'))






