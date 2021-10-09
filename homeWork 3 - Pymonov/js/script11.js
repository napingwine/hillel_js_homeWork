let startNumber = 20;
let stopNumber = 30;
let stepNumber = 0.5;
document.write(`Numbers from ${startNumber} to ${stopNumber} with a step of 0.5: <br/>`)
for (let i = startNumber; i <= stopNumber; i = i + stepNumber) {
  document.write(i + ' ')
}
//