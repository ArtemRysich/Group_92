const container = document.querySelector(".js-list");

function serviceGetQuestion() {
  return fetch("http://127.0.0.1:3000/api/getAll").then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
serviceGetQuestion()
  .then((data) => container.insertAdjacentHTML('afterbegin', createMarkup(data)))
  .catch((err) => console.log(err));

function createMarkup(arr) {
  return arr.map(({_id, name, email,phone, comment}) => `
  <li class="card" data-id="${_id}">
    <div class="card-content">
        <h2 class="card-name">${name}</h2>
        <div>Phone: <span class="card-phone">${phone}</span></div>
        <div>Email: <span class="card-email">${email}</span></div>
        <div><span class="card-comment">${comment}</span></div>
    </div>
 </li>
  `)
  .join("");
}
