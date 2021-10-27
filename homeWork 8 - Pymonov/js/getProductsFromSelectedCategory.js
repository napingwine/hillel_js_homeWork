function getProductsFromSelectedCategory(category, data) {
  let productsFromSelectedCategory = [];
  for (let i = 0; i < data.length; i++) {
    for(let j = 0; j < data[i].categories.length; j++){
      if(category === data[i].categories[j]){
        productsFromSelectedCategory.push(data[i]);
      }
    }
  }
  return productsFromSelectedCategory;
}