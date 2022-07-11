let number = prompt('Enter five-digit number')
let blabla = Number.isNaN(Number(number))
if(Number.isNaN(Number(number)) != false){
  alert('You enter not a number \n please Enter five-digit number')
}else if (number.length > 5){ 
  alert('Your number have more then 5 didgit')
} else if(number.length < 5) {
  alert('Your number have less then 5 didgit')
}else{ 
  alert( number[0] + ' ' + number[1]+ ' ' + number[2]+ ' ' + number[3]+ ' ' + number[4])
}