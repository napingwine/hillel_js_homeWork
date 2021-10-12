
// function that get all products in selected cathegory
function getProductsBySelectedCathegory(element) {
  for (let l = 0; l < products.length; l++) {
    if (element.innerHTML === products[l].category) {
      selectedCathegoryproducts.push(products[l])
    }
  }
};
// search in selectedCathegoryproducts seected object
function getElementByID(selectedItemID, array) {
  let id = selectedItemID;
  for (let i = 0; i < array.length; i++) {
    if (Number(id) === array[i].id) {
      return array[i]
    }
  }
}

function allFieldsCorectlyFilled(ojectEL) {
  let readySubmit = false
  let nameField = document.querySelector('#user-name')
  let emailField = document.querySelector('#user-email')
  let phoneNumberField = document.querySelector('#user-phonenumber')
  let amountNumberField = document.querySelector('#product-amount')
  let name = nameFiledIsfelled(nameField)
  let email = validateEmail(emailField.value)
  let phone = phonenumberValidation(phoneNumberField.value)
  let amount = checkAmoutOfProduct(ojectEL, amountNumberField)

  if(name === true && email === true && phone === true && amount === true){
   readySubmit = true
  }
  return readySubmit
}

function nameFiledIsfelled(nameField){
  if(nameField !== undefined){
    return true
  }else{
    return false
  }
}

function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  }else{
    return false
  }
}

function phonenumberValidation(inputtxt){
  if(inputtxt !== ''){
    return true
  }else{
    return false
  }
}

function checkAmoutOfProduct(ojectEL,currnetAmount){
  if(Number(currnetAmount.value) <= ojectEL.count && Number(currnetAmount.value) > 0){
    return true
  }else{
    return false
  }
}

function returnBill(currentElement){
  let amountNumberField = document.querySelector('#product-amount').value
  let userEmail = document.querySelector('#user-email').value
  let total = currentElement.price * Number(amountNumberField)
  let totalWithDiscount = total - (discount/100)
  let answer;
  if(priceForDiscount < totalWithDiscount){
    answer = `Your Bill: ${totalWithDiscount} due to you bill without discount more than ${priceForDiscount}. All info send on ${userEmail}`
  }else{
    answer = `Your Bill: ${total}. All info send on ${userEmail}`
  }
  
  return answer
}