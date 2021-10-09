let result = 0;
let endNumber = 10;
for (let i = 1; i < endNumber; i++) {
  if (i !== 1) {
    document.write(' <br />');
  }
  for (let j = 1; j <= endNumber; j++) {
    result = j * i;
    document.write(`${j} * ${i} = ${result} <br />`);
  }
}