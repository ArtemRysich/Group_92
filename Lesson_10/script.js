// ***************Прототипне наслідування та метод Object.create***************\\

// const user = {
//   name: "Alice",
//   age: 23,
//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   },
//   getAge() {
//     console.log(`my age ${this.age}`);
//   },
// };
// // console.log(user);
// const student = Object.create(user);

// // console.log(student);
// // student.sayHello()

// student.name = "Kate";
// // console.log(student);
// // student.sayHello()

// const teacher = Object.create(student);
// teacher.city = 'Lviv'
// console.log(teacher);
// console.log(student.city);
// teacher.sayHello()

// String.prototype.replace = function (userName) {
//   console.log(`Hello my name is ${userName}`);
// };

// const str = "test";
// const str1 = "test2"

// str.replace("JS");
// str1.replace('Artem');
// *********************************ES6 Class*********************************\\

// *****Публічні властивості та методи***** \\
// class User {
//     constructor(userName) {
//         this.name = userName;
//     }

//     showName() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// const student = new User('Alice');
// const student1 = new User('Kate');
// console.log(student);
// console.log(student1);
// student.showName()

// *****Приватні властивості та методи***** \\
// class User {
//     #password;
//     constructor(name, password) {
//         this.name = name;
//         this.#password = password;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }
// }

// const student = new User('Alice', 'qwerty111');
// // student.password = 'abcd'
// console.log(student);
// student.#checkPassword()
// student.showName()

// ******Геттери і сеттери****** \\

// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// const student = new User('Alice', 'qwerty111', 'test@gmail.com');
// console.log(student.email);

// student.email = 'new@gmail.com';

// console.log(student.email);

// *****Статичні властивості та методи***** \\
// Розглянемо на практичному завдані (Task-3)

// **********Наслідування класів********* \\

// class User {
//   #password;
//   #email;
//   constructor(name, password, email) {
//     this.name = name;
//     this.#password = password;
//     this.#email = email;
//   }

//   showName() {
//     if (this.#checkPassword()) {
//       console.log(`Hello my name is ${this.name}`);
//     } else {
//       console.log("Who are you ?🧐");
//     }
//   }

//   #checkPassword() {
//     const password = prompt();
//     return password === this.#password;
//   }

//   get email() {
//     if (this.#checkPassword()) {
//       return this.#email;
//     }
//   }

//   set email(newEmail) {
//     if (this.#checkPassword()) {
//       this.#email = newEmail;
//     }
//   }
// }
// constructor(name, password, email) {
//     this.name = name;
//     this.#password = password;
//     this.#email = email;
// }
// class Student extends User {
//     constructor(name, password, email, points) {
//         super(name, password, email)
//         // super()
//         this.points = points;
//     }
//     getPoints() {
//         console.log(`${this.name} has ${this.points} points`);
//     }
// }

// const student = new Student('Alice', 'qwerty111', 'test@gmail.com', 38);
// // student.showName()
// // student.getPoints()
// console.log(student);

// *********************** Практика *********************** \\

// *******Task-1****** \\
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height } = {}) {
//     this.#width = width;
//     this.#height = height;
//   }

//   get width(){
//     return this.#width
//   }

//   set width(newWidth){
//     if(typeof newWidth === 'number' && newWidth > 0){
//         this.#width = newWidth;
//     }else{
//         console.log('Ширина має бути числом і більша за 0');
//     }
//   }

//   get height(){
//     return this.#height
//   }

//   set height(newHeight){
//     if(typeof newHeight === 'number' && newHeight > 0){
//         this.#height = newHeight;
//     }else{
//         console.log('Висота має бути числом і більша за 0');
//     }
//   }
// }
// const item = new Rectangle({ width: 10, height: 5 });
// console.log(item);

// console.log(item.width); // get
// item.width = 12 // set
// console.log(item.width); //get

// *******Task-2******* \\
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являється випускником).

// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   getCourse() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const diff = currentYear - this.year;

//     if (diff > 5) {
//       return "Студент являється випускником";
//     }

//     return `${diff} курс`;
//   }
// }

// const student = new Student("Петрик", "Пяточкин", 2019);
// console.log(student);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); //поверне 4

// *******Task-3******* \\
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць.
// Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//   static #counter = 0;
//   static addHero() {
//     // Hero.counter +=1
//     Hero.#counter += 1;
//     console.log(`Кількість героїв ${this.#counter}`);
//   }
//   #level;
//   constructor(name) {
//     this.name = name;
//     this.#level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }

//   attack() {
//     return "Attack with 10 damage";
//   }

//   heal() {
//     this.health += 10;
//   }
// }

// const bloodseker = new Hero("Bloodseker");
// const bloodseker2 = new Hero("Bloodseker");
// const bloodseker3 = new Hero("Bloodseker");

// console.log(bloodseker);
// console.log(bloodseker.attack());
// console.log(bloodseker.heal());
// console.log(bloodseker);
// console.log(Hero.#counter);

// *******Task-4******* \\
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

class BankAccount {
  #balance;
  constructor() {
    this.#balance = 0;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.log("Сума має бути більша за НУЛЬ");
      return;
    }

    this.#changeBalance(amount);
    console.log(`Здійснено депозит ${amount}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Сума має бути більша за НУЛЬ");
    } else if (amount > this.#balance) {
      console.log("Недостатньо коштів на рахунку");
    } else {
      this.#changeBalance(-amount);
      console.log(`Знято ${amount}`);
    }
  }
  #changeBalance(amount) {
    this.#balance += amount;
  }
}

const instance = new BankAccount();
instance.deposit(100);
instance.deposit(1200);
instance.withdraw(100);
console.log(instance);
