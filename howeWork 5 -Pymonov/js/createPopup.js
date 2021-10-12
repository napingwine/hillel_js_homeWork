function createPopup(productOject) {
  let popup = document.createElement('div')
  popup.className = 'popup';
  popup.id = 'popup';
  let poopupBody = document.createElement('div')
  poopupBody.className = 'popup__body';
  popup.appendChild(poopupBody)
  let popupContent = document.createElement('div')
  popupContent.className = 'popup__content'
  poopupBody.appendChild(popupContent)
  let popupTitle = document.createElement('div')
  popupTitle.className = 'popup__title'
  popupTitle.innerHtml = 'Requsition Form'
  popupContent.appendChild(popupTitle)
  let popupForm = document.createElement('div')
  popupForm.className = 'popup__form'
  popupContent.appendChild(popupForm)
  let productNameLable = createLable('product__name', 'Name:')
  popupForm.appendChild(productNameLable)
  let productName =  createProductDiv(productOject, 'name')
  popupForm.appendChild(productName)
  let productPriceLable = createLable('product__name', 'Price')
  popupForm.appendChild(productPriceLable)
  let productPrice =  createProductDiv(productOject, 'price')
  popupForm.appendChild(productPrice)
  let productAmountLable = createLable('product__name', 'Availeble amount:')
  popupForm.appendChild(productAmountLable)
  let productAmount =  createProductDiv(productOject, 'count')
  popupForm.appendChild(productAmount)
  let userNameLable = createLable('user-name', 'Enter your Name:')
  popupForm.appendChild(userNameLable)
  let userName = createInput('text', 'user-name', 'user-name')
  popupForm.appendChild(userName)
  let userEmailLable = createLable('user-email', 'Enter your Email:')
  popupForm.appendChild(userEmailLable)
  let userEmail = createInput('email', 'user-email', 'user-email')
  popupForm.appendChild(userEmail)
  let userPhonenumberLable = createLable('user-phonenumber', 'Enter your Phone Number:')
  popupForm.appendChild(userPhonenumberLable)
  let userPhonenumber = createInput('tel', 'user-phonenumber', 'user-phonenumber')
  popupForm.appendChild(userPhonenumber)
  let userProductAmountLable = createLable('product-amount', 'Enter amount produt for order:')
  popupForm.appendChild(userProductAmountLable)
  let userProductAmount = createInput('number', 'product-amount', 'product-amount')
  popupForm.appendChild(userProductAmount)
  let btnContainer = document.createElement('div')
  btnContainer.className = 'btn-container'
  let cancelBtn = document.createElement('button')
  cancelBtn.setAttribute('id', 'cancel')
  cancelBtn.innerHTML = 'cancel'
  btnContainer.appendChild(cancelBtn)
  let submitBtn = document.createElement('button')
  submitBtn.setAttribute('id', 'submit')
  submitBtn.disabled = true
  submitBtn.innerHTML = 'submit'
  btnContainer.appendChild(submitBtn)
  popupForm.appendChild(btnContainer)
  document.body.append(popup)
  return popup
}

function createLable(valuOfattribute, text) {
  let lable = document.createElement('lable')
  lable.setAttribute('for', valuOfattribute)
  lable.innerHTML = text
  return lable
}

function createProductDiv(productOject, objectproperty) {
  let div = document.createElement('div')
  div.className = 'product__name'
  div.id = 'product__name'
  div.innerHTML = productOject[objectproperty]
  return div
}

function createInput(type, name, id){
  let input = document.createElement('input')
  input.setAttribute('type', type)
  input.setAttribute('name', name)
  input.setAttribute('id', id)
  return input
}