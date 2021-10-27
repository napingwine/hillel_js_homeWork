'use strict';

function createBasketPopup(basketArrayOfProducts, discount, priceForDiscount) {
  let totalPriceOfBill = 0;
  let basket = document.createElement('div');
  basket.className = 'basket';
  basket.id = 'basket'

  let basketBody = document.createElement('div');
  basketBody.className = 'basket__body';
  basket.appendChild(basketBody)

  let basketContent = document.createElement('div');
  basketContent.className = 'basket__content';
  basketBody.appendChild(basketContent);

  let basketTitle = document.createElement('div');
  basketTitle.className = 'basket__title';
  basketTitle.innerHTML = 'Your bill:';
  basketContent.appendChild(basketTitle);

  let basketPositions = document.createElement('div');
  basketPositions.className = 'basket__positions';
  basketContent.appendChild(basketPositions);

  basketPositions.appendChild(createPosition('Item Name', 'Price', 'Order Amount', 'Position Toal Price'))

  //show all elements wich was add to basket
  for (let i = 0; i < basketArrayOfProducts.length; i++) {
    let totalPrice = basketArrayOfProducts[i].amount * basketArrayOfProducts[i].product.price
    basketPositions.appendChild(createPosition(basketArrayOfProducts[i].product.name, basketArrayOfProducts[i].product.price, basketArrayOfProducts[i].amount, totalPrice))
    totalPriceOfBill += totalPrice;
  }

  //total price without discount
  basketPositions.appendChild(createPosition('-', '-', 'total: ', totalPriceOfBill))
  
  //discount Option
  if (priceForDiscount < totalPriceOfBill) {
    totalPriceOfBill = totalPriceOfBill - (totalPriceOfBill * discount) / 100
    basketPositions.appendChild(createPosition('due to your total more than', priceForDiscount, ` you have ${discount}% discount and your total: `, `${totalPriceOfBill}$`))
  }

  //btn container
  let btnContainer = document.createElement('div');
  btnContainer.className = 'basket__btn-container';

  let cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('id', 'cancel');
  cancelBtn.innerHTML = 'cancel';
  btnContainer.appendChild(cancelBtn);

  let submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submit');
  submitBtn.innerHTML = 'submit';
  btnContainer.appendChild(submitBtn);
  basketContent.appendChild(btnContainer)
  
  return basket
}

function createPosition(itemName, price, orderAmount, totalPrice) {
  let basketPosition = document.createElement('div');
  basketPosition.className = 'basket__position';
  basketPosition.appendChild(createDivForBill(itemName, 'basket__position__name'));
  basketPosition.appendChild(createDivForBill(price, 'basket__position__price'));
  basketPosition.appendChild(createDivForBill(orderAmount, 'basket__position__order-amount'));
  basketPosition.appendChild(createDivForBill(totalPrice, 'basket__position__total-price'));
  return basketPosition;
}

function createDivForBill(someInnerHtml, someClass) {
  let div = document.createElement('div');
  div.innerHTML = someInnerHtml;
  div.className = someClass;
  return div;
}