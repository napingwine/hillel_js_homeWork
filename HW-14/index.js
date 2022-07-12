obj = {
  x: 10,
  y: 20,
  inner: {
    x: 20,
    z: 30
  },
  foo2: {
    k: 23,
    p: 13,
    foo4: {
      qwe: 123,
      rer: 1234
    }
  }
}

const reduceObj = (someObj) => {
  let newObj = {}
  for (key in someObj) {
    if (typeof someObj[key] !== 'object') {
      newObj[key] = someObj[key]
    } else {
      newObj = { ...newObj, ...reduceObj(someObj[key]) }
    }
  }
  return newObj
}

console.log(reduceObj(obj))