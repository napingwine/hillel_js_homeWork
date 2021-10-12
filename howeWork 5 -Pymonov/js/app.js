let cathegoriesContainer = document.getElementById("cathegories");
let productsContainer = document.getElementById("products__container");

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

getAllCathegories()
showAllCathegories()

// clean ProductCardsContainer and add new product cards
function showProducts(element) {
  element.addEventListener('click', () => {
    selectedCathegoryproducts = []//reset array before get new cathegory
    getProductsBySelectedCathegory(element)
    cleanContainer(productsContainer)
    createProductCardsContainer(element)
  })
};

// onClik of produck open pup up and get from user data
function bySelectedProduct(element) {
  element.addEventListener('click', () => {
    idOfCurrentElement = element.getAttribute('idOfProduct')
    let popUp = createPopup(getElementByID(idOfCurrentElement, selectedCathegoryproducts))
    let cancelBtn = document.getElementById('cancel')
    cancelBtn.addEventListener('click', () => {
      let popUpremove = document.querySelector('#popup')
      popUpremove.remove()
    })
    popUp.addEventListener('keyup', () => {
      // alert('1')
      if(allFieldsCorectlyFilled(getElementByID(idOfCurrentElement, selectedCathegoryproducts))){
        document.getElementById('submit').disabled = false;
      } else {
        document.getElementById('submit').disabled = true;
      }
    })
    document.getElementById('submit').addEventListener('click', () =>{
      alert(returnBill(getElementByID(idOfCurrentElement, selectedCathegoryproducts)))
    })
  })
}

