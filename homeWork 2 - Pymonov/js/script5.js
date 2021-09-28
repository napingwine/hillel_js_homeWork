let number = prompt("Enter your number")

const secondDidgit = number % 10
const firstDidgit = (number - secondDidgit)/10

if(firstDidgit > secondDidgit){
  alert("firstDidgit is bigger");
}else if(firstDidgit < secondDidgit){
  alert("secondDidgit is bigger");
}else{
  alert("digits are equal");
}