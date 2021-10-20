let pName;
let pAge;
let brand;
let productionYear;
let horsePower;
let color;
let bodyType;

const user = new Person(pName, pAge);
const userCar = new Car(brand, productionYear, horsePower, color, bodyType);
addOwnerIfAgeIsSufficient(userCar, user);
let userInfo = user.introduceMyself();

console.log(userInfo)
console.log(user)
console.log(userCar)
userCar.introduceMyself(userInfo)