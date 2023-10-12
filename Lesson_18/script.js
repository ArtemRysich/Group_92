//*********Приклад роботи синхронного та асинхронного JS**************\\

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve("C").then((value) => console.log(value));

// console.log("D");

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ******Мікро процеси***** \\
// Promise
// Observer

// ******Макро процеси****** \\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame

//*********Приклад роботи синхронного та асинхронного JS**************\\
// Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.reject("C").then((value) => console.log(value)).catch(err => console.log(err));
// Promise.resolve("D").then((value) => console.log(value));

// setTimeout(() => console.log("E"), 0);

// console.log("F");

//*************** Promise *******************\\

// ****Створення Promise**** \\

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const random = Math.random();
//     if (random > 0.5) {
//       res({ name: "Alice" });
//     } else {
//       rej("😥");
//     }
//   }, 1500);
// });
// console.log(promise);

// ****Обробка Promise**** \\
// promise
//   .then(
//     (value) => {
//       console.log(value);
//       value.city = "Lviv";
//       return value;
//     }
//   )
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(()=> {
//     console.log('after all');
//   });

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по черзі має з'являтись смайлик з затримкою в 1 секунду ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами в якому кожен з них буде відповідати за своє віконце, після чого оброби даний масив за допомогою методу Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт автоматично визначав чи гравець переміг, чи ні. Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
// Виводить модальне вікно з повідомленням про статус гри ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game" поле має очищатись, а гра починатись з початку.

const elements = {
  startBtn: document.querySelector(".js-start"),
  container: document.querySelector(".js-container"),
};

elements.startBtn.addEventListener("click", handlerStart);

function handlerStart(evt) {
  evt.target.disabled = true;
  const promises = [...elements.container.children].map(createPromise);
  Promise.allSettled(promises).then((items) => {
    items.forEach((item, i) => {
      const child = elements.container.children[i];

      child.textContent = "";

      setTimeout(() => {
        child.textContent = item.value ?? item.reason;

        if (items.length - 1 === i) {
          const instance = basicLightbox.create(`
            <h1>${isWinner ? "Winner" : "Loser"}</h1>
        `);
          instance.show();
          evt.target.disabled = false;
        }
      }, 1000 * (i + 1)); // 1000 - 1 cек
    });

    const isWinner =
      items.every(({ status }) => status === "fulfilled") ||
      items.every(({ status }) => status === "rejected");
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();
    if (random > 0.5) {
      res("🤑");
    } else {
      rej("🥵");
    }
  });
}
