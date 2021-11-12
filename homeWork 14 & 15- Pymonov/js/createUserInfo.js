'use strict';


function createUserPagePopUp(currentUser, modify) {
  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = 'popup';

  let popupBody = document.createElement('div');
  popupBody.className = 'popup__body';
  popup.appendChild(popupBody);

  let popupContent = document.createElement('div');
  popupContent.className = 'popup__content';
  popupBody.appendChild(popupContent);

  let popupTitle = document.createElement('div');
  popupTitle.className = 'popup__title';
  popupTitle.innerText = `User Info`;
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
  userInfoContainer.classList.add('user-info-container')
  userInfoContainer.appendChild(createInputWithLable('Name: ', currentUser.uName, false));
  userInfoContainer.appendChild(createInputWithLable('Password: ', currentUser.password, false));
  userInfoContainer.appendChild(createInputWithLable('Age: ', currentUser.age, false));
  userInfoContainer.appendChild(createInputWithLable('Email: ', currentUser.email, false));
  userInfoContainer.appendChild(createInputWithLable('Phone Number: ', currentUser.phoneNumber, false));
  userInfoContainer.appendChild(createInputWithLable('Bank Card: ', currentUser.bankCard, false));
    
  popupContent.appendChild(userInfoContainer);
  popupContent.appendChild(btnContainer);
  return popup;
}

function createInputWithLable(lableText, inputText, modify) {
  let lable = document.createElement('label');
  lable.innerText = lableText;

  let input = document.createElement('input');
  if (modify === false) {
    input.classList.add('readOnlyInput');
    input.value = inputText;
    input.readOnly = true;
  } else {
    input.value = inputText;
    // HERE ADD MODIFY EDIT OF USER INFO
  }
  
  lable.appendChild(input);


  return lable;
}