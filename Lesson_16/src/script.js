// *********** localStorage *************** \\
// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// // *****Збереження в LS***** \\

// localStorage.setItem(LS_KEY, JSON.stringify(names));

// localStorage.setItem('user data', JSON.stringify({name: 'Test user'}))

// // *****Читання з LS***** \\

// const value = localStorage.getItem(LS_KEY);
// console.log(typeof value);
// console.log(JSON.parse(value));

// *****Видалення з LS***** \\

// localStorage.removeItem(LS_KEY)

// *****Очищення LS******* \\

// localStorage.clear()

// ***Чому варто завжди використовувати метод JSON.stringify***\\

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// localStorage.setItem(LS_KEY, names);
// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

// ***LS не може зберігати функції в жодній з їх інтерпретацій***\\.

const LS_KEY = 'my function';

// function add(a, b) {
//     return a + b;
// }
// console.log(add);
// localStorage.setItem(LS_KEY, JSON.stringify(add))
// console.log(localStorage.getItem(LS_KEY));

// const calculator = {
//     a: 5,
//     b: 10,
//     add() {
//         return this.a + this.b
//     }
// }

// localStorage.setItem(LS_KEY, JSON.stringify(calculator))
// console.log(JSON.parse(localStorage.getItem(LS_KEY)));

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     sessionStorage.setItem('test key', 'Hello world')
// })

// try {
//   console.log(value);
// } catch (e) {
//   console.log(e);
// }

// console.log('after error');

// const names = ['Alice', 'Kate', 'Emma'];
// localStorage.setItem('Array of names', JSON.stringify(names));

// try {
//   const names = localStorage.getItem('Array of names');
//   const namesToArray = JSON.parse(names) ?? [];
//   console.log(namesToArray);
//   namesToArray.forEach(item => console.log(item));
// } catch (e) {
//   console.log(e);
// }

// const names = localStorage.getItem('Array of names');
// const namesToArray = JSON.parse(names) ?? [];
// console.log(namesToArray);
// namesToArray.forEach(item => console.log(item));

// *************Практика*************** \\
// Для практичного завдання використаємо збірку Parcel та ES6 модулі
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Home

import { createMarkup } from './templates/templatePLP';
import instruments from './products.json';

const PRODUCT_LS_KEY = 'checkout';
const selectors = {
  container: document.querySelector('.js-list'),
};

selectors.container.insertAdjacentHTML('afterbegin', createMarkup(instruments));

selectors.container.addEventListener('click', handlerAdd);

function handlerAdd(evt) {
  if (!evt.target.classList.contains('js-add')) {
    return;
  }

  const product = evt.target.closest('.js-product');
  const productId = Number(product.dataset.id);
  const currentProduct = instruments.find(({ id }) => id === productId);
  const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
  const idx = products.findIndex(({ id }) => id === productId);

  if (idx !== -1) {
    products[idx].qty += 1;
  } else {
    currentProduct.qty = 1;
    products.push(currentProduct);
  }

  localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products));
}
