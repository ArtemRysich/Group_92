// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
// https://uk.javascript.info/garbage-collection

// ***********setTimeout*********** \\

// const id = setTimeout((name, city) => {
//     console.log(name);
//     console.log(city);
// console.log('Time is over');
// }, 0, 'Alice', 'Lviv')

// console.log(id);
// // Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// ***********setInterval*********** \\

// const id1 = setInterval(() => {
// console.log('setInterval');
// }, 1000)

// console.log(id1);

// Видалення Timeout за необхідністю
// clearInterval(id1)

// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const content = document.querySelector(".js-content");
// const text = document.querySelector(".js-text");

// let counter = 5;

// text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//   counter -= 1;
//   console.log(counter);
//   text.textContent = `Залишилось ${counter} секунд`;

//   if (!counter) {
//     clearInterval(id);
//     content.style.display = "none";
//   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   content.style.display = "none";
// }, counter * 1000);

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('start');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0)
// setTimeout(() => {
//     console.log('setTimeout1');
// }, 0)

// setTimeout(() => {
//     console.log('setTimeout2');
// }, 0)

// setTimeout(() => {
//     console.log('setTimeout3');
// }, 0)

// console.log('finish');

// ***********Class Date*********** \\
// const currentDate = new Date();
// console.log(currentDate);
// console.log(Date.now());
// const targetDate = new Date('05/05/2024')
// console.log(targetDate - currentDate);
// console.log(targetDate - currentDate);

// ПЕРЕРВА ДО 21.15

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const selectors = {
  date: document.querySelector(".date"),
  day: document.querySelector(".date-day"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  digitalClock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
  timeOfDay: document.querySelector('.time-of-day')
};

setInterval(() => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
console.log(month);
  // const hours  = currentDate.getHours();
  // const minutes = currentDate.getMinutes();
  // const seconds = currentDate.getSeconds();

  const localTime = currentDate.toLocaleTimeString("uk-Ua");
  // https://help.sap.com/docs/SAP_BUSINESSOBJECTS_BUSINESS_INTELLIGENCE_PLATFORM/09382741061c40a989fae01e61d54202/46758c5e6e041014910aba7db0e91070.html

  selectors.day.textContent = arrDay[day];
  selectors.month.textContent = namesOfMonth[month];
  selectors.date.textContent = date;
  selectors.year.textContent = year;
  selectors.digitalClock.textContent = `Поточний час ${localTime}`;

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const secondsDeg = (360 / 60) * seconds;
  const minutesDeg = (360 / 60) * minutes;
  const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;

  if(hoursDeg > 180){
    selectors.timeOfDay.textContent = 'PM'
  }else{
    selectors.timeOfDay.textContent = 'AM'
  }

  selectors.seconds.style.transform = `rotate(${secondsDeg}deg)`;
  selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);




//  360 / 12 = 30; //Одна година
//  30 * 9 = 270 // кількість градусів о 9 годині


//  360 / 12 = 30; 

//  30 / 60 = 0.5 
//  0.5  * 50 = 25

//  270 + 25 = 295



(function(){

})()