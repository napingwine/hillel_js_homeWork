let number = prompt('Enter your natural number:');
let numberOfDivisors = 0;
let sumOfEvenDivisors = 0;
document.write(`1) All divisors of number ${number}: `);
for (var i=1; i<=number; i++) {
  if (number%i==0) {
    document.write(i + ((i < (number-1)) ? ', ' : '.'));
    numberOfDivisors++
    sumOfEvenDivisors = sumOfEvenDivisors + i
  }
}
document.write(`<br/> 2) Number of even divisors of ${number}: ${numberOfDivisors}.`);
document.write(`<br/> 3) Sum of even divisors of ${number}: ${sumOfEvenDivisors}.`);