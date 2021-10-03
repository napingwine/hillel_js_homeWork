let squareNumber = 0;
document.write('Squares of numbers between 10 and 20: <br/>');
for(let i = 10; i<20; i++){
  squareNumber = i*i;
  document.write(squareNumber + ((i < 19) ? ', ' : '.'));
}