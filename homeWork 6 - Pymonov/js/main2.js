const someArrey = ['sdad', 5, { bla: 1, blabla: 'sdss' }, -100, 'saddad', 'asdadas', 123, 10, -300, null, Infinity, undefined]
let sumOfAllNumbers = 0;
let numbersInArray = 0;
for(let i = 0; i < someArrey.length; i++){
  if(!isNaN(someArrey[i]) && someArrey[i] !== null && someArrey[i] !== Infinity){
    sumOfAllNumbers = sumOfAllNumbers + someArrey[i]
    numbersInArray++
  }
}
let arithmeticMean = sumOfAllNumbers/numbersInArray
console.log(arithmeticMean)