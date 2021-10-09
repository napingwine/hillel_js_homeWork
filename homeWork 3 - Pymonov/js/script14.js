let number = prompt("Enter your number");
let isSimple = true;
for (let i = 0; i < number; i++) {
  if ((number < 1 || number%i === 0) && i !== 1) {
    isSimple = false;
    break;
  }
}
document.write(`Number is simple: ${isSimple}`);
//