document.write("<label for=\"curency\">Курс</label><br/>");
document.write("<input type=\"number\" name=\"curency\" id=\"curency\"><br/>");
document.write("<label for=\"StartValue\">Начальное значение таблицы</label><br/>");
document.write("<input type=\"number\" name=\"StartValue\" id=\"StartValue\"><br/>");
document.write("<label for=\"StopValue\">Конечное значение таблицы</label><br/>");
document.write("<input type=\"number\" name=\"StopValue\" id=\"StopValue\"><br/>");
document.write("<label for=\"Step\">Шаг таблицы</label><br/>");
document.write("<input type=\"number\" name=\"Step\" id=\"Step\"><br/>");
document.write("<button id=\"calculate_table\">Расчитать таблицу</button><br/>");
document.write('<table><tbody class="currency-body" id="currency-body">  </tbody></table>')

let countButton = document.getElementById('calculate_table');
let currencyBody = document.getElementsByClassName('currency-body')

countButton.addEventListener('click', createTable);

function createTable() {
  let currentCurrency = Number(getCurrency());
  let currentTablerStartValue = Number(getTablerStartValue());
  let currentTablerStopValue = Number(getTablerStopValue());
  let currentTablerStep = Number(getTablerStep());

  if (currentCurrency === 0 && currentTablerStartValue === 0 && currentTablerStopValue === 0 && currentTablerStep === 0) {
    alert('Заполните все поля')
  }else {
    for (currentTablerStartValue; currentTablerStopValue >= currentTablerStartValue; (currentTablerStartValue = currentTablerStartValue + currentTablerStep)) {
      console.log('something')
      let tablerSring = document.createElement('tr')
      tablerSring.innerHTML = `<td>${currentTablerStartValue}</td><td>${currentTablerStartValue * getCurrency()}</td>`
      document.body.append(tablerSring)
    }
  }
}

function getCurrency() {
  let curency = document.getElementById('curency').value;
  return curency
}
function getTablerStartValue() {
  let tablerStartValue = document.getElementById('StartValue').value;
  return tablerStartValue
}
function getTablerStopValue() {
  let tablerStopValue = document.getElementById('StopValue').value;
  return tablerStopValue
}
function getTablerStep() {
  let tablerStep = document.getElementById('Step').value;
  return tablerStep
}
