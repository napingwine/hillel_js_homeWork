'use strict';

//This functions create Products Cards in products__container
function createProductCardsContainer(element) {
  for (let k = 0; k < selectedCathegoryproducts.length; k++) {
    if (element.innerHTML === selectedCathegoryproducts[k].category) {
      let div = document.createElement('div');
      div.className = 'product-card';
      div.appendChild(createDiv('name', 'Name', 'name', k));
      div.appendChild(createDiv('price', 'Price', 'price', k));
      div.appendChild(createDiv('amount', 'Amount', 'count', k));
      div.setAttribute('idOfProduct', `${selectedCathegoryproducts[k].id}`);
      productsContainer.appendChild(div);
      bySelectedProduct(div);
    }
  }
}
// structure of output: <div class='classname'><strong>innnerhtml</strong>property</div>
function createDiv(classname, innnerhtml, property, iterator) {
  let div1 = document.createElement('div');
  div1.className = classname;
  let strongDiv1 = document.createElement('strong');
  strongDiv1.innerHTML = innnerhtml;
  div1.appendChild(strongDiv1);
  let div11 = document.createElement('div');
  let id = "count" + selectedCathegoryproducts[iterator].id;
  if(property === 'count'){
    div11.id = id;
  }
  div11.innerHTML = `${selectedCathegoryproducts[iterator][property]}`;
  div1.appendChild(div11);
  return div1;
}
// clean container if new cathegory selected
function cleanContainer(element) {
  element.innerHTML = '';
}