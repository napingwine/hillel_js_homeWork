let userName = document.querySelector('[name=\'login\']');
let userPassword = document.querySelector('[name=\'password\']');
let userdateOfBirth = document.querySelector('[name=\'dateOfBirth\']');
let userAge = document.querySelector('[name=\'age\']');
let userEmail = document.querySelector('[name=\'email\']');
let userGender = document.forms[0].elements.gender;
let userLanguages = document.querySelectorAll('[name=\'languages\']');
let saveBtn = document.querySelector('#save-btn');

let resultContainer = document.querySelector('.result-container');

function createTableRow(keyCellText, valueCellText) {
  let rowWrapper = document.createElement('div');
  rowWrapper.className = 'table__row__wrapper';

  let keyCell = document.createElement('div');
  keyCell.className = 'table__row__key-cell';
  keyCell.innerText = keyCellText;
  rowWrapper.appendChild(keyCell);

  let valueCell = document.createElement('div');
  valueCell.className = 'table__row__value-cell';
  valueCell.innerText = valueCellText;
  rowWrapper.appendChild(valueCell);
  return rowWrapper;
}

function getUserLanguages(){
  let selectedLanguagesArray = [];
  for (let i = 0; i < userLanguages.length; i++) {
    if(userLanguages[i].checked === true){
      selectedLanguagesArray.push(userLanguages[i].value)
    }
  }
  selectedLanguagesArray.join();
  return selectedLanguagesArray;
}

// console.log(userName.name)
saveBtn.addEventListener('click', () => {
  resultContainer.innerHTML = '';
  resultContainer.appendChild(createTableRow('User Name', userName.value));
  resultContainer.appendChild(createTableRow('User Password', userPassword.value));
  resultContainer.appendChild(createTableRow('User Birthday', userdateOfBirth.value));
  resultContainer.appendChild(createTableRow('User Age', userAge.value));
  resultContainer.appendChild(createTableRow('User Email', userEmail.value));
  resultContainer.appendChild(createTableRow('User Gender', userGender.value));
  resultContainer.appendChild(createTableRow('User Languages', getUserLanguages()));
})

