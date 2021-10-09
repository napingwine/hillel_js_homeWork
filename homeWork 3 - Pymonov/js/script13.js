let number = Number(prompt('Enter your number'));
let stopNumber = 100;
let square;
if (number === 0) {
  alert(`N\\A`)
} else {
  for (let i = 0; i < stopNumber; i++) {
    square = i * i;
    document.write(square < number ? (square + ', ') : '');
  }
}
//