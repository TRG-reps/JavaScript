/*
// Задание 3: "Имитация загрузки файлов"
// Есть массив:
const files = [
  { name: 'file1', progress: 0 },
  { name: 'file2', progress: 0 }
];

// Создай функцию `uploadFiles(arr)`:
// - каждые 1 секунду увеличивай progress каждого файла на 25
// - выводи прогресс
// - когда все файлы достигли 100 — останови процесс
*/

const files = [
  { name: "file1", progress: 0 },
  { name: "file2", progress: 0 },
];

const uploadFiles = (arr) => {
  let upload;
  let interval = setInterval(() => {
    arr.forEach((file) => {
      upload = file.progress += 25;
      console.log(file.progress);
    });

    if (arr.every((file) => file.progress === 100)) {
      clearInterval(interval);
    }
  }, 1000);
};

uploadFiles(files);
