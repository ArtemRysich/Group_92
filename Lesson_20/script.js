// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// *********** Кнопка "Load More" ***************** \\
// const elements = {
//   loadMore: document.querySelector(".js-load-more"),
//   list: document.querySelector(".js-movie-list"),
// };
// let page = 498;

// elements.loadMore.addEventListener("click", handlerLoadMore);
// serviceMovie(page)
//   .then((data) => {
//     elements.list.insertAdjacentHTML("beforeend", createMarkup(data.results));

//     if (data.page < data.total_pages) {
//       elements.loadMore.classList.remove("load-more-hidden");
//     }
//   })
//   .catch((err) => console.log(err));

// function handlerLoadMore() {
//   page += 1;

//   serviceMovie(page)
//     .then((data) => {
//       elements.list.insertAdjacentHTML(
//         "beforeend",
//         createMarkup(data.results)
//       );

//       if(data.page >= 500){
//         elements.loadMore.classList.add("load-more-hidden")
//       }
//     })
//     .catch((err) => console.log(err));
// }

// function serviceMovie(page = 1) {
//   const BASE_URL = "https://api.themoviedb.org/3";
//   const END_POINT = "/trending/movie/week";
//   const API_KEY = "345007f9ab440e5b86cef51be6397df1";
//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     page,
//   });

//   return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, original_title, release_date, vote_average }) => `
//     <li class="movie-card">
//         <img src="https://image.tmdb.org/t/p/w300${poster_path}" loading="lazy" alt="${original_title}">
//         <div class="movie-info">
//         <h2>${original_title}</h2>
//         <p>Release date: ${release_date}</p>
//         <p>Vote Average: ${vote_average}</p>
//         </div>
//     </li>`
//     )
//     .join("");
// }
// ********************************Infinity scroll ********************** \\
const elements = {
  list: document.querySelector(".js-movie-list"),
  guard: document.querySelector(".js-guard"),
};
const options = {
  root: null,
  rootMargin: "300px",
};
const observer = new IntersectionObserver(handlerLoadMore, options);
let page = 1;

serviceMovie(page)
  .then((data) => {
    elements.list.insertAdjacentHTML("beforeend", createMarkup(data.results));

    if (data.page < data.total_pages) {
      observer.observe(elements.guard);
    }
  })
  .catch((err) => console.log(err));

function serviceMovie(page = 1) {
  const BASE_URL = "https://api.themoviedb.org/3";
  const END_POINT = "/trending/movie/week";
  const API_KEY = "345007f9ab440e5b86cef51be6397df1";
  const params = new URLSearchParams({
    api_key: API_KEY,
    page,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, original_title, release_date, vote_average }) => `
      <li class="movie-card">
          <img src="https://image.tmdb.org/t/p/w300${poster_path}" loading="lazy" alt="${original_title}">
          <div class="movie-info">
          <h2>${original_title}</h2>
          <p>Release date: ${release_date}</p>
          <p>Vote Average: ${vote_average}</p>
          </div>
      </li>`
    )
    .join("");
}

let counterObserver = 0;
function handlerLoadMore(entries, observer) {
  counterObserver += 1;
  console.log("counterObserver", counterObserver);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      page += 1;
      serviceMovie(page)
        .then((data) => {
          elements.list.insertAdjacentHTML(
            "beforeend",
            createMarkup(data.results)
          );

          if (data.page >= 500) {
            observer.unobserve(elements.guard);
          }
        })
        .catch((err) => console.log(err));
    }
  });
}

document.addEventListener("scroll", handlerScroll);

let counterScroll = 0;
function handlerScroll() {
  counterScroll += 1;
  console.log("counterScroll", counterScroll);
}
