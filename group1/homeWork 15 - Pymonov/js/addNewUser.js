let addBtn = document.querySelector('#addNewUser');

addBtn.addEventListener('click', () => {
  let newUser = new User;
  document.body.appendChild(createUserPagePopUp(newUser, 'newUser'));
})