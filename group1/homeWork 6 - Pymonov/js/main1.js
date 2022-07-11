let i = 0
function outer(){
  let number = 0;
  return function inner(userNumber){
    number = number + userNumber
    console.log(number)
  }
}
let someFunction = outer();
