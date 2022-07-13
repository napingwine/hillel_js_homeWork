let kitchenProducts = [
  {
    type: 'grater',
    price: 10
  },
  {
    type: 'pastry-bag',
    price: 25
  },
  {
    type: 'scale',
    price: 5
  },
  {
    type: 'whisk',
    price: 15
  }
];

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000]
  },
  {
    type: 'laptop',
    price: [50, 1500]
  },
  {
    type: 'smartphone',
    price: [80, 2000]
  },
  {
    type: 'tablet',
    price: [20, 1300]
  }
];

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100
  },
  {
    type: 'eyeshadow',
    price: 50
  },
  {
    type: 'lipstick',
    price: 80
  },
  {
    type: 'nail-polish',
    price: 200
  },
  {
    type: 'perfume',
    price: 300,
  }
];

const products = {
  kitchen: kitchenProducts,
  devices: devicesProducts,
  cosmetics: cosmeticsProducts
}

function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = typeof price === 'object' ? `${price[0]}-${price[1]}` : price;

  this.render = () => {
    return (
    `<tr>
      <td><img src="images/images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
      <td>${this.type}</td>
      <td>${this.price} USD</td>
    </tr>`
    );
  };
};

const renderTable = (products) => {
  let arrayOfGoods = '';
  for (key in products) {
    arrayOfGoods = [...arrayOfGoods,...(products[key].map(el=> new Product(key,el.type,el.price).render()))];
  };
  return (
    `<table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        ${arrayOfGoods.join('')}
      </tbody>
    </table>`
  );
};

document.write(renderTable(products));
