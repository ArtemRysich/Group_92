// const items = [1, 2, 3, 4, 5];

// function fn(arr) {
//   arr[0] = 999;
// }
// fn(items);
// console.log(items);

// const items = [1, 2, 3, 4, 5];

// function fn(arr) {
//   arr = [...arr];
//   arr[0] = 999;
// }
// fn(items);
// console.log(items);
// console.log('items',items);
// const items = [2, 3, 5, 1];
// const result = [...items].sort((a, b) => a - b);
// console.log(result);

// Тестовий масив для теоретичного блоку

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];
// console.log(users);
// ********map******** \\
// const names = [];
// for (const user of users) {
//   names.push(user.name);
// }
// console.log(names);

// const names = users.map(function(){

// })

// const names = users.map((user)=> user.name);
// const names = users.map(({name})=> name);
// const names = users.map((user) => {
//     return user.name
// })
// console.log(names);

// ********flatMap******** \\
// const numbers = [[1], [2], [3, [4]]]; => [1,2,3]
// const skills = users.map(user => user.skills)
// const skills = users.flatMap(user => user.skills)
// console.log(skills);

// const arr1 = [0, 1, 2, [3, [4, [45]]]];

// const result = arr1.flatMap(item => item)
// console.log(result);

// ********flat******** \\
// const arr = [0, 1, 2, [3, [4, [45]]]];
// function findDepth(arr) {
//   let depth = 0;

//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       depth += 1;
//       depth += findDepth(item);
//     }
//   }
//   return depth;
// }
// console.log(findDepth(arr));
// const result = arr1.flat(50)
// console.log(result);

// ********filter******** \\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const result = users.filter(user => user.age > 30)
// const result = users.filter(({age}) => age >= 40)
// const result = users.filter(({skills}) => skills.includes('JavaScript') )
// console.log(result);

// ********find******** \\

// const result = users.find(({skills}) => skills.includes('Java'))
// const result = users.find(({skills}) => skills.includes('PHP'))
// console.log(result);

// ********findIndex********\\

// const arr = [4, 5, 63, 4];
// console.log(arr.indexOf(4));

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const idx = users.findIndex(({id})=> id === 55)
// console.log(idx);
// ********some********\\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// const isKnow = users.some(({skills})=> skills.includes("Python"))
// const isKnow = users.some(({skills}) => skills.includes("PHP"))
// console.log(isKnow);
// ********every********\\

// const isKnow = users.every(({skills})=> skills.includes("Python"))
// console.log(isKnow);

// const isAdult = users.every(({age})=> age >= 18)
// console.log(isAdult);

// ********sort********\\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 6, name: "alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];
//age
// const result = users.sort((a, b) => b.age - a.age);
// console.log(result);
//name
// const result = users.sort((a, b) => b.name.localeCompare(a.name));
// console.log(result);

// a - current element ; b - next element
// const result = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(result);

// const numbers = [4, 11, 6, 2, 12, 7, 1, 5];

// console.log(numbers.sort((current,next) => current - next));
// console.log(numbers.sort());
// ********reduce********\\
const users = [
  { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
  { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
  { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
  { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
  { id: 6, name: "alice", age: 32, skills: ["Python", "Data Analysis"] },
  { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
];

// const result = users.reduce((acc, {age}) => {
//   return acc + age;
// }, 0);
// console.log(result);

// const names = users.reduce((acc, { name, age }) => {
//   if (age >= 30) {
//     acc.push(name);
//   }
//   return acc;
// }, []);
// console.log(names);
// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] }, //  { name: "John", average: 85 }
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//   const result = arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, item) => acc + item, 0);

//     const obj =  {
//         name, //name : name
//         average: Math.round(total / grades.length),
//       };
//     return obj
//   });

//   return result;
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   return arr.filter(({ age }) => age > 20)
//             .map(({ name }) => name);
// }
// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   const book = arr.find(({ title: titleBook }) => titleBook === title);

// //   || 0,'',null,NaN,undefined, false
// //   ?? null, undefined

//   return book ?? 'Not found';
// }

// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software"
//   )
// );
// console.log(getBook(books, "qwerty"));

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 }, // 20 * 3 = 60
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];

// function getTotal(arr) {
//   return arr.reduce((acc, product) => {
//     const totalPrice = product.price * product.quantity;
//     return acc + totalPrice;
//   }, 0);

// // return arr.reduce((acc, {price, quantity}) => acc + price * quantity ,0)
// }
// console.log(getTotal(products));

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function sortDesc(arr) {
//     return [...arr].sort((current, next) => next.year - current.year)
// }
// console.log(sortDesc(books));

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
const products = [
  { id: 2, name: "Banana", price: 0.99 },//
  { id: 1, name: "Apple", price: 1.99 },//
  { id: 3, name: "Orange", price: 2.49 },//
  { id: 4, name: "Grapes", price: 3.99 },//
];

// function getProducts(arr) {
//   const products = arr
//     .filter(({ price }) => price < 0.5)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));

//   return products.reduce(
//     (acc, product, idx) => acc + `${idx + 1} - ${product} \n`,
//     products.length ? "Product list: \n" : "Products not found"
// );
// }
// console.log(getProducts(products));

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа

// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }
// const str = "absdabsrgbadgtdswwbetflg";
// const obj = {};

// for (let i = 0; i < str.length; i += 1) {
//   if (obj.hasOwnProperty(str[i])) {
//     obj[str[i]] += 1;
//   } else {
//     obj[str[i]] = 1;
//   }
// }
// console.log(obj);

// const obj = str.split("")
// .reduce((acc, key) => {
//   if (key in acc) {
//     acc[key] += 1;
//   } else {
//     acc[key] = 1;
//   }

//   return acc
// }, {});
// console.log(obj);
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    // { name: 'blablabla', price: 200}
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((book, index) => allGenres.indexOf(book) === index);
//    // Не розумію!!! логіку як працює ця строка покроково, як вона відсікає унікальні елементи
//   console.log(allGenres);
//   console.log(uniqueGenres);

// const arr = ["a", "b", "a", "c", "b", "a"];

// const result = arr.filter((el,idx,arr) => arr.indexOf(el) === idx)
// А як вірно прописати в проміжку років? є така таска подібна в авточеку і мав з цим трабл. Типу age >=18 || <=30 - так не працює в стрілках, а ось так лише працює age >=18 || age <=30 Чому так?

// (age >= 18) && (age <= 30);
