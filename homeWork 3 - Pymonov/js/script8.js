document.write('All numbers in the range from 100 to 200 are multiples of 3: ');
let startNumber = 100;
let endNumber = 200;
let dotPlace = endNumber - 3;
for (let i = startNumber; i <= endNumber; i++) {
  if (i % 3 === 0) {
    document.write(i + ((i < dotPlace) ? ', ' : '.'));
  }
}