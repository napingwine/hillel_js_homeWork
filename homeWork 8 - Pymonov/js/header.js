'use strict';
function header(obj) {
  let header = document.createElement('header');
  header.className = 'container';

  let headerWrapper = document.createElement('div');
  headerWrapper.className = 'header__wrapper';
  header.appendChild(headerWrapper);

  let headerCategoriesContainer = document.createElement('div');
  headerCategoriesContainer.className = 'header__categories';
  headerCategoriesContainer.id = 'header-categories-container';
  headerCategoriesContainer.innerText = 'Categories';
  headerWrapper.appendChild(headerCategoriesContainer);

  let userCabinet = document.createElement('div');
  userCabinet.id = 'user-cabinet-icon';
  userCabinet.className = 'fas fa-user';
  headerWrapper.appendChild(userCabinet);
  userCabinet.addEventListener('click', ()=>{
    openUserCabinet(obj);
  })

  let headerBasketIcon = document.createElement('div');
  headerBasketIcon.id = 'header-basket-icon';
  headerBasketIcon.className = 'fas fa-shopping-cart';
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
  })
  return header

}

function createSelectedCategoryProductsContainer() {
  let div = document.createElement('div');
  div.className = 'result-products-container';
  div.classList.add('container')
  return div
}