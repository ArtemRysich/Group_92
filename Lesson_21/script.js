// ******************** CRUD ******************** \\

// Create - POST
// Read   - GET
// Update - PUT PATCH
// DELETE - DELETE

// *************** POST - CREATE ************** \\
// const post = {
//     title: 'Group 92',
//     body: 'Test group 92',
//     userId: 111,
// };

// text/html: MIME-тип для HTML-документів.
// application/json: MIME-тип для JSON-даних.
// image/jpeg: MIME-тип для JPEG-зображень.
// audio/mp3: MIME-тип для аудіофайлів у форматі MP3.

// function serviceCreatePost(post) {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(post),
//     headers: {
//         "Content-type" : "application/json"
//     }
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", options);
// }
// serviceCreatePost(post);

// ******************** GET - READ ******************** \\

// const options ={
//     method: "GET",
//     headers:{
//         "Content-type" : "application/json"
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1',
// options)

// ******************** PATCH - UPDATE ******************** \\
// const post = {
//   title: "Group 92",
// };

// function servicePatchUpdatePost(post) {
//   const options = {
//     method: "PATCH",
//     body: JSON.stringify(post),
//     headers: {
//         "Content-type": "application/json"
//     },
//   };
//   fetch("https://jsonplaceholder.typicode.com/posts/1", options);
// }

// servicePatchUpdatePost(post);

// ******************** PUT - UPDATE ******************** \\

// function servicePutUpdatePost(post) {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(post),
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   fetch("https://jsonplaceholder.typicode.com/posts/1", options);
// }
// servicePutUpdatePost(post);

// ******************** DELETE ******************** \\

// const options = {
//     method: 'DELETE'
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1',options)

// ПЕРЕРВА ДО 20.41

// ******************** Практика ******************** \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами

const form = document.querySelector(".js-question");

form.addEventListener("submit", handlerQuestion);

function handlerQuestion(evt) {
  evt.preventDefault();

  //   const { question, email, phone, userName } = evt.currentTarget.elements;
  //   const request = {
  //     name: userName.value,
  //     email: email.value,
  //     phone: phone.value,
  //     comment: question.value,
  //   };

  const formData = new FormData(evt.currentTarget);
  const request = {};

  formData.forEach((value, key) => (request[key] = value));
  serviceQuestion(request)
  .then(() => alert("Success"))
  .catch(() => alert("Error"));

  evt.currentTarget.reset();
}

function serviceQuestion(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };
  
  return fetch("http://127.0.0.1:3000/api/question", options)
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
