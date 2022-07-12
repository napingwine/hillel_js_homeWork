assignObjects = (a,b) => {
 return Object.assign(a,b)
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }))
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }))