document.write('All numbers in the range from 100 to 200 are multiples of 3: ');
let dotPlace = 200 - 3;
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    document.write(i + ((i < dotPlace) ? ', ' : '.'));
  }
}
