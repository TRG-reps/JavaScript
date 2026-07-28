/*
// Задание 4: "Живое обновление корзины"
// Есть массив товаров:
const cart = [
  { title: 'Phone', price: 500 },
  { title: 'Case', price: 50 }
];

// Создай функцию `watchCart(arr)`:
// - каждые 2 секунды (setInterval):
//   → добавляй случайный товар в массив
//   → пересчитывай общую сумму (через функцию)
//   → выводи: "Товар добавлен, сумма: X"
// - останови процесс после 3 добавлений
*/

const cart = [
    { title: 'Phone', price: 500 },
    { title: 'Case', price: 50 }
  ];

  const products = [
    { title: 'Laptop', price: 1200 },
    { title: 'Mouse', price: 30 },
    { title: 'Keyboard', price: 80 },
    { title: 'Headphones', price: 150 }
  ];



  
function totalPrice (arr) {
    let total = 0
    arr.forEach((prod) => {
        total += prod.price
    })
    return total
  }

  
  
    const watchCart = (arr) => {
    let addings = 0
    let interval = setInterval(() => {
    let randomProd = products[Math.floor(Math.random() * products.length)]
    arr.push(randomProd)
    addings++
    console.log(`${randomProd.title} добавлен, сумма: ${totalPrice(arr)}`)
    if (addings === 3) {
        clearInterval(interval)
    }
    }, 2000)
    
    
    }
   
    watchCart(cart)

    
    
 
