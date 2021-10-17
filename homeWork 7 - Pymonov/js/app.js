let pName;
let pAge;
let brand;
let productionYear;
let horsePower;
let color;
let bodyType;

do{
  pName = prompt('Please enter person name');
}while(!isItEmpty(pName))
pAge = isItNumber(pAge, 'person age');
do{
  brand = prompt('Please enter car brand');
}while(!isItEmpty(brand))
do{
  productionYear = isItNumber(productionYear, 'year production of car'); 
}while(!isSomeCarsWasProduced(productionYear))
horsePower = isItNumber(horsePower, 'car horse power');
do{
  color = prompt('Please enter car color');
}while(!isItEmpty(color))
do{
  bodyType = prompt('Please enter car body type');
}while(!isItEmpty(bodyType))

const user = new Person(pName, pAge)
const userCar = new Car(brand, productionYear, horsePower, color, bodyType)
addOwnerIfAgeIsSufficient(userCar, user)

console.log(user)
console.log(userCar)