let result = 0;
let finalResult = 0;
let inputNumber = 500;
for (let i = 0; i <= inputNumber; i++) {
  result = result + i;
}
finalResult = result / inputNumber;
document.write('Arithmetic mean of all integers from 1 to 500: ' + finalResult);