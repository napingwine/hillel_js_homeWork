function forClikedCard(event, arrayWithproductsFromSelectedCategory) {
  let currentElementID = event.target.attributes.idofproduct.value;
  let currentProduct = getProductFromArrayOfProducts(currentElementID, arrayWithproductsFromSelectedCategory);
  let popup = createPopup(currentProduct);
  document.body.appendChild(popup);
  popup.addEventListener('click', cancelBtnFN('#cancel', '#popup'));
}

function cleanProductsContainer() {
  if (document.querySelector('#result-products-container')) {
    document.querySelector('#result-products-container').remove();
  }
}

function AmountOfSelectedProuct(element, amount) {
  this.product = element;
  this.amount = amount;
}

function cancelBtnFN(idOfBTN,idOfEL) {
  document.querySelector(idOfBTN).addEventListener('click', () => {
    document.querySelector(idOfEL).remove();
  })
}

function pushSelectedProductWithAmount(id, array, amount){
  for (let i = 0; i < array.length; i++) {
    if(Number(id) === array[i].id ){
      let selectedProductWithAmount = new AmountOfSelectedProuct(array[i], amount);
      return selectedProductWithAmount;
    }
  }
}