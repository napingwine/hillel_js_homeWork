let addBtn = document.querySelector('#addNewUser');

addBtn.addEventListener('click', () => {
  document.body.appendChild(createUserPagePopUp('', true))
})