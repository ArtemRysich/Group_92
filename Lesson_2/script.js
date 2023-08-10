https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/


/***** Інструкція if та її варіації *****/
// let value = 'Hello world';
// if (value === 10) { //=> false
//     console.log('condition true', '😎');
// }

// if (value) {
//   console.log("condition true", "😎");
// } else {
//   console.log('condition false', '😥');
// }

// 1 - ''
// 2 - 0
// 3 - NaN
// 4 - null
// 5 - undefined
// 6 - false

// let value = 12;
// if (value > 7) { // true
//   console.log("value 7");
// } else if (value > 8) {
//   console.log("value 8");
// } else if (value > 9) {
//   console.log("value 9");
// } else {
//   console.log("another value ");
// }

/***** Інструкція switch *****/
// const name = prompt('What your name ?');
// switch (name) {
//   case "Kate":
//     console.log(`Value Kate`);
//     break;
//   case "Ivan":
//     console.log(`Value Ivan`);
//     break;
//   case "Alice":
//     console.log(`Value Alice`);
//     break;
//   default:
//     console.log("Default value");
// }

/***** Тернарний оператор *****/

// condition ? true : false

// const value = 17;
// let message = value > 15 && value < 20 ? 'в діапазоні від 15 до 20' : 'спробуйте ще';
// console.log(message);

// let message = "спробуйте ще";

// if (value > 15 && value < 20) {
//   message = "в діапазоні від 15 до 20";
// }

// console.log(message);

/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let

// let number = 10;

// if (true) {
//   number = 22;
//   if (true) {
//     number = 35;
//   }
// }
// console.log(number);

// let number = 10;

// if (true) {
//   if (true) {
//     number = 35;
//   }
//   number = 42
// }
// console.log(number);

// let number = 10;

// if (true) {
//     let number = 1;
//   if (true) {
//     number = 35;
//   }
//   number = 42
// }
// console.log(number);

// let number = 10;

// if (true) {
//   if (true) {
//     number = 35;
//   }
//   let number = 42;
// }
// console.log(number);

//  Глобальна та функціональна

// var number = 10;

// function foo(){
//     var number = 15;
// }
// foo()
// console.log(number);

// Перерва до 21.20

/***** Цикл for *****/

// for (initialization; condition; post-expression) {
//   // statements
// }

// const message = "Hello";
// 0 - H - 1
// 1 - E - 2
// 2 - L - 3
// 3 - L - 4
// 4 - O - 5
// console.log(message.length);

// 0 < 5;
// 1 < 5;
// 2 < 5;
// 3 < 5;
// 4 < 5;
// // 5 < 5 => false
// for (let i = 0; i < message.length; i += 1) {
//   console.log(message[i]);
// }

/***** Цикл while *****/

// const message = "Hello";
// let i = 0
// while (i < message.length) {
//     console.log(message[i]);
//     i+=1;
//   // (statement)
// }

/***** Цикл do while *****/
// let i = 0;
// const message = "Hello";
// do {
//   console.log(message[i]);
//   i += 1;
// } while (i < message.length);

// while (i < 0){
//     console.log(i);
// }

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt("Color ?");
// let action;
// if (message) {
//   // message Boolean ? true : false
//   message = message.toLowerCase();
// }

// switch (message) {
//   case "red":
//     action = "stop";
//     break;

//   case "yellow":
//     action = "ready";
//     break;

//   case "green":
//     action = "go";
//     break;

//   default:
//     action = "be careful";
// }
// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

function check(text, answer) {
  let message = prompt(text);

  if (message) {
    message = message.toLowerCase();
  }

  return message === answer;
}

// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));

// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;

//   while (total < deps) {
//     total += daySpeed;
//     days += 1;

//     if (total < deps) {
//       total -= nightSpeed;
//     }
//   }
//   console.log(days);
// }
// getDays(42); // 8
// getDays(17) // 3
// getDays(18) // 4

// Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//   // str => string
//   const vowels = "aeiou";
//   let counter = 0;
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i])) {
//       counter += 1;
//     }
//   }

//   return counter;
// }

// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")); // 8

// console.log(3.15 + 4.001);

// Це з конспекту:
// const username = "Mango";
// console.log("Username is ", username); // Username is Mango
// За логікою можна й так, вірно?
// const username = "Alex";
// const userage = 37;
// console.log("My name is " + username + ". I'm " + userage + "years old");

// let message = "Hello world";
// message = message + 'from JS';
// console.log(message);

// console.log("My name is " + username + ". I'm " + userage + "years old")
// console.log(`My name is ${username}. I'm ${userage} years old`);

// 0
// ''
// null
// undefined
// false
// NaN
1 || 2;
"" || 2;

//  null
//  undefined
// 0 ?? 1
// null ?? 1
// undefined ?? 1
// false ?? 1

// console.log(name);
