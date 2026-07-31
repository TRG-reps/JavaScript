/*
// Задание 3: "Имитация лайков"
// Есть массив постов:
const posts = [
  { id: 1, likes: 0 },
  { id: 2, likes: 0 }
];

// Создай функцию `startLikes(arr)`:
// - каждые 1 секунду:
//   → случайному посту увеличивай likes на 1
//   → выводи массив
// - если какой-то пост достиг 5 лайков:
//   → добавь ему поле popular = true
//   → останови процесс
*/

const posts = [
    { id: 1, likes: 0 },
    { id: 2, likes: 0 }
  ];


  const startLikes = (arr) => {
    
    

    let interval = setInterval(() => {
        let randomPost = arr[Math.floor(Math.random() * arr.length)]
        randomPost.likes += 1
      console.log(`ID: ${randomPost.id} has ${randomPost.likes} like(s)`)
      let popularPost = arr.find((post) => post.likes === 5 )
      if (popularPost) {
        clearInterval(interval)
        popularPost.popular = true
        console.log(popularPost)
      }
    }, 1000)
  }

  startLikes(posts)
