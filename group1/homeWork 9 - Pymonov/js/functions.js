// task 1
function createInput(id, attribute, attributeValue) {
  let input = document.createElement('input');
  input.setAttribute(attribute, attributeValue);
  input.id = id;
  return input;
}

function createDiv(id, text, clasName) {
  let div = document.createElement('div');
  div.className = clasName;
  div.id = id;
  div.innerText = text;
  return div;
}

//task 2
function createButton(someID, innerText) {
  let button = document.createElement('button');
  button.id = someID;
  button.innerText = innerText;
  return button;
}

//task3
function createTable(number) {
  tableWrapper.innerHTML = '';
  for (let i = 0; i < number; i++) {
    tableWrapper.appendChild(createDiv(('box' + i), i + 1, 'box'));
  }
}

//task 4
function getRandomPicture(min, imgArray, path) {
  let randomNumber = Math.floor(Math.random() * (imgArray.length - min) + min);
  let img = document.createElement('img');
  img.src = path + imgArray[randomNumber];
  return img;
}

//task 5
function createSmileElement(smileClass, id) {
  let divWrapper = document.createElement('div');
  divWrapper.className = 'wrapper';
  divWrapper.id = id;

  let smileEl = document.createElement('i');
  smileEl.className = smileClass;
  divWrapper.appendChild(smileEl);

  let likesValueEl = document.createElement('div');
  likesValueEl.className = 'likes-value';
  likesValueEl.innerText = 0;
  divWrapper.appendChild(likesValueEl);

  let buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'button-wrapper';
  divWrapper.appendChild(buttonWrapper);

  let buttonPlus = createButton('addLike' + id, '+');
  buttonWrapper.appendChild(buttonPlus);

  let buttonMinus = createButton('removeLike' + id, '-');
  buttonWrapper.appendChild(buttonMinus);

  return divWrapper;
}

function actionON(element) {
  element.lastChild.firstChild.addEventListener('click', () => {
    element.childNodes[1].innerText++;
  })
  element.lastChild.lastChild.addEventListener('click', () => {
    element.childNodes[1].innerText--;
  })
}

function createSmilesFromArray(smileArray) {
  for (let i = 0; i < smileArray.length; i++) {
    let smile = createSmileElement(smileArray[i], i);
    document.body.appendChild(smile);
    actionON(smile);
  }
}