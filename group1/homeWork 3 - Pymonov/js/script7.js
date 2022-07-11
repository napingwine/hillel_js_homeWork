let result = 0;
let startNumber = 30;
let stopNumber = 80;
for (let i = startNumber; i <= stopNumber; i++) {
  if (i % 2 === 0) {
    result = result + i;
  }
}
document.write(`The sum of only even numbers in the range ${startNumber} to ${stopNumber}: ` + result);