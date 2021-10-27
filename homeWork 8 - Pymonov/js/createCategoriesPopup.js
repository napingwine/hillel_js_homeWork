'use strict';

function createCategoriesPopup(array) {
  let categoriesPopup = document.createElement('div');
  categoriesPopup.id = 'categories-popup';

  for (let i = 0; i < array.length; i++) {
    categoriesPopup.appendChild(createDivCategory(array[i]))
  }

  return categoriesPopup;
}

function createDivCategory(textOfCategory) {
  let div = document.createElement('div');
  div.innerText = textOfCategory;
  return div;
}