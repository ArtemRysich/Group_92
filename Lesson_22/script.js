// ***************** Конструкція async await ***************** \\

// async function serviceCountry() {
//   const response = await fetch(`https://restcountries.com/v3.1/name/Ukraine`);
//   console.log('response', response);
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   const data = await response.json();
//   console.log('data', data);
// }
// serviceCountry();

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

//  function fn(){
//     const response = await fetch(`https://restcountries.com/v3.1/name/Ukraine`);
// }
// console.log(fn());

// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

// ****** Arrow function ****** \\

// const serviceCountry = async () => {
//   const resp = await fetch(`https://restcountries.com/v3.1/name/Ukraine`);
//   console.log(resp);
// };
// serviceCountry()
// ****** Function expression ****** \\
// const serviceCountry = async function () {
//   const resp = await fetch(`https://restcountries.com/v3.1/name/Ukraine`);
//   console.log(resp);
// };
// serviceCountry();
// ****** Object method ****** \\

// const service = {
//   countryName: "Ukraine",
//   async serviceCountry() {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${this.countryName}`)
//     console.log(resp);
//   },
// };
// service.serviceCountry()

// ************ Обробка за допомогою then та catch ************ \\

// async function serviceCountry() {
//   const resp = await fetch(`https://restcountries.com/v3.1/ame/Ukraine`);

//   if(!resp.ok){
//     throw new Error(resp.statusText);
//   }

//   return resp.json()
// }
// serviceCountry()
// .then(data => console.log(data))
// .catch(err => console.log(err))
// ************ Обробка за допомогою try та catch ************ \\

// async function serviceCountry() {
//   try {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/Ukraine`);

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     const data = await resp.json();
//   } catch (err) {
//     throw new Error(err)
//   }
// }
// serviceCountry()

// // ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\

// async function serviceCountries(){
//     const resp1 = await fetch(`https://restcountries.com/v3.1/name/Ukraine`)
//     const resp2 = await fetch(`https://restcountries.com/v3.1/name/France`)
//     const resp3 = await fetch(`https://restcountries.com/v3.1/name/Poland`)
// }
// serviceCountries()
// *********** Паралельні *********** \\

// async function serviceCountries() {
//   const countries = ["Ukraine", "qwerty", "Poland"];
//   const responses = countries.map(async (country) => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//       //   return Promise.reject();
//     }
//     return resp.json();
//   });
//   //   const data = await Promise.all(responses);
//   const data = await Promise.allSettled(responses);
//   //   const data = await Promise.race(responses);
//   console.log(data);
// }
// serviceCountries();

// Перерва до 21.08

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!

// Приклад роботи https://ibb.co/6g3YYs8

const elements = {
  form: document.querySelector(".js-search"),
  formContainer: document.querySelector(".js-form-container"),
  list: document.querySelector(".js-list"),
  addField: document.querySelector(".js-add"),
  removeField: document.querySelector(".js-remove"),
};

elements.addField.addEventListener("click", handlerAddField);
elements.removeField.addEventListener("click", handlerRemoveField);
elements.form.addEventListener("submit", handlerSearch);

async function handlerSearch(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const countries = formData.getAll("country");

  try {
    const capitals = await serviceGetCountries(countries);
    const weather = await serviceGetWeather(capitals);

    elements.list.innerHTML = createMarkup(weather);
  } catch (err) {
    console.log(err);
  } finally {
    elements.formContainer.innerHTML = '<input type="text" name="country" />';
  }
}

async function serviceGetCountries(arr) {
  const promises = arr.map(async (country) => {
    const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(promises);
  console.log(data);
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0].capital[0]);
}

function handlerAddField() {
  elements.formContainer.insertAdjacentHTML(
    "beforeend",
    ' <input type="text" name="country" />'
  );
}

function handlerRemoveField() {
  const { children, lastElementChild } = elements.formContainer;

  if (children.length === 1) {
    return;
  }

  lastElementChild.remove();
}
async function serviceGetWeather(arr) {
  const API_KEY = "61069fb8abf74210b7d232148231510";
  const BASE_URL = "http://api.weatherapi.com/v1";
  const END_POINT = "/current.json";

  const promises = arr.map(async (capital) => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: capital,
      lang: "uk",
    });
    const resp = await fetch(`${BASE_URL}${END_POINT}?${params}`);

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });

  const data = await Promise.allSettled(promises);
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(
      ({
        value: {
          location: { country, name },
          current: {
            temp_c,
            condition: { icon, text },
          },
        },
      }) => {
        return { country, name, temp_c, icon, text };
      }
    );
}

function createMarkup(arr) {
  return arr
    .map(
      ({ country, name, temp_c, icon, text }) => `
    <li>
        <img src="${icon}" alt="${text}" />
        <h2>${country}</h2>
        <h2>${name}</h2>
        <p>${text}</p>
        <p class="temp">${temp_c} °C</p>
    </li>
  `
    )
    .join("");
}

fetch("https://api.thecatapi.com/v1/breeds");

const options = {
  headers: {
    "x-api-key":
      "live_ww4AjjgEJMWPZXfckgLikrYHKpCfRciUJxnZ3R7b8EHrjMK3j5ILPlmEMa66XbNy",
  },
};
fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=abys`, options);
