'use strict';

function createProductCardsInContainer(productsArray, data, arrayWithproductsFromSelectedCategory) {
  let productsContainer = document.createElement('div');
  productsContainer.id = 'result-products-container';
  for (let k = 0; k < productsArray.length; k++) {
    let div = document.createElement('div');
    div.className = 'product-card';
    div.appendChild(createDiv(productsArray, 'name', 'Name', 'name', k));
    div.appendChild(createDiv(productsArray, 'price', 'Price', 'price', k));
    div.appendChild(createDiv(productsArray, 'amount', 'Amount', 'count', k));
    div.setAttribute('idOfProduct', `${productsArray[k].id}`);
    div.addEventListener('click', event => {
      forClikedCard(event, data, arrayWithproductsFromSelectedCategory);
    })
    productsContainer.appendChild(div);
  }
  return productsContainer;
}

function createDiv(productsArray, classname, innnerhtml, property, iterator) {
  let div1 = document.createElement('div');
  div1.className = classname;
  let strongDiv1 = document.createElement('strong');
  strongDiv1.innerHTML = innnerhtml;
  div1.appendChild(strongDiv1);
  let div11 = document.createElement('div');
  let id = "count" + productsArray[iterator].id;
  if (property === 'count') {
    div11.id = id;
  }
  div11.innerHTML = `${productsArray[iterator][property]}`;
  div1.appendChild(div11);
  return div1;
}
