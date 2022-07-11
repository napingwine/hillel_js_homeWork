let inputArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let cloneInputArr = inputArr.slice()
let sumOfPositiveNumbers = 0;
let quantityOfPositiveNumbers = 0;
let minNumber = Math.min.apply(null, inputArr);
let indexOfminNumber = inputArr.indexOf(minNumber);
let biggestNumber = Math.max.apply(null, inputArr);
let indexOfbiggestNumber = inputArr.indexOf(biggestNumber);
let quantityOfNegativeNumbers = 0;
let quantityOfPositiveOddNumbers = 0;
let quantityOfPositiveEvenNumbers = 0;
let sumOfEvenPositiveNumbers = 0;
let sumOfOddPositiveNumbers = 0;
let resultOfMultiplicationPositiveNumbers = 1;

for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] > 0) {
    sumOfPositiveNumbers = sumOfPositiveNumbers + inputArr[i];
    quantityOfPositiveNumbers++;
    resultOfMultiplicationPositiveNumbers = resultOfMultiplicationPositiveNumbers * inputArr[i];
    if (inputArr[i] % 2 !== 0) {
      quantityOfPositiveOddNumbers++;
      sumOfOddPositiveNumbers = sumOfOddPositiveNumbers + inputArr[i];
    }
    if (inputArr[i] % 2 === 0) {
      sumOfEvenPositiveNumbers = sumOfEvenPositiveNumbers + inputArr[i];
      quantityOfPositiveEvenNumbers++;
    }
  } else {
    quantityOfNegativeNumbers++;
  }
  if (inputArr[i] !== biggestNumber) {
    cloneInputArr[i] = cloneInputArr[i] * 0;
  }
}

document.write(`a) Сумму положительных элементов массива: ${sumOfPositiveNumbers};<br/>`);
document.write(`a) Количество положительных элементов массива: ${quantityOfPositiveNumbers};<br/>`);
document.write(`b) Минимальный элемент массива: ${minNumber};<br/>`);
document.write(`b) Порядковый номер минимального элемента массива: ${indexOfminNumber};<br/>`);
document.write(`c) Максимальный элемент массива: ${biggestNumber};<br/>`);
document.write(`c) Порядковый номер максимального элемент массива: ${indexOfbiggestNumber};<br/>`);
document.write(`d) Количество отрицательных элементов массива: ${quantityOfNegativeNumbers};<br/>`);
document.write(`e) Количество нечетных положительных элементов массива: ${quantityOfPositiveOddNumbers};<br/>`);
document.write(`f) Количество четных положительных элементов массива: ${quantityOfPositiveEvenNumbers};<br/>`);
document.write(`g) Сумма четных положительных элементов массива: ${sumOfEvenPositiveNumbers};<br/>`);
document.write(`h) Сумму нечетных положительных элементов массива: ${sumOfOddPositiveNumbers};<br/>`);
document.write(`i) Произведение положительных элементов массива: ${resultOfMultiplicationPositiveNumbers};<br/>`);
document.write(`j) Наибольший среди элементов массива: ${biggestNumber};<br/>`);
document.write(`j) Обнулить все элементы массива кроме найбольшего: ${cloneInputArr}.`);