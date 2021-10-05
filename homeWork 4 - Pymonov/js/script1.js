let lengthArreyFromUser = parseInt(prompt('Enter lenght of array'));
let numberFromUser; 
let arr = [];
let delNumberFrom = 2 - 1
let delNumber = 4 - 1

for(let i = 0; i < lengthArreyFromUser; i++){
  numberFromUser = parseInt(prompt(`Enter your ${i + 1} number`));
  arr.push(numberFromUser);
}

document.write(arr + '<br/>')

arr = arr.sort(compareNumeric)
document.write(arr + '<br/>')

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

if (lengthArreyFromUser > delNumber ){
  arr.splice(delNumberFrom,delNumber)
  document.write(arr)
}