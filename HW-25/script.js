const baseURL = 'https://6311e835f5cba498da8807bf.mockapi.io/hw25/';

class app {
  constructor() {
    this.renderTableItem = this.renderTableItem.bind(this);
    this.deleteHero = this.deleteHero.bind(this);
    this.changeFavoriteStatus = this.changeFavoriteStatus.bind(this);
  };

  checkNameInput(){
    const addBTN = document.getElementById('add-btn');
    const input = document.querySelector('[data-name="heroName"]');
    input.addEventListener('keyup', ()=>{
      if(input.value.trim().length > 0){
        addBTN.removeAttribute('disabled')
      }else{
        addBTN.setAttribute('disabled', 'disabled')
      }
    });
  };

  renderTableItem({ name, comics, favorite, id, deleteFn, updateFavoriteStatusFN }) {
    const tr = document.createElement('tr');
    const nameEL = document.createElement('td');
    nameEL.innerText = name;
    tr.append(nameEL);
    const comicsEL = document.createElement('td');
    comicsEL.innerText = comics;
    tr.append(comicsEL);
    const favoriteEL = document.createElement('td');
    const label = document.createElement('label');
    label.innerText = 'Favourite:';
    label.classList.add('heroFavouriteInput');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    if(favorite)
      input.setAttribute('checked', true);
    input.addEventListener('click', () => updateFavoriteStatusFN({ name, comics, favorite: !favorite, id }))
    label.append(input);
    favoriteEL.append(label);
    tr.append(favoriteEL);
    const deleteBtn = document.createElement('td');
    const btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.addEventListener('click',()=> deleteFn(id));
    deleteBtn.append(btn);
    tr.append(deleteBtn);
    return tr;
  };

  async getUniverses() {
    return await fetch(`${baseURL}universes`)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          return data;
        } else {
          alert('Endpoint Error. Can\t get Universes from Back End');
          location.reload();
        }
      })
  };

  async setComicsList(select) {
    select.innerText = '';
    let comicsList = await this.getUniverses();
    comicsList.forEach(el => {
      select.append(this.renderComicsOption(el.name));
    });
  };

  async getAllHeroes() {
    return fetch(`${baseURL}heroes`).then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        alert('Endpoint Error. Can\t get Heroes from Back End');
        location.reload();
      }
    });
  };

  async addHeroToDB(hero) {
    fetch(`${baseURL}heroes`, {
      method: 'POST',
      body: JSON.stringify(hero),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        this.renderTable();
        document.forms[0][0].value = '';
      } else {
        alert('Can\' add Hero');
        location.reload();
      };
    });
  };

  async isHeroWithSuchName(name) {
    let heroes = await this.getAllHeroes();
    let is = heroes.filter(el => el.name === name);
    return !!is.length;
  };

  setAddHeroListener() {
    const addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const hero = {
        name: document.forms[0][0].value,
        comics: document.forms[0][1].value,
        favorite: document.forms[0][2].checked
      };
      if (await (this.isHeroWithSuchName(hero.name))) {
        alert('Error. Such Hero already exist in DB')
      } else {
        this.addHeroToDB(hero)
      }
    });
  };

  async deleteHero(id) {
    await fetch(`${baseURL}heroes/${id}`, {
      method: 'DELETE',
      mode: 'cors',
    }).then(res => {
      if (res.ok) {
        this.renderTable();
      } else {
        alert('Error. Can\'t delete hero from Back End')
      }
    })
  };

  renderComicsOption(value) {
    const option = document.createElement('option');
    option.setAttribute('value', value);
    option.innerText = value;
    return option;
  };

  async renderTable() {
    const table = document.getElementById('heroesTable');
    const tBody =  table.children[1];
    tBody.innerText = '';
    let heroes = await this.getAllHeroes();
    heroes.forEach(el => {
      const heroRowEL = this.renderTableItem({ ...el, deleteFn: this.deleteHero, updateFavoriteStatusFN: this.changeFavoriteStatus });
      tBody.append(heroRowEL);
    });
  };

  async changeFavoriteStatus(hero) {
    fetch(`${baseURL}heroes/${hero.id}`, {
      method: 'PUT',
      body: JSON.stringify(hero),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        this.renderTable();
      } else {
        alert('Can\' add Hero');
        location.reload();
      };
    });
  };

  async start() {
    this.setAddHeroListener();
    const comicsSelect = document.querySelector('[data-name="heroComics"]');
    this.checkNameInput();
    await (this.setComicsList(comicsSelect));
    await this.renderTable();
  };
};

const newHeroesAPP = new app;
newHeroesAPP.start();