// создаём обёртку таблицы и добовляем input поля
document.write("<h1>Расчет стоимости доллара по курсу</h1>");
document.write("<div class=\"outer-wrapper\">");
document.write("<div class=\"inner-wrapper\">");
document.write("<label for=\"curency\">Курс доллар\\гривна *</label>");
document.write("<input type=\"number\" name=\"curency\" id=\"curency\">");
document.write("</div>");
document.write("<div class=\"inner-wrapper\">");
document.write("<label for=\"StartValue\">Начальное значение таблицы</label>");
document.write("<input type=\"number\" name=\"StartValue\" id=\"StartValue\">");
document.write("</div>");
document.write("<div class=\"inner-wrapper\">");
document.write("<label for=\"StopValue\">Конечное значение таблицы *</label>");
document.write("<input type=\"number\" name=\"StopValue\" id=\"StopValue\">");
document.write("</div>");
document.write("<div class=\"inner-wrapper\">");
document.write("<label for=\"Step\">Шаг таблицы</label>");
document.write("<input type=\"number\" name=\"Step\" id=\"Step\">");
document.write("</div>");
document.write("</div>");
document.write("<button id=\"calculate_table\">Расчитать таблицу</button>");
document.write('<table class=""table><tbody class="currency-body" id="currency-body">  </tbody></table>');

let countButton = document.getElementById('calculate_table');
let currencyBody = document.getElementsByClassName('currency-body');

countButton.addEventListener('click', createTable);

function createTable() {
  cleanTable('currency-body');
  let currentCurrency = Number(getCurrency());
  let currentTablerStartValue = Number(getTablerStartValue());
  let currentTablerStopValue = Number(getTablerStopValue());
  let currentTablerStep = Number(getTablerStep());

  if(currentTablerStep === 0){ // если шаг таблицы не ввыведен 1 по умолчанию 
    currentTablerStep = 1;
  }

  if (currentCurrency === 0 ||  currentTablerStopValue === 0) {
    alert('Поля c * обязательны к заполнению и не должны содержать 0');
  } else {
    append2colums('currency-body',`Доллар`,`Гривна`);
    for (currentTablerStartValue; currentTablerStopValue >= currentTablerStartValue; (currentTablerStartValue = currentTablerStartValue + currentTablerStep)) {
      let mathResult = currentTablerStartValue * getCurrency();
      append2colums('currency-body',currentTablerStartValue,mathResult);
    }
  }
}

function getCurrency() {
  let curency = document.getElementById('curency').value;
  return curency;
}

function getTablerStartValue() {
  let tablerStartValue = document.getElementById('StartValue').value;
  return tablerStartValue;
}

function getTablerStopValue() {
  let tablerStopValue = document.getElementById('StopValue').value;
  return tablerStopValue;
}

function getTablerStep() {
  let tablerStep = document.getElementById('Step').value;
  return tablerStep;
}

function append2colums(id,firstColumn,secondColumn){ // id - для выбора в какую таблицу будет добавлена строка(только в tbody). firstColumn - превая ячейка, secondColumn - вторая ячейка
  let tbody = document.getElementById(id);
  let tablerRow = document.createElement('tr');
  let dollarValue = document.createElement('td');
  dollarValue.appendChild(document.createTextNode(`${firstColumn}`));
  let uahValue = document.createElement('td');
  uahValue.appendChild(document.createTextNode(`${secondColumn}`));
  tablerRow.appendChild(dollarValue);
  tablerRow.appendChild(uahValue);
  tbody.appendChild(tablerRow);
}

function cleanTable(id){
  let tbody = document.getElementById(id);
  tbody.innerHTML = '';
}