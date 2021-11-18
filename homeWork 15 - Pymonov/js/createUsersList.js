'use strict';

function createUsersList(usersData) {
  let usersContainer = document.createElement('div');
  usersContainer.className = 'users-container';
  let us = usersData;
  for (let i = 0; i < us.length; i++) {
    usersContainer.appendChild(usersTableRow(us, i));
  }
  return usersContainer;
}

function usersTableRow(us, numberOfUser) {
  let userName = us[numberOfUser].uName;
  let userId = us[numberOfUser].userId;
  let currentUser = getUserById(userId, us);

  let row = document.createElement('div');
  row.className = 'row';
  row.setAttribute('data-userId', userId)

  let uName = document.createElement('div');
  uName.className = 'user-name';
  uName.innerText = userName;
  row.appendChild(uName);

  let editBtn = document.createElement('div');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('userBtn');
  row.appendChild(editBtn);

  let viewBtn = document.createElement('div');
  viewBtn.innerText = 'View';
  viewBtn.classList.add('userBtn');
  row.appendChild(viewBtn);

  let removeBtn = document.createElement('div');
  removeBtn.innerText = 'Remove';
  removeBtn.classList.add('userBtn');
  row.appendChild(removeBtn);

  viewBtn.addEventListener('click', () => {
    document.body.appendChild(createUserPagePopUp(currentUser, false));
  });
  removeBtn.addEventListener('click', () => {
    document.body.appendChild(usersRemoveConfirmation(userId, removeBtn.parentNode));
  });
  editBtn.addEventListener('click', () => {
    document.body.appendChild(createUserPagePopUp(currentUser, true));
  });
  return row;
}

function usersRemoveConfirmation(userId, elementForRemove) {
  let usersData = JSON.parse(localStorage.getItem('users'));
  let currentUser = getUserById(userId, usersData);

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
  popupTitle.innerText = `Remove User?`;
  popupContent.appendChild(popupTitle);

  let btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  let confirmBtn = document.createElement('div');
  confirmBtn.classList.add('userBtn');
  confirmBtn.innerText = 'ok';

  btnContainer.appendChild(confirmBtn);

  let cancelBtn = document.createElement('div');
  cancelBtn.classList.add('userBtn');
  cancelBtn.innerText = 'no';
  btnContainer.appendChild(cancelBtn);

  popupContent.appendChild(btnContainer);

  cancelBtn.addEventListener('click', () => {
    popup.remove();
  });

  confirmBtn.addEventListener('click', () => {
    usersData.splice(usersData.indexOf(currentUser), 1);
    elementForRemove.remove();
    popup.remove();
    localStorage.setItem('users', JSON.stringify(usersData));
  });

  return popup;
}

function getUserById(userId, usersData) {
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].userId === userId) {
      return usersData[i];
    }
  }
}