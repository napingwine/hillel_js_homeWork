function openUserCabinet(obj) {
  let shoppingHistoryContaner = document.querySelector('.result-products-container');
  let shoppingHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
  shoppingHistoryContaner.innerHTML = '';
  shoppingHistoryContaner.appendChild(createTableHeader());

  for (let i = 0; i < shoppingHistory.length; i++) {
    shoppingHistoryContaner.appendChild(historyOrderElement(shoppingHistory[i], i));
  }
}

function historyOrderElement(order, numberOfOrder) {
  let div = document.createElement('div');
  div.className = 'history-order-element';

  let divWrapper = document.createElement('div');
  divWrapper.className = 'history-order-element__wrapper';

  let number = document.createElement('div');
  number.innerText = numberOfOrder + 1;
  divWrapper.appendChild(number);

  let timeOfOrder = document.createElement('div');
  timeOfOrder.innerText = order.time;
  divWrapper.appendChild(timeOfOrder);

  let totalCost = document.createElement('div');
  totalCost.innerText = order.totalPriceOfOrder + '$';
  divWrapper.appendChild(totalCost);

  let discount = document.createElement('div');
  discount.innerText = order.discount;
  divWrapper.appendChild(discount);

  div.appendChild(divWrapper);

  div.addEventListener('click', () => {
    if (div.childNodes[1] && div.childNodes[2]) {
      div.childNodes[1].remove();
      div.childNodes[1].remove();
    }
    div.appendChild(createOrderInfo(order));
    let comment = document.createElement('div');
    comment.innerText = 'Order Comment: ' + order.comment;
    comment.className = 'order-wrapper';
    div.appendChild(comment);
  });

  return div;
}

function createTableHeader() {
  let div = document.createElement('div');
  div.className = 'history-order-element';

  let divWrapper = document.createElement('div');
  divWrapper.className = 'history-order-element__wrapper';

  let number = document.createElement('div');
  number.innerText = 'Order Number';
  divWrapper.appendChild(number);

  let timeOfOrder = document.createElement('div');
  timeOfOrder.innerText = 'Order Time';
  divWrapper.appendChild(timeOfOrder);

  let totalCost = document.createElement('div');
  totalCost.innerText = 'Total Price Of Order';
  divWrapper.appendChild(totalCost);
  
  let discount = document.createElement('div');
  discount.innerText = 'Discount';
  divWrapper.appendChild(discount);

  div.appendChild(divWrapper);

  return div;
}

function createOrderInfo(order) {
  let div = document.createElement('div');
  div.className = 'additional-information-of-order';

  div.appendChild(headerOrderInfoElement());

  for (let i = 0; i < order.orderList.length; i++) {
    div.appendChild(orderInfoElement(order.orderList[i]));
  }
  return div;
}

function orderInfoElement(item) {
  let orderWrapper = document.createElement('div');
  orderWrapper.className = 'order-wrapper';

  let itemName = document.createElement('div');
  itemName.innerText = item.product.name;
  orderWrapper.appendChild(itemName);

  let itemPrice = document.createElement('div');
  itemPrice.innerText = item.product.price + '$';
  orderWrapper.appendChild(itemPrice);

  let itemAmount = document.createElement('div');
  itemAmount.innerText = item.amount;
  orderWrapper.appendChild(itemAmount);

  return orderWrapper;
}

function headerOrderInfoElement() {
  let orderWrapper = document.createElement('div');
  orderWrapper.className = 'order-wrapper';

  let itemName = document.createElement('div');
  itemName.innerText = 'Product Name';
  orderWrapper.appendChild(itemName);

  let itemPrice = document.createElement('div');
  itemPrice.innerText = 'Product Price';
  orderWrapper.appendChild(itemPrice);

  let itemAmount = document.createElement('div');
  itemAmount.innerText = 'Total Amount';
  orderWrapper.appendChild(itemAmount);

  return orderWrapper;
}