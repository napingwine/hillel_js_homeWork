function Person(pName, pAge) {
  this.name = pName;
  this.age = pAge;

  this.introduceMyself = function () {
   return (`Name: ${this.name}, Age: ${this.age} years old.`);
  }
}