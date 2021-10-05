let result = 0;
for (let i = 1; i < 10; i++) {
  if (i !== 1) {
    document.write(' <br />');
  }
  for (let j = 1; j <= 10; j++) {
    result = j * i;
    document.write(`${j} * ${i} = ${result} <br />`);
  }
}