'use strict';

// function that get all products in selected cathegory
function getProductsBySelectedCathegory(element) {
  for (let l = 0; l < products.length; l++) {
    if (element.innerHTML === products[l].category) {
      selectedCathegoryproducts.push(products[l]);
    }
  }
};
// search in selectedCathegoryproducts seected object
function getElementByIDInDataBase(selectedItemID, array) {
  let id = selectedItemID;
  for (let i = 0; i < array.length; i++) {
    if (Number(id) === array[i].id) {
      return array[i];
    }
  }
}

function allFieldsCorectlyFilled(ojectEL) {
  let readySubmit = false;
  let amountNumberField = document.querySelector('#product-amount');
  let amount = checkAmoutOfProduct(ojectEL, amountNumberField);

  if (amount === true) {
    readySubmit = true;
  }
  return readySubmit;
}

function nameFiledIsfelled(nameField) {
  if (nameField !== undefined) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

function phonenumberValidation(inputtxt) {
  if (inputtxt !== '') {
    return true;
  } else {
    return false;
  }
}

function checkAmoutOfProduct(ojectEL, currnetAmount) {
  if (Number(currnetAmount.value) <= ojectEL.count && Number(currnetAmount.value) > 0) {
    return true;
  } else {
    return false;
  }
}

function AmountOfSelectedProuct(element, amount) {
  this.product = element;
  this.amount = amount;
}

function amountOfProductsOnChange(idOfCurrentElement, number) {
  let elId = 'count' + idOfCurrentElement;
  let element = document.getElementById(elId);
  element.innerHTML = number;
}

function showNumberOfPositionsInBasket(numberOfItems) {
  let indicationPlace = document.querySelector('#numberOfItems');
  indicationPlace.innerHTML = numberOfItems;
}

function cancelBTN(buttonID, itemID) {
  document.querySelector(`#${buttonID}`).addEventListener('click', () => {
    document.querySelector(`#${itemID}`).remove();
  })
}