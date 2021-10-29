'use strict';
function header(obj) {
  let header = document.createElement('header');
  header.className = 'container';
  header.style.fontSize = '30px';

  let headerWrapper = document.createElement('div');
  headerWrapper.className = 'header__wrapper';
  header.appendChild(headerWrapper);

  let headerCategoriesContainer = document.createElement('div');
  headerCategoriesContainer.className = 'header__categories';
  headerCategoriesContainer.id = 'header-categories-container';
  headerCategoriesContainer.innerText = 'Categories';
  headerWrapper.appendChild(headerCategoriesContainer);

  let headerBasketIcon = document.createElement('div');
  headerBasketIcon.id = 'header-basket-icon';
  headerBasketIcon.className = 'fas fa-shopping-cart';
  headerBasketIcon.fontSize = '40px'
  headerWrapper.appendChild(headerBasketIcon)

  //show pop up with categories on mouse enter
  headerCategoriesContainer.addEventListener('mouseenter', () => {
    headerCategoriesContainer.appendChild(categoriesPopup(obj));
  })
  //hide pop up with categories on mouse leave
  headerCategoriesContainer.addEventListener('mouseleave', () => {
    document.querySelector('#categories-popup').remove();
  })

  headerBasketIcon.addEventListener('click', () => {
    document.body.appendChild(createBasketPopup(obj));
    console.log(obj)
  })
  return header
}

function createSelectedCategoryProductsContainer() {
  let div = document.createElement('div');
  div.className = 'result-products-container';
  div.classList.add('container')
  return div
}