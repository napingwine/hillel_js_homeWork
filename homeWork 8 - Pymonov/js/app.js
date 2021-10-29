'use strict';

let dataURL = './json/products.json';

async function getResponce(url) {
  const allCurrentDataObj = {};
  let responce = await fetch(url);
  allCurrentDataObj.data = await responce.json();
  allCurrentDataObj.basketArrayOfProducts = [];
  allCurrentDataObj.discount = 20;
  allCurrentDataObj.priceForDiscount = 15000;
  document.body.appendChild(header(allCurrentDataObj));
  document.body.appendChild(createSelectedCategoryProductsContainer(allCurrentDataObj));
}

getResponce(dataURL);