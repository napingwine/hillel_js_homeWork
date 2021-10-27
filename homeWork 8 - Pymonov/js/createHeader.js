function createHeader() {
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

  return header
}

function createSelectedCategoryProductsContainer(){
  let div = document.createElement('div');
  div.className = 'result-products-container';
  div.classList.add('container')
  return div
}