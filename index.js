// Задание 1: "Карточка пользователя"
// Создай объект `user`, у которого будут свойства:
// - `name` (строка)
// - `age` (число)
// - `isAdmin` (булевое значение)
// Выведи в консоль:
// - имя пользователя
// - его возраст
// - является ли он администратором

const user = {
  name: "Anna",
  age: 20,
  isAdmin: true
}

console.log (user.name, user.age, user.isAdmin) 

// Задание 2: "Добавление и изменение"
// 1. Создай объект `car` с маркой и годом выпуска.
// 2. Добавь к нему свойство `color`.
// 3. Измени год выпуска.
// 4. Выведи результат в консоль.

const car = {
  brand: "Toyota",
  year: 2024
}

car.color = "black";
car.year = 2026

console.log (car)

// Задание 3: "Вложенные объекты"
// Создай объект `order`, у которого:
// - есть вложенный объект `customer` с полями `name` и `phone`
// - есть вложенный объект `shipping` с полями `city` и `zip`
// Выведи в консоль поля customer и shipping:

const order = { 
  customer : {
    name: "Anna",
    phone: 7777
  },
  shipping : {
    city: "London",
    zip: 5222
  }
}

console.log (order.customer, order.shipping)

// Задание 4: "Объект как база данных"
// 1. Создай объект `products`, где ключами будут названия товаров, а значениями — цены.
// 2. Получи цену конкретного товара по ключу.
// 3. Добавь новый товар и выведи обновлённый объект.

// Пример:
// В консоли - "Товар: book, цена - 500"
// В консоли - "Товар: pensil, цена - 50" 


const products = {
book: 500,
pencil: 50,
pen: 100,
workbook: 300
}

console.log (`Товар: book, цена -  ${products.book}`)
console.log (`Товар: pencil, цена -  ${products.pencil}`)


// Задание 5 "Реальный заказ"
// Создай объект `fullOrder`, в котором:
// - `buyer`: содержет поля - name, email, phone
// - `shipping`: содержет поля - city, adres, shipMethod
// - `payment`: содержет поля - paymentMethod, status
// Выведи в консоль объект, после чего измени значение каждого поля и снова выведи в консоль.

const fullOrder = {
  buyer : {
    name: "Kolya",
    email: "kolya@gmail.com",
    phone: "7777-8888"
  },
  shipping : {
    city: "Oslo",
    adress: "Highway 65",
    shipMethod: "airplane"
  },
  payment : {
    paymentMethod: "credit card",
    status: "inProgress"
  }
}


console.log(fullOrder)

fullOrder.buyer.name = "Vasiliy"
fullOrder.buyer.email = "vasya@gmail.com"
fullOrder.buyer.phone = "1111-2222"

fullOrder.shipping.city = "Toronto"
fullOrder.shipping.adress = "Waterfall Str 6"
fullOrder.shipping.shipMethod = "truck"

fullOrder.payment.status = "delivered"
fullOrder.payment.paymentMethod = "bank"

console.log(fullOrder)

// Задание 6: "Метод приветствия"
// Создай объект `person`, у которого будут свойства:
// - `name`
// - `age`
// Добавь метод `greet(message)`:
// - принимает строку message
// - выводит в консоль: "<message>, меня зовут <name>"

const person = {
  name : "John",
  age : 19 ,

greet(message) {
  console.log(`${message}, меня зовут ${this.name}`)
}
}

person.greet("Привет")

 
// Задание 7: "Подсчёт стоимости корзины"
// Создай объект `cart`, у которого:
// - есть свойство `items` (массив чисел — цены товаров)
// Добавь метод `getTotal(discount)`:
// - принимает число discount (скидка в процентах)
// - считает сумму всех товаров
// - применяет скидку
// - возвращает итоговую сумму

const cart = {
  items: [40, 30, 65, 94],

  getTotal(discount) {
    let total = 0;
    
    for (const price of this.items) {
     total += price 
    }
    let finalPrice = total - total * discount / 100;
    return finalPrice
}
}
console.log (cart.getTotal(50))


// Задание 8: "Обновление данных пользователя"
// Создай объект `profile`, у которого:
// - `username`
// - `email`
// Добавь метод `update(field, value)`:
// - принимает название поля и новое значение
// - изменяет соответствующее поле объекта
// - выведи объект в консоль до и после изменения

const profile = {
  username: "Agent007",
  email: "agent007@gmail.com",

  update(field, value) {
    return this[field] = value
  }
}

console.log(profile);

console.log (profile.update("username","Agent008"))