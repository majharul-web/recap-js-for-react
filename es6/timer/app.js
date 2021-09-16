const timeDiv = document.getElementById('timer');

const timerId = setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  timeDiv.innerText = time;
}, 1000);

const stopTimer = () => {
  clearInterval(timerId);
};
