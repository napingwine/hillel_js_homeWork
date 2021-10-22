let path = './img/';

function getRandomPicture(min, max, path) {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  let img = document.createElement('img');
  img.src = path + randomNumber + '.jpeg';
  return img;
}

document.body.appendChild(getRandomPicture(1, 11, path));