const burgers = [
  {
    name: 'BigMac',
    price: 10,
    calories: 40,
    image: 'https://content.instructables.com/ORIG/FIA/N2YY/J7RS7NY5/FIAN2YYJ7RS7NY5.jpg?auto=webp'
  },
  {
    name: 'Burger',
    price: 5,
    calories: 20,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg'
  }
];

const fillers = [
  {
    name: 'Cheese',
    price: 1,
    calories: 20
  },
  {
    name: 'Salad',
    price: 2,
    calories: 5
  },
  {
    name: 'Potato',
    price: 1.5,
    calories: 10
  }
]

const adds = [
  {
    name: 'Spices',
    price: 1.5,
    calories: 0
  },
  {
    name: 'Mayonnaise',
    price: 2,
    calories: 5
  }
]

class Hamburger {
  constructor({ name, price, calories, image }) {
    this.name = name
    this.price = price
    this.calories = calories
    this.image = image
  };

  setFillers(obj) {
    this.filler = obj
  };

  setAdds(obj) {
    if (this.adds) {
      if (this.adds.indexOf(obj) < 0) {
        this.adds.push(obj)
      } else {
        this.adds.splice(this.adds.indexOf(obj),1)
      }
    } else {
      this.adds = [obj]
    }
  };

  calculatePrice() {
    let finalPrice = this.price;
    if(this.filler) finalPrice += this.filler.price
    if (this.adds) this.adds.forEach(el=>finalPrice += el.price)
    return finalPrice;
  };

  calculateCalories() {
    let finalCalories = this.calories;
    if(this.filler) finalCalories += this.filler.calories
    if (this.adds) this.adds.forEach(el=>finalCalories += el.calories)
    return finalCalories;
  };

  rerenderPriceAndCalories() {
    document.getElementById(`price${this.name}`).innerHTML = `price: ${this.calculatePrice()}$`;
    document.getElementById(`calories${this.name}`).innerHTML = `calories: ${this.calculateCalories()}cal`;
  };

  buildBurgerCard = () => {
    const burgerCard = document.createElement('div');
    burgerCard.classList.add('burger-card');
    const image = document.createElement('img');
    image.setAttribute('alt', this.name);
    image.setAttribute('src', this.image);
    burgerCard.append(image);
    const info = document.createElement('div');
    info.classList.add('info');
    const price = document.createElement('div');
    price.innerHTML = `price: ${this.price}$`;
    price.setAttribute('id', `price${this.name}`)
    const calories = document.createElement('div');
    calories.innerText = `calories: ${this.calories}cal`;
    calories.setAttribute('id', `calories${this.name}`)
    info.append(price);
    info.append(calories);
    burgerCard.append(info);
    const addFillers = document.createElement('div');
    addFillers.classList.add('add-fillers');
    const addFillersLabel = document.createElement('label');
    addFillersLabel.setAttribute('for', 'fillers');
    addFillersLabel.innerText = 'choose filler: ';
    const fillerSelect = document.createElement('select');
    fillerSelect.setAttribute('name', 'fillers');
    fillerSelect.setAttribute('id', 'fillers');
    fillerSelect.innerHTML = `<option value="" selected disabled hidden>Choose here</option>`;

    fillerSelect.addEventListener('change', (e) => {
      const selectedIndex = e.target.selectedIndex;
      const selectedFiller = JSON.parse(e.target[selectedIndex].dataset.ata);
      this.setFillers(selectedFiller);
      this.rerenderPriceAndCalories();
    });

    const listOfFillers = fillers.map(el => {
      const filler = document.createElement('option');
      filler.setAttribute('value', el.name);
      filler.dataset.ata = JSON.stringify(el);
      filler.innerText = el.name;
      return filler;
    });

    listOfFillers.forEach(el => {
      fillerSelect.append(el);
    });

    const addsWrapper = document.createElement('div');
    addsWrapper.classList.add('adds-wrapper');

    adds.map(el => {
      const add = document.createElement('input');
      add.setAttribute('type', 'checkbox');
      add.setAttribute('id', `${el.name}${this.name}`);

      const label = document.createElement('label');
      label.setAttribute('for', `${el.name}${this.name}`);
      label.innerText = el.name;
      add.addEventListener('click', () => {
        this.setAdds(el);
        this.rerenderPriceAndCalories();
      })
      addsWrapper.append(add)
      addsWrapper.append(label)
    })

    addFillers.append(addFillersLabel);
    addFillers.append(fillerSelect);
    burgerCard.append(addFillers);
    burgerCard.append(addsWrapper)
    return burgerCard;
  }
}

let bigMac = new Hamburger(burgers[0])
let burger = new Hamburger(burgers[1])
document.body.append(bigMac.buildBurgerCard())
document.body.append(burger.buildBurgerCard())