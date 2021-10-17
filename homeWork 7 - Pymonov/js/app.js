let pName = prompt('Please enter person name');
let pAge;
pAge = isItNumber(pAge, 'person age');
let brand = prompt('Please enter car brand');
let productionYear;
do{
  productionYear = isItNumber(productionYear, 'year production of car'); 
}while(!isSomeCarsWasProduced(productionYear))
let horsePower;
horsePower = isItNumber(horsePower, 'car horse power');
let color = prompt('Please enter car color');
let bodyType = prompt('Please enter car body type');

const user = new Person(pName, pAge)
const userCar = new Car(brand, productionYear, horsePower, color, bodyType)
addOwnerIfAgeIsSufficient(userCar, user)

console.log(user)
console.log(userCar)