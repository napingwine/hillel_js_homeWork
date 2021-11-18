'use strict';

const nameRegexp = /^[a-zA-Z\-]+$/;
const ageRegexp = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberRegexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const bankCardRegexp = /\d{4}([-]|)\d{4}([-]|)\d{4}([-]|)\d{4}/;

function createUserPagePopUp(currentUser, modify) {
  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = 'popup';

  let popupBody = document.createElement('div');
  popupBody.className = 'popup__body';
  popup.appendChild(popupBody);

  let popupContent = document.createElement('form');
  popupContent.className = 'popup__content';
  popupContent.setAttribute('data-user-id', currentUser.userId);
  popupBody.appendChild(popupContent);

  let popupTitle = document.createElement('div');
  popupTitle.className = 'popup__title';
  popupTitle.innerText = 'User Info';
  popupContent.appendChild(popupTitle);

  let btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  let cancelBtn = document.createElement('div');
  cancelBtn.classList.add('userBtn');
  cancelBtn.innerText = 'back';
  btnContainer.appendChild(cancelBtn);

  cancelBtn.addEventListener('click', () => {
    popup.remove();
  });

  let userInfoContainer = document.createElement('div');
  userInfoContainer.classList.add('user-info-container');
  userInfoContainer.appendChild(createInputWithLable('Name: ', currentUser.uName, modify));
  userInfoContainer.appendChild(createInputWithLable('Password: ', currentUser.password, modify));
  userInfoContainer.appendChild(createInputWithLable('Age: ', currentUser.age, modify));
  userInfoContainer.appendChild(createInputWithLable('Email: ', currentUser.email, modify));
  userInfoContainer.appendChild(createInputWithLable('Phone Number: ', currentUser.phoneNumber, modify));
  userInfoContainer.appendChild(createInputWithLable('Bank Card: ', currentUser.bankCard, modify));

  if (modify) {
    let correctFormCounter = 0;
    let saveBtn = document.createElement('div');
    saveBtn.classList.add('userBtn');
    saveBtn.innerText = 'save';
    btnContainer.appendChild(saveBtn);
    btnContainer.classList.add('edit-style-saveBtn');

    saveBtn.addEventListener('click', e => {
      correctFormCounter = 0;
      let warningsArray = document.querySelectorAll('.warning');
      for (let i = 0; i < warningsArray.length; i++) {
        warningsArray[i].remove();
      }
      let usersArray = JSON.parse(localStorage.getItem('users'));
      if (currentUser !== '') {
        for (let i = 0; i < usersArray.length; i++) {
          if (document.forms[0].getAttribute('data-user-id') === usersArray[i].userId) {
            let usersContainer = document.querySelector('#users-container__wrapper');
            let userName = document.forms[0].elements[0].value;
            if (userName.match(nameRegexp) !== null) {
              correctFormCounter++;
              usersArray[i].uName = userName;
            } else {
              btnContainer.parentElement.appendChild(createWarning('Please fill up name field properly! Use only a-z and A-Z'));
            }
            usersArray[i].password = document.forms[0].elements[1].value;
            let userAge = document.forms[0].elements[2].value;
            if (userAge.match(ageRegexp) !== null) {
              correctFormCounter++;
              usersArray[i].age = userAge;
            } else {
              btnContainer.parentElement.appendChild(createWarning('Please fill up age field properly! Use only 0-9, max 200'));
            }
            let userEmail = document.forms[0].elements[3].value;
            if (userEmail.match(emailRegexp) !== null) {
              correctFormCounter++;
              usersArray[i].email = userEmail;
            } else {
              btnContainer.parentElement.appendChild(createWarning('Please fill up email field properly! Example: qwert@gmail.com'));
            }
            let userPhone = document.forms[0].elements[4].value;
            if (userPhone.match(phoneNumberRegexp) !== null) {
              correctFormCounter++;
              usersArray[i].phoneNumber = userPhone;
            } else {
              btnContainer.parentElement.appendChild(createWarning('Please fill up phone number field properly! Example: +380999999999'));
            }
            let userBankCard = document.forms[0].elements[5].value;
            if (userBankCard.match(bankCardRegexp) !== null) {
              correctFormCounter++;
              usersArray[i].bankCard = userBankCard;
            } else {
              btnContainer.parentElement.appendChild(createWarning('Please fill up bank card field properly! Example: xxxx-xxxx-xxxx-xxxx or xxxxxxxxxxxxxxxx'));
            }
            usersContainer.innerHTML = '';
            usersContainer.appendChild(createUsersList(usersArray));
          }
        }
      } else {

      }
      if (correctFormCounter === 5) {
        localStorage.setItem('users', JSON.stringify(usersArray));
        popup.remove();
      }
    });
  }

  popupContent.appendChild(userInfoContainer);
  popupContent.appendChild(btnContainer);
  return popup;
}

function createInputWithLable(lableText, inputText, modify) {
  let lable = document.createElement('label');
  lable.classList.add('form-lable')
  lable.innerText = lableText;

  let input = document.createElement('input');
  if (inputText === undefined) {
    inputText = '';
  }
  input.value = inputText;
  if (modify === false) {
    input.classList.add('readOnlyInput');
    input.readOnly = true;
  }

  lable.appendChild(input);
  return lable;
}

function createWarning(text) {
  let div = document.createElement('div');
  div.classList.add('warning');
  div.innerText = text;
  return div;
}

function checkRegexp(regexp, formElementIndex, warningText, userProperty) {
  if (document.forms[0].elements[formElementIndex].value.match(regexp) !== null) {
    userProperty = document.forms[0].elements[formElementIndex].value;
  } else {
    return createWarning(warningText);
  }
}