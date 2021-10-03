let result = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    result = result + i;
  }
}
document.write('The sum of only even numbers in the range 30 to 80: ' + result);
