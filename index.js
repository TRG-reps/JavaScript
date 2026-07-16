
// Задача 1 - Объединить клиентов и добавить id
const customers1 = [
  { name: 'John', city: 'London' },
  { name: 'Maria', city: 'Berlin' }
];

const customers2 = [
  { name: 'Peter', city: 'Paris' },
  { name: 'Anna', city: 'Madrid' }
];

// 👉 Получи результат:
[
  { name: 'John', city: 'London', id: 101 },
  { name: 'Maria', city: 'Berlin', id: 102 },
  { name: 'Peter', city: 'Paris', id: 103 },
  { name: 'Anna', city: 'Madrid', id: 104 }
]

// Для объеденения массивов ты можешь использовать конструкцию с тремя точками. Пример ниже:
const newArrayTest = [...customers1, ...customers2]


const customers1 = [
  { name: 'John', city: 'London' },
  { name: 'Maria', city: 'Berlin' }
];

const customers2 = [
  { name: 'Peter', city: 'Paris' },
  { name: 'Anna', city: 'Madrid' }
];


const customers = [...customers1, ...customers2]

const result = customers.map((customer, index) => ({
  ...customer,
  id: index + 101
}))
console.log(result)

// Задача 2 - Получить e-mail активных заказов
const orders = [
  { id: 1, email: 'user1@mail.com', isActive: true },
  { id: 2, email: 'user2@mail.com', isActive: false },
  { id: 3, email: 'user3@mail.com', isActive: true }
];

// 👉 Получи результат:
['user1@mail.com', 'user3@mail.com']

const orders = [
  { id: 1, email: 'user1@mail.com', isActive: true },
  { id: 2, email: 'user2@mail.com', isActive: false },
  { id: 3, email: 'user3@mail.com', isActive: true }
];



const result = orders
.filter((order) => order.isActive)
.map((order) => order.email)

console.log(result)

// Задача 3: Сформировать описание товаров
const products = [
  { title: 'Laptop', price: 1000 },
  { title: 'Phone', price: 600 }
];

// 👉 Получи результат:
[
  'Товар: Laptop — Цена: 1000',
  'Товар: Phone — Цена: 600'
]



const products = [
  { title: 'Laptop', price: 1000 },
  { title: 'Phone', price: 600 }
];

const result = products.map((product) => (`Товар: ${product.title}  Цена — ${product.price}`))
console.log(result)

// Задача 4: Отметить клиентов с высоким балансом
const clients = [
  { name: 'Lena', balance: 900 },
  { name: 'Dima', balance: 2000 },
  { name: 'Max', balance: 1500 }
];

// ❗Добавь каждому клиенту новое свойство `isVIP`:
// true — если баланс больше или равен 1500
// false — если меньше.


const clients = [
  { name: 'Lena', balance: 900 },
  { name: 'Dima', balance: 2000 },
  { name: 'Max', balance: 1500 }
]

const vip = clients.map((client) => ({
  ...client,
  isVip: client.balance >= 1500 
})) 

console.log(vip)

// Задача 5: Названия товаров в наличии и дешевле 100
const items = [
  { title: 'Backpack', inStock: true, price: 40 },
  { title: 'Shoes', inStock: false, price: 80 },
  { title: 'Watch', inStock: true, price: 120 }
];

// ❗Найди только те товары, которые:
// 1. есть в наличии (`inStock === true`)
// 2. стоят меньше 100
// Верни массив, содержащий только названия таких товаров.


// 👉 Ожидаемый результат:
['Backpack']

const items = [
  { title: 'Backpack', inStock: true, price: 40 },
  { title: 'Shoes', inStock: false, price: 80 },
  { title: 'Watch', inStock: true, price: 120 }
]

const titles = items
.filter((item) => item.inStock && item.price < 100)
.map((item) => item.title)

console.log(titles)


//  Задача 6: Сгруппировать заказы по статусу
const orders = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'delivered' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'cancelled' },
  { id: 5, status: 'delivered' }
];

// ❗Раздели заказы по статусу в отдельные массивы внутри объекта.


// 👉 Ожидаемый результат:
{
  pending: [
    { id: 1, status: 'pending' },
    { id: 3, status: 'pending' }
  ],
  delivered: [
    { id: 2, status: 'delivered' },
    { id: 5, status: 'delivered' }
  ],
  cancelled: [
    { id: 4, status: 'cancelled' }
  ]
}


const orders = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'delivered' },
  { id: 3, status: 'pending' },
  { id: 4, status: 'cancelled' },
  { id: 5, status: 'delivered' }
]

const group = orders.reduce((acc,order) => {
   if (!acc[order.status]) {
    acc[order.status] = []
   }
   acc[order.status].push(order)
   return acc
}, {})

console.log(group)

const products = [
  { name: 'Laptop', category: 'electronics' },
  { name: 'Shirt', category: 'clothing' },
  { name: 'Phone', category: 'electronics' },
  { name: 'Pants', category: 'clothing' },
  { name: 'Blender', category: 'home' }
];

// ❗Верни объект, в котором ключ — категория,
// а значение — количество товаров в ней.


// 👉 Ожидаемый результат:
{
  electronics: 2,
  clothing: 2,
  home: 1
}


const products = [
  { name: 'Laptop', category: 'electronics' },
  { name: 'Shirt', category: 'clothing' },
  { name: 'Phone', category: 'electronics' },
  { name: 'Pants', category: 'clothing' },
  { name: 'Blender', category: 'home' }
]

const sorted = products.reduce((acc, product) => {
 if (!acc[product.category]) {
  acc[product.category] = 0
 }
 acc[product.category]++
 return acc
}, {}) 

console.log(sorted)




















