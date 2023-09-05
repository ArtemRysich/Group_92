// Agenda
// 1 Повторення типів функцій
// 2 ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 3 call apply bind

// ***********Повторення типів функцій*************\\
// **Function declaration**
// 'use strict'

// function fnDeclaration() {
//     console.log(this.fullName);
// }
// fnDeclaration()

// **Function expression**
// 'use strict'
// const fnExpression = function () {
//     console.log(this);
// }

// fnExpression()

// **Arrow function**
// 'use strict'

// const fnArrow = () => {
//     console.log(this);
// }

// fnArrow()

// ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч
// 4 Arrow Function в рамках чого вона була створена

// *****Function declaration*****\\
// const person = {
//     name: 'Alice',
//     hello() {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.hello()

// *****Function Expression*****\\
// const person = {
//     name: 'Alice',
//     hello: function () {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.hello()

// *****Arrow Function*****\\
// const person = {
//     name: 'Alice',
//     hello: () => {
//         console.log(this);
//     }
// }
// person.hello();

// const person = {
//     name: 'Alice',
//     hello() {
//         console.log(this);

//         const arrowFn = () => {
//             console.log('arrowFn', this);
//         }
//         arrowFn();
//     }
// }
// person.hello()

// const arrowFn = () => {
//     console.log('arrowFn', this);
// }

// const person = {
//     name: 'Alice',
//     arrowFn :() => {
//         console.log('arrowFn', this);
//     },
//     hello() {
//         console.log(this);

//         this.arrowFn();
//     }
// }
// person.hello()

// const objA = {
//     firstName: 'Artem',
//     lastName: 'Rysich',
//     sayHello(){
//         console.log(`${this.firstName} ${this.lastName}` );
//     }
// }

// objA.sayHello()

// const objB = {
//     hay: objA.sayHello //sayHello(){
//     //     console.log(`${this.firstName} ${this.lastName}` );
//     // }
// }
// objB.hay()

// ***********call apply bind*********** \\

// ARROW FUNCTION НЕ ПРАЦЮЄ !!!!!!!!!!!!!!!!!!

// *****call***** \\
// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 80,
//   };

// function drive(action, city) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год в місті ${city}. ${action}`);
// }

// drive.call(bmw, 'Увімкнути ближнє світло', 'Вінниця');
// drive.call(audi, 'Увімкнути клімат-контроль', 'Київ');
// drive()

// *****apply***** \\

// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 80,
// };

// function drive(action, destination) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }

// drive.apply(bmw, ['Увімкнути ближне світло', 'Львів']);
// drive.apply(audi, ['Увімкнути клімат-контроль', 'Київ']);

// *****bind***** \\
// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// function drive(action, destination) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }

// const bmwDrive = drive.bind(bmw);
// // console.log(bmwDrive);
// bmwDrive('Увімкнути ближнє світло', 'Львів')
// bmwDrive('Увімкнути клімат-контроль', 'Київ')

// Перерва до 21.05

// *************************Практика***************************\\

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.
// const cruiseControl = {
//   speed: 2,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `Автомобіль ${this.brand} прискорюється. Поточна швидкість ${this.speed}`
//     );
//   },
//   decrease() {
//     this.speed -= 10;

//     if (this.speed <= 0) {
//       console.log(`Авто зупинилось`);
//       this.speed = 0
//       return;
//     }

//     console.log(
//       `Автомобіль ${this.brand} гальмує. Поточна швидкість ${this.speed} `
//     );
//   },
// };

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.accelerate();

// Task - 2
// Потрібно створити систему для продажу в інтернет-магазині.
// В об'єкті продукту (product) потрібно створити метод discount(буде приймати знижку клієнта в %) та повертати вартість товару з врахуванням знижки
// В об'єкті клієнта (client) який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунку вартості товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//   name: "Smartphone",
//   price: 500,
//   discount(percent) {
//     return (this.price / 100) * (100 - percent);
//   },
// };

// const client = {
//   name: "Alice",
//   discountPercent: 5,
//   purchase() {
//     const price = product.discount(this.discountPercent);
//     console.log(
//       `${this.name} придбала товар зі знижкою в ${this.discountPercent}% сума до сплати ${price}грн`
//     );
//   },
// };
// client.purchase();

// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SAFE_SPEED = 60;

// const tesla = {
//   brand: "Tesla",
//   speed: 30,
// };

// const audi = {
//   brand: "Audi",
//   speed: 70,
// };

// const ford = {
//     brand: 'Ford',
//     speed: 90
// }

// function speedSensor(maxSpeed) {
//   if (this.speed <= maxSpeed) {
//     return `Автомобіль ${this.brand} рухається з безпечною швидкістю`
//   }

//   return `${this.brand} - Перевищило безпечну швидкість! 😰`
// }

// console.log(speedSensor.call(audi, SAFE_SPEED));
// console.log(speedSensor.call(tesla, SAFE_SPEED));
// console.log(speedSensor.call(ford, SAFE_SPEED));

// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
//   ??  => null undefined
//   ||  => 0 '' NaN undefined null false
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   },
//   mult() {
//     return (this.a ?? 1) * (this.b ?? 1);
//   },
// };
// calculator.read(3);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// console.log(value);

// var value = 10

// function foo (a,b){
//     this.a = a;
//     this.b = b;
// }

// const instance = new foo(5,10)
// console.log(instance);

// ~  => -(x+1)

const arr = ["a", "b", "c"];

const idx = arr.indexOf("a");
