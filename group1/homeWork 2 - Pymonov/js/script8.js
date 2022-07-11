let number = prompt("Enter your number");

const sixthDigit = number % 10;
const fifthDigit = ((number - sixthDigit) / 10) % 10;
const fourthDigit = ((number - sixthDigit - fifthDigit * 10) / 100) % 10;
const thirdDigit = ((number - sixthDigit - fifthDigit * 10 - fourthDigit * 100) / 1000) % 10;
const secondDigit = ((number - sixthDigit - fifthDigit * 10 - fourthDigit * 100 - thirdDigit * 1000) / 10000) % 10;
const firstDigit = ((number - sixthDigit - fifthDigit * 10 - fourthDigit * 100 - thirdDigit * 1000 - secondDigit * 10000) / 100000) % 10;
if (number.length === 6 && Number.isNaN(Number(number)) !== true) {
  if (sixthDigit === firstDigit && fifthDigit === secondDigit && fourthDigit === thirdDigit) {
    alert("the specified six-digit number is mirrored")
  }else{
    alert(`${number} isn't mirrored`)
  }
} else {
  alert(`${number} isn't six-digit number`)
}

//one line solution 
//alert( number === number.split('').reverse().join('') ? "the specified six-digit number is mirrored": "the specified six-digit number isn't mirrored");