import { createMarkup } from './templates/templateCheckout';

const selectors = {
  container: document.querySelector('.js-list'),
  totalPrice: document.querySelector('.js-total-price'),
  clearBtn: document.querySelector('.js-clear'),
};

const PRODUCT_LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];

if (products.length) {
  const totalCost = products.reduce(
    (acc, { qty, price }) => acc + qty * price,
    0
  );
  selectors.clearBtn.hidden = false;
  selectors.totalPrice.textContent = `Total price ${totalCost} грн`;
  selectors.clearBtn.addEventListener('click', handlerClearBasket);
  selectors.container.insertAdjacentHTML('afterbegin', createMarkup(products));
} else {
  selectors.totalPrice.textContent = 'Your basket is empty';
}

function handlerClearBasket() {
  localStorage.removeItem(PRODUCT_LS_KEY);
  window.location.href = './index.html';
}


