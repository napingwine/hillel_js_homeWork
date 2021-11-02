'use strict';

function createBasketPopup(obj) {
  obj.totalPriceOfBill = 0;
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

  basketPositions.appendChild(createPosition('Item Name', 'Price', 'Order Amount', 'Position Toal Price'));

  //show all elements wich was add to basket
  for (let i = 0; i < obj.basketArrayOfProducts.length; i++) {
    basketPositions.appendChild(createPositionWithBTN(obj, i));
  }
  
  let total = createPosition('-', '-', 'total: ', obj.totalPriceOfBill)
  basketPositions.appendChild(total);
  
  let totalWithDiscount = createPosition('due to your total more than',obj.priceForDiscount,` you have ${obj.discount}% discount and your total: `,obj.totalPriceOfBill - (obj.totalPriceOfBill * (obj.discount/100)));
  totalWithDiscount.classList.add('total-with-discount');
  totalWithDiscount.style.display = 'none';
  basketPositions.appendChild(totalWithDiscount);
  

  if(isDiscount(obj)){
    totalWithDiscount.style.display = 'flex';
  }
  //btn container
  let btnContainer = document.createElement('div');
  btnContainer.className = 'basket__btn-container';

  let cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('id', 'cancel');
  cancelBtn.innerHTML = 'close';
  btnContainer.appendChild(cancelBtn);

  let submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submit');
  submitBtn.innerHTML = 'confirm';
  btnContainer.appendChild(submitBtn);
  basketContent.appendChild(btnContainer);

  cancelBtn.addEventListener('click', () => {
    basket.remove();
  });

  submitBtn.addEventListener('click', () => {
    if(obj.basketArrayOfProducts.length !== 0){
      document.body.appendChild(createUserForm(obj));
    }else{
      if(document.querySelector('.emty-basket-Warning')){
        document.querySelector('.emty-basket-Warning').remove();
      }
      basketContent.appendChild(askUseraddSomthingFromShop());
    }
  });

  basketContent.addEventListener('click', e => {
    if(e.target.className === 'remove-item'){
      obj.totalPriceOfBill = total.lastChild.innerText - e.target.parentNode.childNodes[3].innerHTML;
      total.lastChild.innerText = total.lastChild.innerText - e.target.parentNode.childNodes[3].innerHTML;
      totalWithDiscount.lastChild.innerText = obj.totalPriceOfBill - (obj.totalPriceOfBill * (obj.discount/100));
      obj.totalPriceOfBillWithDiscount = totalWithDiscount.lastChild.innerText;
    }
    if(!isDiscount(obj)){
      totalWithDiscount.style.display = 'none';
    }
  });
  obj.totalPriceOfBillWithDiscount = totalWithDiscount.lastChild.innerText;
  return basket;
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

function createDelBTN() {
  let delBtn = document.createElement('input');
  delBtn.setAttribute('type', 'button');
  delBtn.value = 'remove item';
  return delBtn;
}

function createPositionWithBTN(obj, indexOfProduct) {
  let itemName = obj.basketArrayOfProducts[indexOfProduct].product.name;
  let price = obj.basketArrayOfProducts[indexOfProduct].product.price;
  let orderAmount = obj.basketArrayOfProducts[indexOfProduct].amount;
  let totalPrice = obj.basketArrayOfProducts[indexOfProduct].product.price * obj.basketArrayOfProducts[indexOfProduct].amount;
  let position = createPosition(itemName, price, orderAmount, totalPrice);
  let delBtn = createDelBTN();
  delBtn.className = 'remove-item';
  position.appendChild(delBtn);
  let idOfProduct = obj.basketArrayOfProducts[indexOfProduct].product.id;
  delBtn.addEventListener('click', () => {
    for (let z = 0; z < obj.basketArrayOfProducts.length; z++) {
      if (obj.basketArrayOfProducts[z].product.id === idOfProduct) {
        obj.basketArrayOfProducts.splice(z, 1);
      }
    }
    let basetProductst = JSON.stringify(obj.basketArrayOfProducts);
    localStorage.setItem('basket', basetProductst);
    position.remove(); // remove HTML element from baksket
  })
  obj.totalPriceOfBill += totalPrice;
  return position;
}

function isDiscount(obj){
  if(obj.totalPriceOfBill > obj.priceForDiscount){
   return true;
  }
}

function askUseraddSomthingFromShop(){
  let div = document.createElement('div');
  div.innerHTML = 'Your basket is empty!';
  div.style.fontSize = "30px";
  div.className = 'emty-basket-Warning';
  div.style.color = 'red';
  return div;
}