let number = Number(prompt('Enter your number'));
let square;
for (let i = 0; i < 100; i++) {
  square = i*i;
  document.write(square < number ? (square + ', ') : '');
}