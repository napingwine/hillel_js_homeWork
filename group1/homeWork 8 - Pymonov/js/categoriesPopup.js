'use strict';

function categoriesPopup(obj) {
  let categoriesPopup = document.createElement('div');
  categoriesPopup.id = 'categories-popup';
  obj.allCategories = getArrayOfCategoriesFromData(obj);
  for (let i = 0; i < obj.allCategories.length; i++) {
    categoriesPopup.appendChild(createDivCategory(obj, obj.allCategories[i]))
  }
  return categoriesPopup;
}

function createDivCategory(obj,textOfCategory) {
  let div = document.createElement('div');
  div.innerText = textOfCategory;
  div.style.fontSize = '18px';
  div.addEventListener('click', (e)=>{
    obj.selectedCategory = e.srcElement.innerText;
    document.querySelector('.result-products-container').innerHTML = '';
    document.querySelector('.result-products-container').appendChild(showProductsFromSelectedCategory(obj));
  })
  return div;
}

function getArrayOfCategoriesFromData(obj) {
  let data = obj.data;
  let allCathegories = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].categories.length; j++) {
      if (allCathegories.indexOf(data[i].categories[j]) < 0) {
        allCathegories.push(data[i].categories[j]);
      }
    }
  }
  return allCathegories;
};

