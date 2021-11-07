'use strict';

let dataURL = './json/products.json';
let citiesForPost = ['Select city for delivery','Cherkasy‎', 'Chernihiv‎', 'Chernivtsi‎', 'Dnipro‎', 'Donetsk‎', 'Ivano-Frankivsk‎', 'Kharkiv‎', 'Kherson', 'Khmelnytskyi', 'Kropyvnytskyi', 'Kyiv', 'Luhansk', 'Lutsk', 'Lviv', 'Mykolaiv', 'Odessa', 'Poltava', 'Rivne', 'Sumy', 'Ternopil', 'Uzhhorod', 'Vinnytsia', 'Zaporizhzhia', 'Zhytomyr'];
// localStorage.setItem('orderHistory','[]');

async function getResponce(url) {
  const allCurrentDataObj = {};
  let responce = await fetch(url);
  allCurrentDataObj.data = await responce.json();
  allCurrentDataObj.basketArrayOfProducts = [];
  allCurrentDataObj.discount = 20;
  allCurrentDataObj.priceForDiscount = 15000;
  allCurrentDataObj.citiesForPost = citiesForPost;
  document.body.appendChild(header(allCurrentDataObj));
  document.body.appendChild(createSelectedCategoryProductsContainer(allCurrentDataObj));
}

getResponce(dataURL);