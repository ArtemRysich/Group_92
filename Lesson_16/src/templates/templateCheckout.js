function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, qty, price }) => `
<li class="card-item">
  <img src="${img}" alt="${name}" class="product-img">
  <h2>${name}</h2>
  <p>Quantity: ${qty}</p>
  <p>Total price: ${qty * price}</p>
</li>`
    )
    .join('');
}

export { createMarkup };
