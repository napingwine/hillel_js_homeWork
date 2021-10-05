let inputNumber = 7;
document.write(`Multiplication table ${inputNumber}: <br/><br/> `);
for(let i = 1; i<=10; i++){
  result = i*inputNumber;
  document.write(`${i} * ${inputNumber} = ${result} <br />`);
}