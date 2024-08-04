    
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day'); // Declared day variable

const monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const clock = setInterval(function time() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let me = today.getMinutes();
    let s = today.getSeconds();

    day.innerHTML = `${d} ${monthName[m]} ${y}`; // Fixed the typo
    hour.textContent = h;
    minute.textContent = me;
    second.textContent = s;
} ,1000); // Refresh every second



