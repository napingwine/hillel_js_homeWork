Array.prototype.heroesRender = function(folderPath){
  let table = document.createElement('table')
  let tHead = document.createElement('thead')
  let trHead = document.createElement('tr')
  let thName = document.createElement('th')
  thName.innerHTML = 'Name'
  let thIcon = document.createElement('th')
  thIcon.innerHTML = 'Icon'
  let tBody = document.createElement('tbody')
  this.forEach(el => {
    let tr = document.createElement('tr')
    let tdName = document.createElement('td')
    tdName.innerText = `${el.name}`
    let tdIcon = document.createElement('td')
    let img = document.createElement('img')
    img.src = `${folderPath}/${el.name.replace(/\s+/g, '').toLowerCase()}.svg`
    tdIcon.append(img)
    tr.append(tdName)
    tr.append(tdIcon)
    tBody.append(tr)
  })

  trHead.append(thName)
  trHead.append(thIcon)
  tHead.append(trHead)
  table.append(tHead)
  table.append(tBody)
  document.body.append(table)
}

let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

marvelHeroes.heroesRender('./images/images/marvel')
dcHeroes.heroesRender('./images/images/dc')