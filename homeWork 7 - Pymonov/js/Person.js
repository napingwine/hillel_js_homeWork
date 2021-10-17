function Person(pName, pAge) {
  this.name = pName,
  this.age = pAge,
  this.introduceMyself  = function() {
    console.log(`Hellow my name${this.pName}, I am ${this.pAge} years old.`)
  }
}

