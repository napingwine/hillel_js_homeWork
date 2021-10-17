function Car(brand, productionYear, horsePower, color, bodyType) {
  this.brand = brand,
  this.productionYear = productionYear,
  this.horsePower = horsePower,
  this.color = color,
  this.bodyType = bodyType,
  this.introduceMyself  = function() {
    console.log(`car brand: ${this.brand}, year of production: ${this.productionYear}, horse power: ${this.horsePower}, body type: ${this.bodyType}, car owner: ${this.owner}`);
  }
  this.addOwner = function(owner){
    this.owner = owner;
  }
}