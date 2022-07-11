'use strict';

function createUserPagePopUp(currentUser, modify) {
  let usersArray = JSON.parse(localStorage.getItem('users'));

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

  if (modify === true) {
    createSaveBtn().addEventListener('click', () => {
      let warningsArray = document.querySelectorAll('.warning');
      for (let i = 0; i < warningsArray.length; i++) {
        warningsArray[i].remove();
      }
      if (checkRegexp() === 5) {
        localStorage.setItem('users', JSON.stringify(usersArray));
        popup.remove();
      }
    });
  }

  if (modify === 'newUser') {
    createSaveBtn().addEventListener('click', () => {
      if (checkRegexp() === 5) {
        let newUser = new User(document.forms[0].elements[0].value,document.forms[0].elements[1].value, document.forms[0].elements[2].value, document.forms[0].elements[3].value,document.forms[0].elements[4].value, document.forms[0].elements[5].value);
        usersArray.push(newUser);
        localStorage.setItem('users', JSON.stringify(usersArray));
        document.querySelector('.users-container').appendChild(usersTableRow(usersArray, usersArray.length-1))
        popup.remove();
      }
    });
  }

  popupContent.appendChild(userInfoContainer);
  popupContent.appendChild(btnContainer);

  function checkRegexp() {
    let correctFormCounter = 0;
    if (currentUser) {
      let usersContainer = document.querySelector('#users-container__wrapper');
      if (nameRegexp.test(document.forms[0].elements[0].value)) {
        correctFormCounter++;
        currentUser.uName = document.forms[0].elements[0].value;
      } else {
        btnContainer.parentElement.appendChild(createWarning('Please fill up name field properly! Use only a-z and A-Z'));
      }
      currentUser.password = document.forms[0].elements[1].value;
      if (ageRegexp.test(document.forms[0].elements[2].value)) {
        correctFormCounter++
        currentUser.age = document.forms[0].elements[2].value;
      } else {
        btnContainer.parentElement.appendChild(createWarning('Please fill up age field properly! Use only 0-9, max 200'));
      }
      if (emailRegexp.test(document.forms[0].elements[3].value)) {
        currentUser.email = document.forms[0].elements[3].value;
        correctFormCounter++;
      } else {
        btnContainer.parentElement.appendChild(createWarning('Please fill up email field properly! Example: expample@mail.com'));
      }
      if (phoneNumberRegexp.test(document.forms[0].elements[4].value)) {
        correctFormCounter++;
        currentUser.phoneNumber = document.forms[0].elements[4].value;
      } else {
        btnContainer.parentElement.appendChild(createWarning('Please fill up phone number field properly! Example: +380999999999'));
      }
      if (bankCardRegexp.test(document.forms[0].elements[5].value)) {
        correctFormCounter++;
        currentUser.bankCard = document.forms[0].elements[5].value;
      } else {
        btnContainer.parentElement.appendChild(createWarning('Please fill up bank card field properly! Example: xxxx xxxx xxxx xxxx, xxxx-xxxx-xxxx-xxxx or xxxxxxxxxxxxxxxx'));
      }
      usersContainer.innerHTML = '';
      usersContainer.appendChild(createUsersList(usersArray));
    }
    return correctFormCounter;
  }

  function createSaveBtn() {
    let saveBtn = document.createElement('div');
    saveBtn.classList.add('userBtn');
    saveBtn.innerText = 'save';
    saveBtn.setAttribute('id', 'saveBtn')
    btnContainer.appendChild(saveBtn);
    btnContainer.classList.add('edit-style-saveBtn');
    return saveBtn;
  }

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