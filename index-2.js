/*
// Задание 2: "Авто-сохранение формы"

// Есть объект:
const form = {
  name: 'Alex',
  email: 'test@mail.com',
  isSaved: false
};

// Создай функцию `autoSave(form)`:
// - каждые 3 секунды:
//   → меняй isSaved на true
//   → выводи "Форма сохранена"
// - если поле уже true — не дублируй вывод
// - останови через 2 сохранения
*/

const form = {
  name: "Alex",
  email: "test@mail.com",
  isSaved: false,
};

const autoSave = (form) => {
  let cycle = 0;
  let interval = setInterval(() => {
    if (!form.isSaved) {
      form.isSaved = true;
      console.log("Форма сохранена", form);
    }
    cycle++;
    if (cycle === 2) {
      clearInterval(interval);
    }
  }, 3000);
};

autoSave(form);
