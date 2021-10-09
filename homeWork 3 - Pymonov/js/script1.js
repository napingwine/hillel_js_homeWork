let number = 10;
document.write('Numbers between 10 and 20: <br/>');
let dotPlace = number - 1;
for (let i = 0; i < 10; i++) {
  number++;
  document.write(number + ((i < dotPlace) ? ', ' : '.'));
}