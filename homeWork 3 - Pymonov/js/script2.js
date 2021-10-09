let squareNumber = 0;
let number = 20;
let dotPlace = number - 1;

document.write('Squares of numbers between 10 and 20: <br/>');

for(let i = 10; i<number; i++){
  squareNumber = i*i;
  document.write(squareNumber + ((i < dotPlace) ? ', ' : '.'));
}
//