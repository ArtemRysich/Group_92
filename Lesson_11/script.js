// ******Пошук HTML елементу за допомогою querySelector****** \\

// За назвою тегу
// const title = document.querySelector('h1');
// console.log(title);

// За назвою класу
// const title = document.querySelector('.js-title')
// console.log(title);
// За ID
// const title = document.querySelector('#title')
// const title = document.getElementById('title')
// console.dir(title);

// ******Пошук HTML елементів за допомогою querySelectorAll****** \\

// const items = document.querySelectorAll('li');
// console.log(items);

// const items = document.querySelectorAll('.js-item');
// console.log(items);

// const items = document.getElementsByTagName('li');

// const items = document.getElementsByClassName('js-item')

// console.log(items);

// Перетворення колекції до масиву
// const arr = Array.from(items);
// const arr = [...items]
// console.log(arr);

// ******Створення HTML елементів за допомогою createElement****** \\

// const container = document.querySelector('.js-list');

// const li = document.createElement('li');
// const h2 = document.createElement('h2');

// h2.textContent = 'Hello world';

// li.appendChild(h2)

// container.append(li) в кінець

// container.prepend(li) на початок

// console.dir(h2);

// ******Створення HTML елементів за допомогою шаблонної розмітки****** \\

// const container = document.querySelector('.js-list')

// const li = `<li>
//     <h2>Hello world</h2>
// </li>`

// console.log(li);

// Метод insertAdjacentHTML

// container.insertAdjacentHTML("beforeend", li)

// Властивість innerHTML

// container.innerHTML += li;
// container.innerHTML = '';

// ******Стилізація за допомогою властивості style****** \\

// container.style.listStyle = 'none';
// container.style.color = 'red';
// container.style.fontSize = '30px';

// ******Стилізація за допомогою властивості classList****** \\

// Метод add

// container.classList.add('list', 'test')
// Метод remove

// container.classList.remove('list', 'test')

// Метод toggle

// container.classList.toggle('list' + 'list')
// container.classList.toggle('list')

// ******Системні атрибути****** \\

// const btn = document.querySelector('.js-btn')
// console.dir(btn);
// btn.disabled = true;
// btn.disabled = false;

// методи для роботи з атрибутами

// btn.setAttribute('disabled', true)
// console.log(btn.hasAttribute('disabled'));
// btn.removeAttribute('disabled')

// ******Data атрибути****** \\
// const btn = document.querySelector('.js-btn')

// btn.setAttribute('data-btn-id', '1');
// btn.setAttribute('data-btn-name', 'click');

// const {btnId, btnName} = btn.dataset;

// console.log('btnId',btnId);
// console.log('btnName',btnName);

// btn.removeAttribute('data-btn-id')

// ***************************Практика************************* \\
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

// const cars = [
//   {
//     id: 1,
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 3,
//     model: "BMW",
//     type: "5 series",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// *******Варіант-1******* \\
// const list = document.querySelector(".js-list");
// const markup = cars.map(({ id, model, type, price, img }) => {
//   const li = document.createElement("li");
//   const liImg = document.createElement("img");
//   const h2 = document.createElement("h2");
//   const h3 = document.createElement("h3");
//   const p = document.createElement("p");

//   li.setAttribute("data-car-id", id);
//   liImg.src = img;
//   liImg.alt = type;
//   h2.textContent = model;
//   h3.textContent = type;
//   p.textContent = price;
//   liImg.classList.add("liImg");
//   li.append(liImg, h2, h3, p);

//   return li
// });
// console.log(markup);
// list.append(...markup)

// *******Варіант-2******* \\

// const cars = [
//   {
//     id: 1,
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 3,
//     model: "BMW",
//     type: "5 series",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const list = document.querySelector(".js-list");
// list.style.display = 'flex';
// list.style.flexWrap = 'wrap';
// list.style.gap = '10px'

// //   list.style.listStyle = 'none'
// list.classList.add('test')
// const markup = cars
//   .map(
//     ({ model, type, price, img, id }) => `
// <li data-car-id="${id}" style="color:blue; font-size=50px">
//     <img src="${img}" alt="${type}" class="liImg">
//     <h2>${model}</h2>
//     <h3>${type}</h3>
//     <p>${price}</p>
// </li>`
//   )
//   .join("");
//   console.log(markup);

// list.insertAdjacentHTML("afterbegin", markup);

function getValue() {
  const message = "try catch me";
  const value = 20;

  return function (param) {
    const result = param + value;
    return `${result} - ${message}`;
  };
}

const result = getValue();
console.log(result(10));
