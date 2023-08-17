// Function expression

const fn = function (valA, valB) {
  // let valA = 4
  // let valB; // undefined
  return valA + valB;
};
// console.log(fn(4, 5));
// console.log(fn(4));

// Function declaration
// hoisting https://codeguida.com/post/199

// console.log(add(4, 5));

// function add(valA, valB) {
//   return valA + valB;
// }

// Псевдомасив arguments

// function add() {
//     // console.log(arguments);
//     // const arr = Array.from(arguments)
//     const arr = [...arguments]
//     console.log(arr);
//     let total = 0;
//     for(let i = 0; i < arguments.length; i+=1){
//         // console.log(arguments[i]);
//         total +=arguments[i]
//     }
//     return total
// //   return valA + valB + valC + valD + valE;
// }
// console.log(add(4,5,6,7,8));
// console.log(add(4,5,6));

// Області видимості, присвоєння за посиланням та значенням

// // Example 1
// let someValue = 4;

// if (true) {
//     someValue = 11;
// }

// console.log(someValue);

// // Example 2
// let someValue = 4;

// if (true) {
//     let someValue = 11;
// }

// console.log(someValue);

//// Example 3
// let someValue = 4;

// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }

// console.log(someValue);

// // Example 4
// let someValue = 2;

// function checkScope(someValue) { //
//     someValue = 45;
//     return someValue;
// }

// console.log(`result ${checkScope(someValue)}`);

// console.log(someValue);

// // Example 5
// let someValue = 2;

// function checkScope() {
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);

// // Example 6
// let someValue = 2;

// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope()

// console.log(someValue);

// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     // let arr = someArray
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);

// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     console.log('before', arr === someArray);
//     arr = Array.from(arr)
//     console.log('after', arr === someArray);
//     arr.splice(0,3)
//     console.log(arr);
// }

// checkScope(someArray)

// console.log(someArray);

// function check() {
//     for(const arg of arguments){
//        console.log(toBoolean(arg));
//     }
// }
// check(1, null, 2, 3, "", 0);

// function toBoolean(value){
//     return Boolean(value)
// }

// Перерва до 20.55

// Практика

// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, targetValue) {
//   let message = "Success ✅";

//   for (const value of arr) {
//     if (value <= targetValue) {
//       message = "Fail ❌";
//       return message;
//     }
//   }

//   return message;
// }

// console.log(checkValue(numbers, 12));
// console.log(checkValue(numbers, 10));

// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементів в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(data, count) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += count) {
//     const combination = arr.slice(i, i + count);
//     result.push(combination);
//   }
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
// const values = dimensions.split(' ');
// // console.log(Number(values)); // NaN
// const firstValue = Number(values[0]); // + values[0]
// const secondValue = Number(values[1]);
// console.log(firstValue);
// console.log(secondValue);

// // 'a' + 'a'// Бінарний
// // + 'a'    // Унарний

// return firstValue * secondValue;
// // console.log(typeof firstValue);
// // console.log(secondValue);
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));

// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function addCourse(name) {
//   if (courses.includes(name)) {
//     alert("Ви вже маєте такий курс!");
//     // return "Ви вже маєте такий курс!"
//   } else {
//     courses.push(name);
//   }
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function removeCourse(name) {
//   const idx = courses.indexOf(name); //'React' // -1
// console.log(idx);
//   if (idx === -1) {
//     return "Курс із таким ім`ям не знайдено";
//   }

// // if (!courses.includes(name)) {
// //     return "Курс із таким ім`ям не знайдено";
// //   }
//   courses.splice(idx, 1);
// }
// removeCourse("React");
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'

// const courses = ["HTML", "CSS", "Express", "JavaScript", "React", "PostgreSQL"];
// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName); // -1
//   const inCourses = courses.includes(newName); // false

//   if (idx !== -1 && !inCourses) {
//     // courses.splice(idx, 1, newName);
//     courses[idx] = newName;
//   } else if (inCourses) {
//     return "Ви вже вивчаєте такий курс";
//   } else {
//     return "Курс із таким ім'ям не знайдено";
//   }
// }

// updateCourse("HTML", "NestJS");
// console.log(updateCourse("qwerty", "NestJS"));
// console.log(updateCourse("qwerty", "qwe"))
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// const numbers = [1, 2, 3, 4, 5];



// numbers.length = 0
// console.log(numbers);
// numbers = 1




// numbers.push('hello')

// console.log(numbers);
