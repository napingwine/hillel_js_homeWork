function createArrey() {
  let outerArray = [];
  let outerArrayLength;
  let innerArraylenght
  do {
    outerArrayLength = prompt('Enter outer array length: ');
  } while (isNaN(outerArrayLength));
  outerArray.length = outerArrayLength;

  for (let i = 0; i < outerArray.length; i++) {
    console.log(outerArray.length)
    outerArray[i] = [];
    do {
      innerArraylenght = prompt('Enter inner array length: ');
    } while (isNaN(outerArray[i]));
    outerArray[i].length = innerArraylenght;
    for (let j = 0; j < outerArray[i].length; j++) {
      outerArray[i][j] = prompt('enter some value')
    }
  }
  console.log(outerArray);
}

createArrey();