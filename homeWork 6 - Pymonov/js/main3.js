let number1;
let number2;
let znak;
let result;

do {
  number1 = prompt('please enter 1st number');
} while (isNaN(number1))

do {
  number2 = prompt('please enter 2nd number');
} while (isNaN(number2))

do {
  znak = prompt('please enter operator(+,-,*,/,% or ^)');
} while (znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/' && znak !== '%' && znak !== '^')

number1 = Number(number1);
number2 = Number(number2);

function doMath(number1, number2, znak) {
  if (znak === '+') {
    result = number1 + number2;
  } else if (znak === '-') {
    result = number1 - number2;
  } else if (znak === '*') {
    result = number1 * number2;
  } else if (znak === '/') {
    result = number1 / number2;
  } else if (znak === '%') {
    result = number1 % number2;
  } else if (znak === '^') {
    result = pow(number1, number2);
  }
}

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
doMath(number1, number2, znak);

console.log(`${number1}${znak}${number2}=${result}`);