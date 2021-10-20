function getNumber(text) {
  do {
    number = parseInt(prompt(`Please enter ${text}`));
  } while (isNaN(number))
  return number;
}

function addOwnerIfAgeIsSufficient(carName, user) {
  if (user.age > 18) {
    carName.addOwner(user);
  } else {
    console.log('Your age must be more than 18');
  }
}

function isSomeCarsWasProduced(productionYear) {
  if (Number(productionYear) < 1885) {
    alert('first car was produced at 1885, are you sure? please check car year production and enter again');
    return true;
  } else {
    return false;
  }
}

function isEmpty(variable) {
  if (variable.trim() === '') {
    alert('Please fillup all fields!');
    return true;
  } else {
    return false;
  }
}