let pName;
let pAge;
let brand;
let productionYear;
let horsePower;
let color;
let bodyType;

do {
  pName = prompt('Please enter person name');
} while (isEmpty(pName));

pAge = getNumber('person age');

do {
  brand = prompt('Please enter car brand');
} while (isEmpty(brand));

do {
  productionYear = getNumber('year production of car');
} while (isSomeCarsWasProduced(productionYear));

horsePower = getNumber('car horse power');

do {
  color = prompt('Please enter car color');
} while (isEmpty(color));

do {
  bodyType = prompt('Please enter car body type');
} while (isEmpty(bodyType));

const user = new Person(pName, pAge);
const userCar = new Car(brand, productionYear, horsePower, color, bodyType);
addOwnerIfAgeIsSufficient(userCar, user);
let userInfo = user.introduceMyself();

console.log(user)
console.log(userCar)
userCar.introduceMyself(userInfo)