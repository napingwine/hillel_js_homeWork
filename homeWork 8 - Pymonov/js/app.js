'use strict';

let dataURL = './json/products.json';
let discount = 20;
let priceForDiscount = 15000;
let basketArrayOfProducts = [];

document.body.appendChild(createHeader());
let productResultContainer = createSelectedCategoryProductsContainer();
document.body.appendChild(productResultContainer);

async function getResponce(url) {
  let responce = await fetch(url);
  let data = await responce.json();
  let allCathegories = getArrayOfCategoriesFromData(data);

  document.querySelector('#header-categories-container').addEventListener('mouseenter', event => {
    document.querySelector('#header-categories-container').appendChild(createCategoriesPopup(allCathegories));
    //event.target -> category element
    event.target.addEventListener('click', event => {
      cleanProductsContainer()
      //event.target -> selected category from popup
      let targetCategory = event.target.innerHTML;
      let arrayWithproductsFromSelectedCategory = getProductsFromSelectedCategory(targetCategory, data);
      productResultContainer.appendChild(createProductCardsInContainer(arrayWithproductsFromSelectedCategory, data, arrayWithproductsFromSelectedCategory));
    })
  })
  document.querySelector('#header-categories-container').addEventListener('mouseleave', () => {
    document.querySelector('#header-categories-container').lastChild.remove();
  })

  // open and close basket !!!!!!!!!!!!!create function on sumbit btn!!!!!!!!!!!!!!!!!!
  document.querySelector('#header-basket-icon').addEventListener('click', () => {
    document.body.appendChild(createBasketPopup(basketArrayOfProducts, discount, priceForDiscount));
    cancelBtnFN('#cancel', '#basket');
  })
}

getResponce(dataURL);