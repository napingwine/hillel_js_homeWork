'use strict';

function createPopup(obj) {
  let productObject = getProductFromSelectedCategory(obj);
  obj.currentProductObject = productObject;

  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = 'popup';

  let poopupBody = document.createElement('div');
  poopupBody.className = 'popup__body';
  popup.appendChild(poopupBody);

  let popupContent = document.createElement('div');
  popupContent.className = 'popup__content';
  poopupBody.appendChild(popupContent);

  let popupTitle = document.createElement('div');
  popupTitle.className = 'popup__title';
  popupTitle.innerHtml = 'Requsition Form';
  popupContent.appendChild(popupTitle);

  let popupForm = document.createElement('div');
  popupForm.className = 'popup__form';
  popupContent.appendChild(popupForm);

  let productNameLable = createLable('product__name', 'Name:');
  popupForm.appendChild(productNameLable);

  let productName = createProductDiv(productObject, 'name');
  popupForm.appendChild(productName);

  let productPriceLable = createLable('product__name', 'Price');
  popupForm.appendChild(productPriceLable);

  let productPrice = createProductDiv(productObject, 'price');
  popupForm.appendChild(productPrice);

  let productAmountLable = createLable('product__name', 'Availeble amount:');
  popupForm.appendChild(productAmountLable);

  let productAmount = createProductDiv(productObject, 'count');
  popupForm.appendChild(productAmount);

  let userProductAmountLable = createLable('product-amount', 'Enter amount produt for order:');
  popupForm.appendChild(userProductAmountLable);

  let userProductAmount = createInput('number', 'product-amount', 'product-amount');
  popupForm.appendChild(userProductAmount);

  let btnContainer = document.createElement('div');
  btnContainer.className = 'btn-container';

  let cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('id', 'cancel');
  cancelBtn.innerHTML = 'cancel';
  btnContainer.appendChild(cancelBtn);

  userProductAmount.addEventListener('keyup', ()=>{
    if (userProductAmount.value <= productObject.count && userProductAmount.value > 0) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
 
  cancelBtn.addEventListener('click', () => {
    popup.remove();
  });

  let submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'add-to-basket');
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'add to basket';
  btnContainer.appendChild(submitBtn);

  submitBtn.addEventListener('click', () => {
    productObject.count -= userProductAmount.value;
    document.querySelector(`#count${productObject.id}`).innerHTML -= userProductAmount.value;
    let someProduct = new ProductAndAmountToBasket(obj, userProductAmount.value);
    if(userProductAmount.value > 0){
      obj.basketArrayOfProducts.push(someProduct);
      let basetProductst = JSON.stringify(obj.basketArrayOfProducts)
      localStorage.setItem('basket', basetProductst);
    }
    popup.remove();
  });

  popupForm.appendChild(btnContainer);
  return popup;
}

function createLable(valuOfattribute, text) {
  let lable = document.createElement('lable');
  lable.setAttribute('for', valuOfattribute);
  lable.innerHTML = text;
  return lable;
}

function createProductDiv(productOject, objectproperty) {
  let div = document.createElement('div');
  div.className = 'product__name';
  div.id = 'product__name';
  div.innerHTML = productOject[objectproperty];
  return div;
}

function createInput(type, name, id) {
  let input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', name);
  input.setAttribute('id', id);
  return input;
}

function getProductFromSelectedCategory(obj) {
  let array = obj.productsFromSelectedCategory;
  let idOfProduct = obj.idOfSelectedElement;
  for (let i = 0; i < array.length; i++) {
    if (parseInt(idOfProduct) === array[i].id) {
      return array[i];
    }
  }
}

function ProductAndAmountToBasket(obj, amount) {
  this.product = obj.currentProductObject;
  this.amount = amount;
}
