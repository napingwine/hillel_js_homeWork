const userData = {
  'USD': 1000,
  'EUR': 900,
  'UAH': 15000,
  'BIF': 20000,
  'AOA': 100
};

const bankData = {
  'USD': {
    max: 3000,
    min: 100,
    img: '💵'
  },
  'EUR': {
    max: 1000,
    min: 50,
    img: '💶'
  },
  'UAH': {
    max: 0,
    min: 0,
    img: '💴'
  },
  'GBP': {
    max: 10000,
    min: 100,
    img: '💷'
  }
};

const fetchUserData = () => {
  return new Promise((res, rej) => {
    return res(userData);
  });
};

const fetchBankData = () => {
  return new Promise((res, rej) => {
    return res(bankData);
  });
};

const mergeCurrencies = (objUser, objBank) => {
  let result = [];
  for (let key in objUser) {
    for (let key2 in objBank) {
      if (key === key2) {
        result.push(key);
      }
    }
  }
  return result;
};

const checkBalance = (userData) => {
  let currency = undefined;
  const availableCurrencies = Object.entries(userData).reduce((acc, cur) => {
    acc.push(cur[0])
    return acc
  }, []);
  while (availableCurrencies.indexOf(currency) < 0) {
    currency = window.prompt(`Введите название валюты в формате ${availableCurrencies.join(', ')}`);
  };
  console.log(`Баланс составляет: ${userData[currency]} ${currency}`);
};

const withdrawCash = (userData, bankData) => {
  let currency = undefined;
  const availableCurrencies = mergeCurrencies(userData, bankData);
  while (availableCurrencies.indexOf(currency) < 0) {
    currency = window.prompt(`Введите название валюты в формате ${availableCurrencies.join(', ')}`);
  };
  let amount = window.prompt('Введите сумму для снития наличных');
  if (amount > bankData[currency].max) {
    console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${bankData[currency].max}`);
    return;
  } else if (amount > userData[currency]) {
    console.log(`Введенная сумма больше допустимой. Проверьте балланс`);
    return;
  } else if (amount < bankData[currency].min) {
    console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${bankData[currency].min}`);
    return;
  };
  console.log(`Вот Ваши денежки ${amount} ${currency} ${bankData[currency].img}`);
};

const doBanking = () => {
  let startQuestion = window.confirm('Посмотреть баланс на карте?');
  if (startQuestion) {
    fetchUserData().then(res=>checkBalance(res))
  } else {
    const data = Promise.all([fetchUserData(), fetchBankData()]);
    data.then(res=>{
      const [userData, bankData] = res;
      withdrawCash(userData, bankData);
    })
  }
};

doBanking();