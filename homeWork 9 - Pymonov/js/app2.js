let link;
dataRequestButton = createButton('dataRequestButton', 'press me');
linkButton = createButton('linkButton', 'here your link');
document.body.appendChild(dataRequestButton);
document.body.appendChild(linkButton);

document.querySelector('#dataRequestButton').addEventListener('click', function () {
  link = prompt('please enter link');
  if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
    link = link;
  } else {
    link = 'http://' + link;
  }
})

linkButton.addEventListener('click', () => {
  location.href = link;
})