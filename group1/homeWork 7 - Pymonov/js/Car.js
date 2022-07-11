function Car(brand, productionYear, horsePower, color, bodyType) {
  this.brand = brand;
  this.productionYear = productionYear;
  this.horsePower = horsePower;
  this.color = color;
  this.bodyType = bodyType;
  this.owner = 'N/A';

  this.addOwner = function (owner) {
    this.owner = owner;
  }

  this.introduceMyself = function (info) {
    if (this.owner === 'N/A') {
      console.log(`car brand: ${this.brand}, year of production: ${this.productionYear}, horse power: ${this.horsePower}, body type: ${this.bodyType}, car owner: ${this.owner}`);
    } else {
      console.log(`car brand: ${this.brand}, year of production: ${this.productionYear}, horse power: ${this.horsePower}, body type: ${this.bodyType}, car owner: ${info}`);
    }
  }
}