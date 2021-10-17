let someString = prompt('Enter your data')
console.log(someString)
let symbolArrey = prompt('Enter your symbol for deletion from data')
someString = someString.split('')
symbolArrey = symbolArrey.split('')

function deleteSymbolsFromSentence(symbolArrey, symbol) {
  for (let i = 0; i < symbolArrey.length; i++){
    if(symbolArrey[i] === symbol){
      symbolArrey.splice(symbolArrey.indexOf(symbolArrey[i]), 1)
      i--
    }
  }
}

for( let j = 0; j < symbolArrey.length; j++){
  deleteSymbolsFromSentence(someString, symbolArrey[j])
}

someString = someString.join('')
console.log(someString)