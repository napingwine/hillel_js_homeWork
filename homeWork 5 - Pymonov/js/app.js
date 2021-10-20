'use strict';

document.write('<h1>Select a category:</h1>')
document.write('<div class="cathegories" id="cathegories"></div>')
document.write('<div class="products__container" id="products__container"></div>')
document.write('<div id="busketBTN"><img src="http://simpleicon.com/wp-content/uploads/basket.png" alt="basket"><div id="numberOfItems"></div></div>')

let cathegoriesContainer = document.getElementById("cathegories");
let productsContainer = document.getElementById("products__container");
let busketBtn = document.getElementById('busketBTN');

let allCathegories = [];
let selectedCathegoryproducts = [];
let currentElement;
let selectedProduct;
let userName;
let userProductAmount;
let userEmail;
let userPhoneNumber;
let discount = 20;
let priceForDiscount = 15000;
let basketProductsArray = [];

getAllCathegories()
showAllCathegories()

// clean ProductCardsContainer and add new product cards
function showProducts(element) {
  element.addEventListener('click', () => {
    selectedCathegoryproducts = [];//reset array before get new cathegory
    getProductsBySelectedCathegory(element);
    cleanContainer(productsContainer);
    createProductCardsContainer(element);
  })
};

// onClik of produck open pup up and get from user data
function bySelectedProduct(element) {
  element.addEventListener('click', () => {
    let idOfCurrentElement = element.getAttribute('idOfProduct');
    let popUp = createPopup(getElementByIDInDataBase(idOfCurrentElement, selectedCathegoryproducts));
    cancelBTN('cancel','popup')

    popUp.addEventListener('keyup', () => {
      if (allFieldsCorectlyFilled(getElementByIDInDataBase(idOfCurrentElement, selectedCathegoryproducts))) {
        document.getElementById('add-to-basket').disabled = false;
      } else {
        document.getElementById('add-to-basket').disabled = true;
      }
    })

    document.getElementById('add-to-basket').addEventListener('click', () => {
      let element = getElementByIDInDataBase(idOfCurrentElement, selectedCathegoryproducts)
      let amountNumberField = document.querySelector('#product-amount').value;
      const AmountOfSelectedProuct1 = new AmountOfSelectedProuct(element, amountNumberField)//create obj with amount and product object
      AmountOfSelectedProuct1.product.count -= AmountOfSelectedProuct1.amount // subtract bought amount of product from database
      basketProductsArray.push(AmountOfSelectedProuct1)// add element in array of basket
      let popUpremove = document.querySelector('#popup');
      popUpremove.remove();
      amountOfProductsOnChange(idOfCurrentElement, AmountOfSelectedProuct1.product.count);
      showNumberOfPositionsInBasket(basketProductsArray.length)
    })
  })
}

busketBtn.addEventListener('click', () => {
 let busket = createBasketPopup(basketProductsArray, discount, priceForDiscount);
 document.body.appendChild(busket)
 cancelBTN('cancel','basket')
})