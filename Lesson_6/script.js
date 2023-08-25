"use strict";
// ******************************Деструктуризація масива***************************************\\
const arr = [1, "a", "b", 4, 5];
// const first = arr[0];
// const second = arr[1];

// const [first, second, third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

// const [,,, first] = arr;
// console.log(first);
// const value = arr[100]

// *******Деструктуризація об'єкта********************\\
// const skills = ['jump', 'run'];
// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// const {skills : userSkills} = user;

// console.log(skills);
// console.log(userSkills);

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// console.log(name);

// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// const user1 = {
//     name: 'Test name',
//     // skills: {
//     //     html: true,
//     //     js: true
//     // }
// }

// console.log(user.skills.js);

// const {js} = user.skills

// const {skills : {js = false, css : userSkillCss = false} = {}} = user1;
// console.log(js);
// console.log(userSkillCss);

// *********************Деструктуризація об'єкта в параметрах функції******************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// *********Без деструктуризації
// function getUserName(obj) {
//     console.log(`Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`);
// }

// getUserName(user)

// *********З деструктуризацією

// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// function getUserName({ name, skills: { html, css, js } }) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

// getUserName(user);

// *************************Деструктуризація об'єкта в циклі***********************************\\

const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mark" }];

// ********Без деструктуризації*******
// const names = [];

// for (const user of users) {
//     names.push(user.name)
// }

// console.log(names);

// ********З деструктуризацією*********
// const names = [];

// for (const {name} of users) {
//     names.push(name)
// }

// console.log(names);

// *************************Операція rest та spread********************************\\

// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [,,first,second, third, ...args] = numbers; // rest
// console.log(numbers);
// console.log(args);

// ************Операція rest та spread в функціях********************************\\

// const numbers = [1, 2, 3];

// function foo(...props){//rest // [1,2,3]
// console.log(props);
// }
// foo(1,2,3)
// foo(...numbers)// spread

// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }

// foo(...names) // foo('Alice', 'Kate', 'Emma')// spread

// function foo(first, second, ...args) { //rest
//     console.log(first);
//     console.log(second);
//     console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     },
//     car: 'Audi'
// }

// function foo({ name, skills: { html, ...props }, ...props2}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)

// Перерва до 21.15

// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//   id: 1,
//   username: "harry_potter",
//   profile: {
//     name: "Harry",
//     surname: "Potter",
//     age: 25,
//   },
// };
// const {
//   username,
//   profile,
//   profile: { name, surname },
// } = user;
// console.log(username);
// console.log(profile);
// console.log(name);
// console.log(surname);
// Деструктуризація об'єкта для отримання окремих змінних
// const ......

// Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };

// function displayProductInfo({
//   name,
//   price,
//   category,
//   details: { brand, color, weight } = {},
// } = {}) {
//   console.log(`Назва товару: ${name}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log("Деталі:");
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);

// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   const profile = {
//     id: Date.now(),
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
//   return profile;
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// function transformUsername(obj) {
//   const keys = Object.keys(obj);
//   console.log(keys);
//   const profile = {};
//   let fullName = [];
//   for (const key of keys) {
//     if (key === "firstName" || key === "lastName") {
//       fullName.push(obj[key]);
//     } else {
//       profile[key] = obj[key];
//     }
//   }

//   profile.fullName = fullName.join(" ");
//   return profile;
// }

// function transformUsername(obj) {
//   const firstName = obj.firstName;
//   const lastName = obj.lastName;
//   const fullName = `${firstName} ${lastName}`;

//   delete obj.firstName;
//   delete obj.lastName;

//   obj.fullName = fullName;

//   return obj;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter({sideA, sideB, sideC, sideD} = {}) {
//   const perimeter = sideA + sideB + sideC + sideD;
//   return perimeter;
// }

// const perimeter = calculateHousePerimeter({
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15,
// });
// console.log(calculateHousePerimeter());
// console.log(`Периметр будинку: ${perimeter}`);

// function fn() {
//   console.log(this);
// }
// fn();

//TODO spread: створення нового об'єкта
// Операція ... (spread) дозволяє розподілити властивості довільної кількості об'єктів в один новий.
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// По суті це аналог такого запису:
// const fouth = {
//     propA: first.propA,
//     propB: first.propB,
//     propC: second.propC
// }
// console.log(fouth);

// А як воно влаштовано під капотом насправді ???

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// const copy = {...user}

// console.log(copy.skills === user.skills);

// const test = '[1, 2, 3]';

// console.log(Array.isArray(test));
