let number = Number(prompt('Enter your number'));
let result = 1;
let i = 0;
for(i; number > result; i++){
  result = result * 3;
}
document.write(result === number ? `power of ${number} is ${i}`:'no');