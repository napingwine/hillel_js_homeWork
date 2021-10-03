let a = 10;
document.write('Numbers between 10 and 20: <br/>');
for (let i = 0; i < 10; i++) {
  a++;
  document.write(a + ((i < 9) ? ', ' : '.'));
}