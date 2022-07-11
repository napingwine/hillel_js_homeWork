let number = prompt("Enter your number")

const thirdDidgit = number % 10
const secondDidgit = ((number - thirdDidgit) /10 ) % 10
const firstDidgit = ((number - thirdDidgit - secondDidgit*10)/100)%10


if( firstDidgit ===  secondDidgit &&  secondDidgit === thirdDidgit){
  alert(`all didgits in number: ${number} are equal`)
}else if ( firstDidgit ===  secondDidgit ||  secondDidgit === thirdDidgit || firstDidgit === thirdDidgit){ 
  alert(`2 didgits in number: ${number} are equal`)
}else{
  alert(`no one equal didgits in number: ${number}`)
}