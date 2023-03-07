const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const monthsContainer = document.getElementById("monthsWrapper");
const daysContainer = document.getElementById("daysWrapper");
const hoursContainer = document.getElementById("hoursWrapper");
const minutesContainer = document.getElementById("minutesWrapper");
const secondsContainer = document.getElementById("secondsWrapper");

function summerDaysAreHere() {
  const summer = "1 June 2023";
  const summerDate = new Date(summer);
  const currentDate = new Date();

  const secondsToGo = Math.floor((summerDate - currentDate) / 1000);

  const seconds = Math.floor(secondsToGo) % 60;
  const minutes = Math.floor(secondsToGo / 60) % 60;
  // const hours = Math.floor(minutes / 60);
  const hours = Math.floor(secondsToGo / 3600) % 24;
  const days = Math.floor(secondsToGo / 3600 / 24);

  console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  if (seconds == 0) {
    secondsContainer.classList.add("click");
  } else if (seconds != 0) {
    secondsContainer.classList.remove("click");
    secondsContainer.classList.add("unclick");
  }
  if (minutes == 0) {
    minutesContainer.classList.add("click");
  } else if (minutes != 0) {
    minutesContainer.classList.remove("click");
    minutesContainer.classList.add("unclick");
  }
  if (hours == 0) {
    hoursContainer.classList.add("click");
  } else if (hours != 0) {
    hoursContainer.classList.remove("click");
    hoursContainer.classList.add("unclick");
  }
  if (days == 0) {
    days.classList.add("click");
  } else if (days != 0) {
    daysContainer.classList.remove("click");
    daysContainer.classList.add("unclick");
  }
}

summerDaysAreHere();

setInterval(summerDaysAreHere, 1000);
