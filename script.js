'use strict';

const countDays = document.querySelector('.countdown-days');
const countHours = document.querySelector('.countdown-hours');
const countMinutes = document.querySelector('.countdown-minutes');
const countSeconds = document.querySelector('.countdown-seconds');

const addZero = function (num) {
  return num < 10 ? `0${num}` : num;
};

const newYearCounter = function () {
  // Get the future and present time stamps
  const newYear = new Date('2023 1 1').getTime();
  const today = new Date().getTime();

  // Get the gap
  const gap = newYear - today;

  // Calculate the times
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Check the time stamp
  if (gap > 0) {
    // Get the remaining values
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // Append to the UI
    countDays.textContent = addZero(days);
    countHours.textContent = addZero(hours);
    countMinutes.textContent = addZero(minutes);
    countSeconds.textContent = addZero(seconds);
  } else {
    alert('Happy new year');
  }

  // const counter = `${days} : ${hours} : ${minutes} : ${seconds}`;
};

// Call the function each second
setInterval(newYearCounter, 1000);
