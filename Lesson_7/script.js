// *********************************Стрілочна функція (Arrow function)****************************************\\

// JSDoc - comment коротка відомість про функцію яка допомагає іншому розробнику швидше зрозуміти що робить, приймає та повертає функція.
// Для створення JSDoc - comment на рядку перед створеною функціює натискаємо /**
// Далі описуємо нашу функцію.

// function declaration

/**
 * Buy product, log message with purchase info
 * @param {String} productName
 * @param {Number} productQty
 * @param {Number} price
 */
// function buyProduct(productName, productQty, price) {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// }

// buyProduct("apple", 10, 35);

//function expression

// const buyProduct = function (productName, productQty, price){
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// }
// buyProduct("apple", 10, 35);

// arrow function

// const buyProduct = (productName, productQty, price) => {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// };
// buyProduct("apple", 10, 35);

// ***********Неявне повернення******** \\

// Явне повернення
/**
 * Get product total price
 * @param {Number} qty - quantity items
 * @param {Number} price - price per item
 * @returns {Number} - total price
 */
// const getTotalPrice = (qty, price) => {
//     const result = qty * price;
//   return result;
// };
// console.log(getTotalPrice(3, 150));

// Неявне повернення

// const getTotalPrice = (qty, price) => qty * price;

// console.log(getTotalPrice(3, 150));

// *****Можливість не огортати параметри в круглі дужки якщо параметр один*****\\

// Один параметр з дужками
/**
 * Check user strong password 😂
 * @param {String} password
 * @returns {Boolean}
 */
// const checkPassword = (password) => password === "qwerty111";

// console.log(checkPassword('qwerty111'));
// console.log(checkPassword('qwerty222'));
// Один параметр без дужок

// const checkPassword = password => password === "qwerty111";

// console.log(checkPassword('qwerty111'));
// console.log(checkPassword('qwerty222'));

// const checkPassword = ({password}) => password === "qwerty111";

// console.log(checkPassword({ password: "qwerty111" }));
// console.log(checkPassword({ password:"qwerty222" }));

// ***********Відсутність псевдомасиву arguments******** \\

// function declaration

/**
 * Log items
 */
// function getProductList(first, second) {
//   console.log(arguments);
// //   for (const product of arguments) {
// //     console.log(product);
// //   }
// }

// getProductList("Apple", "Banana", "Orange", "Mango");
// getProductList("Apple", "Banana", "Orange", "Mango", "Watermelon");

// arrow function
// const getProductList = ( ...args) => {
//     // console.log(arguments);
//     console.log(args);
// }

// getProductList("Apple", "Banana", "Orange", "Mango");
// getProductList("Apple", "Banana", "Orange", "Mango", "Watermelon");

// const getProductList = (first, second, ...args) => {
//     // console.log(arguments);
//     console.log(args);
// }

// getProductList("Apple", "Banana", "Orange", "Mango");
// getProductList("Apple", "Banana", "Orange", "Mango", "Watermelon");

// **************************************Callback function*********************************************\\

// *******Callback функція у вигляді посилання на функції*****\\
// function logResult(a, b, callback) {
//     // console.log(callback);
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, add)
// logResult(4, 5, sum)

function add(a, b) {
  return a + b;
}

// function sum(a, b) {
//     return a * b;
// }

// ******************Інлайнова Callback функція******************\\
// function logResult(a, b, callback) {
//     // console.log(callback);
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, (a, b) => a + b)
// logResult(4, 5, (a, b) => a * b)
// logResult(4, 5, (a, b) => a - b)
// logResult(4, 5, (a, b) => a / b)
// logResult(4, 5, (a, b) => a ** b)
// logResult(4, 5, (a, b) => a % b)

// ************************************** forEach *********************************************\\
// const products = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];

// Цикл for
// for (let i = 0; i < products.length; i += 1) {
//     const product = products[i];

//     console.log(`${i + 1} - ${product}`);
// }

// console.log('--------------------------------');
// // forEach
// products.forEach((product, idx) => console.log(`${idx + 1} - ${product}`))
// products.forEach(function (product, idx) {
//     console.log(`${idx + 1} - ${product}`);
//   });

// function logItem(product, idx) {
//   console.log(`${idx + 1} - ${product}`);
// }

// products.forEach(logItem);

// function customForEach(arr, callback){
//     for(let i = 0; i< arr.length; i+=1){
//         callback(arr[i], i, arr)
//     }
// }

// customForEach(products, (product, idx) => console.log(`${idx + 1} - ${product}`));

// Перерва до 21.05

// ******************************************* Практика **************************************************\\

// Task - 1
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({ price, quantity }) {
//     console.log(`Product total price ${price * quantity}`);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Task - 2
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
//
// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції
// callback
// function each(arr, action) {
//   const items = [];

//   //   arr.forEach((elem) => {
//   //     const result = action(elem);
//   //     items.push(result);
//   //   });
//   arr.forEach((number) => items.push(action(number)));

//   return items;
// }
// function each(arr, action) {
//     return arr.map((number) => action(number))
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// Task-3
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.

// const products = [
//   {
//     id: 1,
//     name: "Телефон",
//     price: 10000,
//     description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//   },
//   {
//     id: 2,
//     name: "Ноутбук",
//     price: 25000,
//     description: "Легкий та потужний ноутбук для роботи та розваг.",
//   },
//   {
//     id: 3,
//     name: "Планшет",
//     price: 8000,
//     description: "Компактний планшет для перегляду контенту.",
//   },
// ];

// function getProductDetails(id, success, error) {
//   for (const product of products) {
//     if (product.id === id) {
//         success(product);
//        return;
//     }
//   }
//   error(id)
// }

// getProductDetails(3, handleSuccess, handleError);
// getProductDetails(44, handleSuccess, handleError)

// function handleSuccess(message) {
//   console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//   console.log(`❌ Error! Product with ${productId} id not found`);
// }

// Task-4
// Напишіть функцію calculateAveragePrice, яка приймає на вхід масив об'єктів, що представляють товари, та колбеки onSuccess та onError.
// Функція повинна обчислювати середню ціну товарів у масиві та викликати колбек onSuccess, передаючи йому отриману середню ціну як аргумент.
// Якщо масив товарів порожній, функція повинна викликати колбек onError, передаючи йому рядок "No products found".
// Для форматування середньої ціни використовується метод toFixed(2), щоб обмежити число до двох десяткових знаків.

// const products = [
//   { name: "Apple", price: 0.99 },
//   { name: "Banana", price: 0.49 },
//   { name: "Orange", price: 0.79 },
//   { name: "Mango", price: 1.99 },
// ];

// function calculateAveragePrice(products, onSuccess, onError) {
//   //  !0 => !false => true
//   if (!products.length) {
//     //products.length === 0
//     return onError("No produts found");
//   }
//   let total = 0;
//   products.forEach(({ price }) => (total += price));

//   onSuccess(total / products.length)
// }

// const onSuccess = (averagePrice) =>
//   console.log("Average price - ", averagePrice.toFixed(2));

// const onError = (errorMessage) => console.log("Error: ", errorMessage);

// calculateAveragePrice(products, onSuccess, onError);

// const singl = {
//   instance: null,
//   createElem(value) {
//     this.instance = value;
//     return this.instance;
//   },
//   getElem(value) {
//     return this.instance ? this.instance : this.createElem(value)
//   },
// };
// console.log(singl.getElem(10));
// console.log(singl.getElem(20));
// console.log(singl.getElem(30));
// console.log(singl.getElem(40));

function countProps(object) {
    // Change code below this line
    // let propCount = 0;
  
    // for (const key in object) {
    //   if (object.hasOwnProperty(key)) {
    //     propCount += 1;
    //   }
    // }
  
    // return propCount;
    return Object.keys(object).length
    // Change code above this line
  }
  