function createUserForm(obj) {
  obj.hasDiscount = false;
  let finalForm = document.createElement('div');
  finalForm.className = 'final-form';
  finalForm.id = 'finalForm';
  finalForm.style.zIndex = 20;
  let isOk = false;

  let finalFormBody = document.createElement('div');
  finalFormBody.className = 'final-form__body';
  finalFormBody.id = 'finalForm';
  finalForm.appendChild(finalFormBody);

  let finalFormContent = document.createElement('form');
  finalFormContent.className = 'final-form__content';
  finalFormBody.appendChild(finalFormContent);

  let form = document.createElement('form');
  form.className = 'formWrapper';

  let nameLable = lableEl('Enter your name');
  let inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  nameLable.appendChild(inputName);
  finalFormContent.appendChild(nameLable);

  let cityLableEl = lableEl('Chose your city');
  cityLableEl.appendChild(createSelectForInput('cities', obj.citiesForPost));
  finalFormContent.appendChild(cityLableEl);

  let postOfficeAdressLable = lableEl('Enter post address');
  let postOfficeAdress = document.createElement('input');
  postOfficeAdress.setAttribute('type', 'text');
  postOfficeAdress.setAttribute('name', 'name');
  postOfficeAdressLable.appendChild(postOfficeAdress);
  finalFormContent.appendChild(postOfficeAdressLable);

  let payOptionsCashLableEl = lableEl('Сash');
  let payOptionsCash = document.createElement('input');
  payOptionsCash.setAttribute('type', 'radio');
  payOptionsCash.setAttribute('value', 'Cash');
  payOptionsCash.setAttribute('name', 'payType');
  payOptionsCashLableEl.appendChild(payOptionsCash);
  finalFormContent.appendChild(payOptionsCashLableEl);

  let payOptionsCardLableEl = lableEl('Сard');
  let payOptionsCard = document.createElement('input');
  payOptionsCard.setAttribute('type', 'radio');
  payOptionsCard.setAttribute('value', 'Card');
  payOptionsCard.setAttribute('name', 'payType');
  payOptionsCardLableEl.appendChild(payOptionsCard);
  finalFormContent.appendChild(payOptionsCardLableEl);

  let orderCommentsCardLableEl = lableEl('order-comments');
  orderCommentsCardLableEl.style.display = 'flex';
  orderCommentsCardLableEl.style.flexDirection = 'column';
  let orderComments = document.createElement('textarea');
  orderCommentsCardLableEl.appendChild(orderComments);
  orderComments.classList = 'order-comments';
  finalFormContent.appendChild(orderCommentsCardLableEl);

  let btnContainer = document.createElement('div');
  btnContainer.className = 'basket__btn-container';

  let cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('id', 'cancel');
  cancelBtn.innerHTML = '<-back';
  btnContainer.appendChild(cancelBtn);

  let submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.setAttribute('id', 'submit');
  submitBtn.innerHTML = 'send order';
  btnContainer.appendChild(submitBtn);
  finalFormContent.appendChild(btnContainer);

  cancelBtn.addEventListener('click', () => {
    finalForm.remove();
  });
  
  submitBtn.addEventListener('click', () => {
    obj.orderComment = orderComments.value;
    if (document.forms[0].elements[0].value && document.forms[0].elements[1].value !== 0 && document.forms[0].elements[2].value && document.forms[0].elements.payType.value && document.forms[0].elements[5].value) {
      isOk = true;
      finalFormContent.innerText = 'Congratulations! All data of your order was sent to our manager, please await for callback!';
      let accept = finalCloseBtn();
      finalFormContent.appendChild(accept);

      accept.addEventListener('click', ()=>{
        obj.basketArrayOfProducts = [];
        localStorage.setItem('basket', '');
      });

      let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
      let newOrder = new OrderForCabinet(obj);
      orderHistory.push(newOrder);
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    } else {
      isOk = false;
      finalFormContent.appendChild(emptyFormWarning());
    }
  });

  return finalForm;
}

function lableEl(text) {
  let lable = document.createElement('label');
  lable.innerText = text;
  return lable;
}

function createSelectForInput(nameOfSelect, arr) {
  let select = document.createElement('select');
  select.getAttribute('name', nameOfSelect);
  for (let i = 0; i < arr.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerText = arr[i];
    select.appendChild(option);
  }
  return select;
}

function emptyFormWarning() {
  let div = document.createElement('div');
  div.innerText = 'Please fill up all fields!';
  div.className = 'emty-form-warning';
  div.style.fontSize = '30px';
  div.style.color = 'red';
  return div;
}

function finalCloseBtn() {
  let btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.innerText = 'OK';
  btn.addEventListener('click', () => {
    document.querySelector('.basket').remove();
    document.querySelector('.final-form').remove();
  })
  return btn;
}

function OrderForCabinet(obj) {
  this.orderList = obj.basketArrayOfProducts;
  this.time = new Date();
  this.comment = obj.orderComment;
  if(obj.totalPriceOfBillWithDiscount >= obj.priceForDiscount){
    this.totalPriceOfOrder = obj.totalPriceOfBillWithDiscount;
    obj.hasDiscount = true;
  }else{
    this.totalPriceOfOrder = obj.totalPriceOfBill;
  }
  this.discount = obj.hasDiscount;
}