function getProductFromArrayOfProducts(idOfProduct, array) {
  for (let i = 0; i < array.length; i++) {
    if(parseInt(idOfProduct) === array[i].id ){
      return array[i]
    }
  }
}