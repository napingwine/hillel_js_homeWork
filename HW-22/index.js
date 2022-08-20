const getDataFromFile = filePath => {
  let xml = new XMLHttpRequest();
  xml.open("GET", filePath, false);
  xml.send();
  return JSON.parse(xml.response);
}

console.log([...getDataFromFile('data1.json').children, ...getDataFromFile('data2.json').children])