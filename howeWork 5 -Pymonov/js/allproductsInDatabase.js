// this function search all products cathegories in database and check if such cathegory exist in cathegorry Arrey, if not then push it to allCathegories Arrey
function getAllCathegories() {
  for (let i = 0; i < products.length; i++) {
    if (allCathegories.indexOf(products[i].category) === -1) {
      allCathegories.push(products[i].category)
    }
  }
};
// this function create for ech element in array allCathegories div container and push it to cathegories div
function showAllCathegories() {
  for (let j = 0; j < allCathegories.length; j++) {
    let div = document.createElement('div')
    div.className = 'cathegory-El'
    div.innerHTML = `${allCathegories[j]}`
    cathegoriesContainer.append(div)
    showProducts(div)
  }
};
