let a = prompt("Enter your 1st number")
let b = prompt("Enter your 2nd number")

if(((a % b) === 0) && ((b % a)===0)){
  alert('both number are divider for each other')
} else if((a % b) === 0){ 
  alert('b is divider of a')
}else if((b % a) === 0){
  alert('a is divider of b')
}else{
  alert('no one is divider for each other')
}