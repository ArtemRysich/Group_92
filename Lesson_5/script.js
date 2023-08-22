// ****************Об'єкт**************** \\
// const user = {
//     // fullName: 'Alice User',
//     name: 'Alice',
//     age: 18,
//     // skills: ['HTML', 'CSS', 'JS'],
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     },
//     'full_name' : 'Alice User',
//     '1name': 'Test'
// }

// console.log(user.1name);

// ****************Звернення до властивостей об'єкта**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: true,
//         css: true,
//         react: false
//     },
// }
// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = 'name';

// console.log(user[objectKey]);
// console.log(user['name']);
// console.log(user.skills['react']);
// console.log(user['skills'].react);
// console.log(user['skills']['react']);

// ****************Зміна значення властивості**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);

// user.city = 'Odessa';
// user['age'] = 38;
// console.log(user);

// ****************Object.freeze**************** \\
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//   _name: "Alice",
//   city: "Odessa",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   set name(newName) {
//     // if (newName.length > 3) {
//     //   this._name = newName;
//     // }
//     return;
//   },
//   get name() {
//     return this._name;
//   },
// };
// user.name = "Kate";
// console.log(user.name);

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// Object.freeze(user.name);
// Object.freeze(user.skills);
// Object.freeze(user);
// user.name = 'Kate';
// // user.city = 'Lviv';
// user.skills.css = false
// console.log(user);

// ****************Методи об'єкта**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     sayHello(city, age) {
//         // console.log(city, age);
//         // console.log(arguments);
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// const admin = {
//     name: 'Admin',
//     sayHello: user.sayHello
// }
// user.sayHello('Lviv',12)
// admin.sayHello('Odessa',15)
// ****************Цикл for...in**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const admin = Object.create(user)
// admin.name = 'Mark'
// console.log(admin);
// // console.log(admin.name);

// for(const key in admin){
//     // console.log(key ,admin.hasOwnProperty(key));
//     if(admin.hasOwnProperty(key)){
//         console.log(key);
//         console.log(admin[key]);
//     }

// }

// ****************Метод Object.keys()**************** \\
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const admin = Object.create(user)
// console.log(Object.keys(admin));
// const keys = Object.keys(user);
// console.log(keys);
// for(const key of keys){
//     console.log(key,user[key]);
// }
// console.log(keys);

// ****************Метод Object.values()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// ****************Метод Object.entries()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
// //   const totalPrice = quantity * price;
//   //   const basket = {
//   //     name: product,
//   //     quantity,
//   //     price,
//   //     totalPrice: quantity * price,
//   //   };

//   //   return basket

//   return {
//     name: product,
//     quantity,
//     price,
//     totalPrice: quantity * price,
//   };
// }
// const result = createBasket("pizza", 3, 120)
// console.log(result);
// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket('aplle', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   const countPlayers = Object.keys(obj)?.length;
//   const values = Object.values(obj);
//   console.log(values);
//   let totalTime = 0;

//   for (const value of values) {
//     // console.log(value);
//     totalTime += value;
//   }
// //   const averageTime = totalTime / countPlayers
// // console.log(averageTime);
//   return `Count of players ${countPlayers}, average time ${totalTime / countPlayers}`

// const entries = Object.entries(obj)
// let totalTime = 0;

// for(const entry of entries){
//     // console.log(entry[1]);
//     totalTime += entry[1];
// }
// console.log(totalTime);
// return `Count of players ${entries.length}, average time ${totalTime / entries.length}`
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"], age: 0 },
  {
    name: "Oleksii",
    books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
    age: 26,
  },
];

function getUsers(arr, bookName) {
  // let users = '';
  const users = [];
  for (const user of arr) {
    if (user.books.includes(bookName)) {
      // console.log(user.name);
      // users += `${user.name}, `
      users.push(user.name);
    }
  }
  //   console.log(users);
  return users.join(", ");
}
// console.log();
const users = getUsers(friends, "Harry Potter");
// console.log(users);
// document.querySelector('body').textContent = users

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const user of arr) {
//     //exp 1
//     // if (user.age) { // 0
//     //   totalAge += user.age;
//     // }

//     // exp 2
//     // console.log(user.name, user.hasOwnProperty('age'));
//     // if(user.hasOwnProperty('age')){
//     //     totalAge += user.age;
//     // }

//     // exp 3
//     // console.log(user.name, 'age' in user);
//     if ("age" in user) {
//       totalAge += user.age;
//     }

//     // console.log(user);
//   }
//   return totalAge;
// }
// console.log(getTotalAge(friends));

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету

const hogvarts = {
  griffindor: [
    {
      name: "Harry",
      points: 17,
    },
    {
      name: "Hermiona",
      points: 19,
    },
    {
      name: "Ron",
      points: 14,
    },
  ],
  slizerin: [
    {
      name: "Draco",
      points: 17,
    },
    {
      name: "Goyl",
      points: 14,
    },
    {
      name: "Crabbe",
      points: 5,
    },
  ],
  getTotalPoints(faculty) {
    if (!this.hasOwnProperty(faculty)) {
      return "Not found";
    }

    let totalPoints = 0;

    for (const student of this[faculty]) {
      totalPoints += student.points;
    }
    // console.log(totalPoints);
    return totalPoints;
  },
  //   getUserList(facultyName) {
  //     if (!(facultyName in this)) {
  //       return "Not found";
  //     }

  //     const students = [];

  //     for (const student of this[facultyName]) {
  //       students.push(student.name);
  //     }

  //     return students.join(', ')
  //   },
};

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("qwerty"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(" ");
//   let longestWord = words[0];
//   const allWords = [];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   for (const word of words) {
//     if (word.length === longestWord.length) {
//       allWords.push(word);
//     }
//   }
//   return allWords;
//   // Change code above this line
// }

// console.log(findLongestWord("and Google do a HElllO roll WOORLD"));


const a = {
    name: 'a'
}

const b = a;
console.log(b === a);

const c = Object.create(a)


console.log(c === a);

