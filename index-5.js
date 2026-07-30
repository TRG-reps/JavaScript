/*
// Задание 5: "Мониторинг состояния сервера"
// Есть массив:
const servers = [
  { name: 'Server1', status: 'ok' },
  { name: 'Server2', status: 'ok' }
];

// Создай функцию `monitorServers(arr)`:
// - каждые 2 секунды:
//   → случайно меняй статус одного сервера (ok / error)
//   → выводи текущие статусы
// - если появился хотя бы один error:
//   → добавь всем серверам поле hasIssue = true
//   → останови мониторинг
*/

const servers = [
  { name: "Server1", status: "ok" },
  { name: "Server2", status: "ok" },
];

const state = ["error", "ok"];

const monitorServers = (arr) => {
  let interval = setInterval(() => {
    let randomServer = arr[Math.floor(Math.random() * arr.length)];
    let randomState = state[Math.floor(Math.random() * state.length)];

    randomServer.status = randomState;
    arr.forEach((server) => console.log(`${server.name} : ${server.status}`));

    if (arr.some((server) => server.status === "error")) {
      arr.forEach((server) => (server.hasIssue = true));
      console.log(arr);
      clearInterval(interval);
    }
  }, 2000);
};

monitorServers(servers);
