let result = 0;
let finalResult = 0;
for (let i = 0; i <= 500; i++) {
  result = result + i;
}
finalResult = result / 500;
document.write('Arithmetic mean of all integers from 1 to 500: ' + finalResult);