// const numbers = [42, 1234, 643, 1234, 6543, 224];

// function add(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     total += arr[i];
//   }

//   return total;
// }
// // debugger;
// console.log(add(numbers));

// let value = 10;

// const value = 10;

// let value;

// value = 10;
// value = 'Hello world'
// console.log(value);

// let value = 10;
// let value = 15;

// console.log(value);
// var value = 10

// var value;

// value = 10;
// console.log(value);
// value = 15;
// console.log(value);
// value = "hello world";
// console.log(value);

// if(true){
// // const value = 10;
// // let value = 'hello'
// var value = 15;
// }
// console.log(value);

// function foo() {
//   var value = 10;
// }

// console.log(value);

// const user = {
//   name: "User",
//   skills: {
//     js: { value: true },
//     html: false,
//   },
//   sayHello() {
//     console.log(this.name);
//   },
// };

// const admin = JSON.parse(JSON.stringify(user));
// const admin = Object.assign({}, user);
// const admin = {...user}
// console.log(admin === user);
// console.log(admin.skills === user.skills);
// admin.skills.js = "HEllo";
// console.log('admin',admin);
// console.log('user',user);
// admin.skills.js.value = false
// console.log(admin.skills.js === user.skills.js);
// admin.name = 'Test user'
// console.log(admin);

// console.log(_.cloneDeep);
// console.log(add(5, 5));

// function add(a, b) {
//   return a + b;
// }

// console.log(add(5,5));
// const add = function(a, b){
//     return a + b;
// }

// const arr = (a, b) => a + b
// console.log(arr(5,5));

// -----------------------Рекурсія---------------------
// const numbers = [1, 2, [4, 12, [56, 12, [54]]]];

// function deepAdd(arr) {
//   let total = 0;

//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       total += deepAdd(item);
//     } else {
//       total += item;
//     }
//   }

//   return total;
// }
// console.log(deepAdd(numbers));
// -------------------------------------------------------------

// const user = {
//   name: "user",
//   sayHello: () =>  {
//     console.log(this);
//   },
// };
// user.sayHello()

// function sayHello(){
//     console.log(this);
// }
// sayHello.call(user)
// sayHello.apply(user)
// const copy = sayHello.bind(user);
// copy()

// "use strict";

// const sayHello = () => {
//   console.log(this);
// };
// sayHello()
// function sayHello() {
//   console.log(this);
// }
// sayHello()
// const sayHello2 = function () {
//   console.log(this.age);
// };
// sayHello2()

// const user = {
//   age: 22,
// };

// const admin = Object.create(user);

// console.log('age' in admin); // true
// admin.age = 18
// console.log(admin);
// console.log(admin.hasOwnProperty('age'));

// class User {
//   #name;
//   static role = {
//     user: 'USER',
//     admin: 'ADMIN'
//   }

//   static sayHello(){

//   }
//   constructor(age, name) {
//     this.#name = name;
//     this.age = age;
//   }
//     sayHello() {
//       console.log(this.#name);
//     }
//   #sayHello() {
//     console.log(this.#name);
//   }
// }

// const instance = new User(22, "Test user");
// console.log(instance);
// // instance.#name = "Test";
// console.log(instance);
// instance.sayHello();

// ПЕРЕРВА ДО 21.20

// function add(a, b){
// console.log(a, b);
// }
// add(5, 5)

// const arr = [1,2,4,5];
// console.log(arr);
// const user = {
//   name: "Test",
//   age: 14,
// };

// for (const key in user) {
// //   console.log(key);
// //   console.log(key, " ", user[key]);
// }

// const numbers = [1, 2, 3, 4];

// for(const number of numbers){
//     console.log(number);
// }

// const value = 10;

// if (true) {
//     const value = 5;
//   if (true) {
//     // console.log(value);
//   }
// }
// console.log(value);

// let f = function (x) {
//   alert(x);
// }
// function f(x) {
//   alert(x);
// }

// (function () {
//     f(10)
// }());

// function action(a, b, callback) {
//     const val1 = a + 15;
//     const val2 = b + 15;
// // console.log(callback);
//     console.log(callback(val1, val2));

// }

// action(12, 15, (a, b) => a + b);
// action(12, 15, (a, b) => a * b);
// action(12, 15, (a, b) => a / b);

// let value = 0;

// value &&= 2; // value = value && 2

// let value = 0;

// value ||= 2; // value = value || 2

// let value = null;

// value ??= 2; // value = value ?? 2

// console.log(value);

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
    //   console.log(product.price);
      return product.price;
    }
  }
  console.log(productName);
  return null; //(як вивести в консоль цей return)
}

// Change code above this line
// console.log(getProductPrice("Radar"));
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
console.log(getProductPrice("Engine"));
