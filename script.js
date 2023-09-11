const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const day = today.getDay();

const currentDay = weekDays[day];
document.getElementById("day").textContent = currentDay;

const time = today.getTime();
const currentTime = document.getElementById("time");
currentTime.textContent = time + "s";
