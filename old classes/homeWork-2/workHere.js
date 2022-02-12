// codesandbox.io
// https://codesandbox.io/s/thirsty-kate-lnzb3?file=/src/workHere/workHere.js

export const sum = (f, s) => {
  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи

  if (!Number.isNaN(+f + +s)) {
    // отcекаем числа(в том числе с плавающей точкой) + те что записаны строкой
    return +f + +s;
  } else {
    // если одно (или оба) из значений не строка и не число
    const g = [f, s];
    const gNew = [];
    for (let i = 0; i < g.length; i++) {
      typeof g[i] === "number"
        ? gNew.push(g[i])
        : gNew.push(
            String(g[i])
              .split("")
              .filter((el) => !Number.isNaN(+el))
              .join("")
          );
    }
    return +gNew[0] + +gNew[1];
  }
};

export const showPrice = (price, discount) => {
  let discountedPrice = price - (price * discount) / 100;
  //TODO: Привести цену к виду: 10.00 р.
  // округлять до копеек в сторону магазина
  discountedPrice = Math.ceil(discountedPrice).toFixed(2) + " р.";
  return discountedPrice;
};

export const findSuccess = (bankResponse) => {
  //TODO: Проверьте что в строке есть 'Success' без учёта регистра
  const word = "Success";
  const result = bankResponse.toLowerCase().includes(word.toLowerCase());
  return result ? "Yes" : "No";
};

export const dateToString = (date) => {
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
  let dateAny = new Date(date).toLocaleDateString();
  let newDateStr = new Date(Date.now()).toLocaleDateString();

  if (dateAny < newDateStr) {
    return "вчера";
  } else if (dateAny === newDateStr) {
    return "сегодня";
  } else {
    return "завтра";
  }
};

export const sort = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
  let collator = new Intl.Collator("ru");
  data.sort(collator.compare);
  return data;
};
