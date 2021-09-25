let num1 = prompt('Enter 1st number')
let num2 = prompt('Enter 2nd number')
if(Number.isNaN(Number(num1)) != false || Number.isNaN(Number(num2)) != false){
  alert('You enter not a number ')
}
if ( num1 == ''){ num1 = 0}
if ( num2 == ''){ num2 = 0}
let sum = Number(num1) + Number(num2)
let sub = Number(num1) - Number(num2)
if (num2 == 0){
   div = 'infinity'
  }else {
var div = Number(num1) / Number(num2)
}
let mul = Number(num1) * Number(num2)
alert( `the result of adding numbers ${num1} and ${num2} is ${sum} \n 
result of subtraction of numbers ${num1} and ${num2} is ${sub} \n
result of dividing of numbers ${num1} and ${num2} is ${div} \n
result of  multiplication of numbers ${num1} and ${num2} is ${mul}`)