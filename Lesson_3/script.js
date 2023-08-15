// Що таке масив
// const array = ["Hello world", null, true, 15];
// console.log(array.length);

// Перевірка масиву
// console.log(typeof 1);
// console.log(typeof 'hello');
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray({})); // false

// console.log(Array.isArray(["Hello world", null, true, 15]));

// const array = ["Hello world", null, true, 15];
// // Перший та останій елемент масиву
// const firstEl = array[0];
// // console.log(firstEl);
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];
// console.log(lastEl);

// Перебір масиву
// const array = ["Hello world", null, true, 15];

// Цикл for
// for (let i = 0; i < array.length; i+=1){
//     // let item = array[i]

//     if(array[i] === null){
//         array[i] = 'I love JS'
//     }
//     console.log(item);
// }

// console.log(array);

// const array = ["Hello world", null, true, 15];
// // Цикл for of

// for(const item of array){
//     console.log(item);
// }

// Присвоєння за посиланням та за значенням
// Примітивні типи даних - за значенням

// let a = 'Hello world';
// let b = a; // 'Hello world'

// // console.log(a === b);

// b += ' 1'
// console.log(a === b);
// console.log(a);
// console.log(b);

// Складні типи даних - за посиланням

// const a = [1, 2, 3]
// const b = a;

// b[0] = 'hello world'
// console.log('b => ',b);
// console.log('a => ',a);

// const array = [1, 2, ["a", "b"], 4];

// for(let i = 0; i < array.length; i+=1){
//     // let item = array[i]; // 2

//     // if(item === 2){
//     //     item = 'hello'
//     // }
//     let item = array[i];

//     if(Array.isArray(item)){
//         console.log(item);
//         item = 'hello'
//     }
// }

// console.log(array);

// Методи для роботи з масивом

// push pop
// const numbers = [1, 2, 3];

// console.log(numbers.push(1,2,3));
// console.log(numbers.pop());
// console.log(numbers);

// unshift shift
// console.log(numbers.unshift('a','b'));
// console.log(numbers.shift());
// console.log(numbers);

// const numbers = [1, 2, 3];

//slice
// const copy = numbers.slice(0,2) // [1,2,3]
// console.log();
// console.log(numbers);

// splice
// const result = numbers.splice(1,1)
// console.log(result); // [2]
// console.log(numbers);

// const result = numbers.splice(1, 0, "hello", "world");
// console.log(result); // [2]
// console.log(numbers);

//indexOf

const values = ["a", "b", "c", "b"];

// const idx = values.indexOf("b");
// console.log(idx);

//includes
// const result = values.includes('b')
// console.log(result);

// concat

// const result = values.concat(['Hello', 'world'], [1,2,3])
// console.log(result);

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, "Hello", null, 42, false];

// Приклад - 1
// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }
// console.log(arr);

// Приклад - 2
// const arr = [3, "Hello", null, 42, false];
// for(let i = arr.length -1; i >= 0; i-=1){
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1)) {
//       // console.log(`${arr[i]} - ${arr.includes(arr[i])}`);
//       if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//       }
//     }
//   }

//   return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 1, 1, 1, 17, 19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

const users = [
  "Artem",
  "Anna",
  "Larisa",
  "Maksim",
  "Svetlana",
  "David",
  "Roman",
  "Olga",
];

// console.table(users);
const men = ["Artem", "Maksim", "David", "Roman"];

// function getWomen(users, men) {
//   const women = [];
//   for (const user of users) {
//     if (!men.includes(user)) {
//       // !false => true  !true => false
//       women.push(user);
//       //   console.log(user);
//     }
//   }
//   return women;
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR);

// console.log(result);

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   const prevEl = numbers[i - 1];

//   if (currentEl - prevEl !== 1) {
//     numbers[i] = prevEl + 1;
//   }
// // if(currentEl <= prevEl){
// //     numbers[i] = prevEl + 1;
// // }
// }
// console.log(numbers);

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//     let result = '';
//   switch (arr.length) {
//     case 0:
//         result = "No one likes this";
//         break;
//     case 1:
//         result = `${arr[0]} likes this`;
//         break;
//     case 2:
//         result = `${arr[0]} and ${arr[1]} like this`;
//         break;
//     case 3:
//         result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//         break;
//     default:
//         result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//   }
//   return result;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// const array = [array[1], 1, 2]
// console.log(array);

// const str = "Hello World";

// console.log(str.toLowerCase().replaceAll("", "-"));
// console.log(str.toLowerCase().split('').join('-'));
