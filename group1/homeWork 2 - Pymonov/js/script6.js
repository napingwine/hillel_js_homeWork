let number = prompt("Enter your number")

const thirdDidgit = number % 10
const secondDidgit = ((number - thirdDidgit) /10 ) % 10
const firstDidgit = ((number - thirdDidgit - secondDidgit*10)/100)%10

let sum = thirdDidgit + secondDidgit + firstDidgit
let multiplication = thirdDidgit * secondDidgit * firstDidgit

if ( sum% 2 === 0 ){
  alert(`sum if didgits of number: ${number} are even `)
}else {
  alert(`sum if didgits of number: ${number} are odd `)
}

if(sum % 5 === 0 ){
  alert(`sum if didgits of number: ${number} aliquot of 5`)
}else {
  alert(`sum if didgits of number: ${number} is not aliquot of 5`)
}

if(multiplication  > 100 ){
  alert(`multiplication if didgits of number: ${number} more than 100`)
}else {
  alert(`multiplication if didgits of number: ${number} less than 100`)
}