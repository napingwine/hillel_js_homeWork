let lableForInput = document.createElement('lable');
lableForInput.setAttribute('for', 'numberOfDivs');
lableForInput.innerText = 'Enter number of cels  ';
document.body.appendChild(lableForInput);
let inputElement = createInput('numberOfDivs', 'type', 'number');
document.body.appendChild(inputElement);
let tableWrapper = document.createElement('div');
tableWrapper.className = 'tabler-wrapper';
document.body.appendChild(tableWrapper);
document.body.style.flexDirection = 'column';

inputElement.addEventListener('keyup', () => {
  let numberOfDives = inputElement.value;
  createTable(numberOfDives);
})