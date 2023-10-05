function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, description, price }) => `
<li data-id="${id}" class="product-card js-product">
    <img src="${img}" alt="${name}" class="product-img">
    <h2 class="product-title">${name}</h2>
    <p class="product-description">${description}</p>
    <p class="product-price">${price}</p>
    <button class="product-add-btn js-add">Add to basket</button>
</li>`
    )
    .join('');
}

export { createMarkup };
