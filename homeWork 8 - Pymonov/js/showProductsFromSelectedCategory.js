function showProductsFromSelectedCategory(obj){
  obj.productsFromSelectedCategory = getProductsFromSelectedCategory(obj);
  return createProductCardsInContainer(obj)
}

function getProductsFromSelectedCategory(obj) {
  let data = obj.data;
  let category = obj.selectedCategory;
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

function createProductCardsInContainer(obj) {
  let productsContainer = document.createElement('div');
  let productsArray = obj.productsFromSelectedCategory;
  productsContainer.id = 'result-products-container';
    for (let k = 0; k < productsArray.length; k++) {
    let div = document.createElement('div');
    div.className = 'product-card';
    div.appendChild(createDiv(productsArray, 'name', 'Name', 'name', k));
    div.appendChild(createDiv(productsArray, 'price', 'Price', 'price', k));
    div.appendChild(createDiv(productsArray, 'amount', 'Amount', 'count', k));
    div.setAttribute('idOfProduct', `${productsArray[k].id}`);

    div.addEventListener('click', (e) => {
      obj.idOfSelectedElement = e.srcElement.attributes.idofproduct.value;
      document.body.appendChild(createPopup(obj));
    })
    productsContainer.appendChild(div);
  }
  return productsContainer;
}

function createDiv(productsArray, nameOfClass, text, property, iterator) {
  let div1 = document.createElement('div');
  div1.className = nameOfClass;
  let strongDiv1 = document.createElement('strong');
  strongDiv1.innerHTML = text;
  div1.appendChild(strongDiv1);
  let div11 = document.createElement('div');
  let id = "count" + productsArray[iterator].id;
  if (property === 'count') {
    div11.id = id;
  }
  div11.innerHTML = `${productsArray[iterator][property]}`;
  div1.appendChild(div11);
  return div1;
}

function createSelectedCategoryProductsContainer(){
  let div = document.createElement('div');
  div.className = 'result-products-container';
  div.classList.add('container');
  return div
}