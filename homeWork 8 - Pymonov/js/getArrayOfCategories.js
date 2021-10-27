'use strict';

//return array with cathegories
function getArrayOfCategoriesFromData(data) {
  let allCathegories = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].categories.length; j++) {
      if (allCathegories.indexOf(data[i].categories[j]) < 0) {
        allCathegories.push(data[i].categories[j]);
      }
    }
  }
  return allCathegories;
};