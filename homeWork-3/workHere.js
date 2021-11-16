export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  cartData.map((e) => {
    if (e.oldPrice - e.price >= 0) {
      return {
        ...e,
        ...(e.discount = e.oldPrice ? e.oldPrice - e.price : null),
        ...delete e?.oldPrice,
      };
    }
    return {
      ...e,
      ...delete e.oldPrice,
    };
  });
  //console.log(cartData);
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  const cartItemFind = cartItem.find((el) => el.id === "0");
  const cartItemCopyElem = {
    ...cartItemFind,
    addedIngredients: [
      ...cartItemFind.addedIngredients.map((x) => {
        return {
          ...x,
          count: x.count + 1,
        };
      }),
    ],
  };
  return cartItemCopyElem;
};

export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  let showCountPrice = {
    total: { count: 0, sum: 0 },
    water: { count: 0, sum: 0 },
    pizza: { count: 0, sum: 0 },
    other: { count: 0, sum: 0 },
  };

  cartData.forEach((e) => {
    //console.log(e.type);
    for (const key in showCountPrice) {
      if (key === e.type) {
        //console.log("1");
        //console.log(showCountPrice[key]);
        //console.log(key);
        //console.log(e.count);
        showCountPrice[key].count += e.count;
        showCountPrice[key].sum += e.price * e.count;
        showCountPrice["total"].count += 1;
        showCountPrice["total"].sum += e.price;
      }
    }
  });

  //console.log(cartData);
  //console.log(showCountPrice);
  return showCountPrice;
};

export const getCartItemsByDate = (cartData, date) => {
  //date = "2021-10-28T20:55:15.220Z"; // пришедшая дата
  //TODO: выбрать покупки сделанные за выбранную дату
  const getDate = new Date(date).toLocaleDateString(); // пришло
  date &&
    (cartData = cartData.filter(
      (el) => new Date(el.date).toLocaleDateString() === getDate && el
    ));
  return cartData;
};

export const repeatOrder = (cartData, date) => {
  //date = "2021-10-28T20:55:15.220Z"; // пришедшая дата
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  const getDate = new Date(date).toLocaleDateString(); // пришло date = "2021-10-28T20:55:15.220Z"
  let newArr = []; // плохой вариант
  cartData.map((el) => {
    if (new Date(el.date).toLocaleDateString() === getDate) {
      newArr.unshift({
        ...el,
        id: newArr.length + 2,
        date: new Date(Date.now()),
      });
    }
    newArr.push(el);
  });
  cartData = [...newArr];
  return newArr;
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  let find = cartData.map((x) => {
    return { ...x, count: x.id === item.id && x.count++ };
  });
  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров

  let price = 0;
  let maxPrice = [];
  let discount = false;

  cartData.forEach((e) => {
    price += e.price * e.count;
    maxPrice.push(e.price * e.count);
    discount = e.discount ? false : true;
  });
  const calcMaxPrice = maxPrice.find((summ) => summ > 500);

  return {
    total: price > 1000,
    oneBigPosition: calcMaxPrice > 500,
    notDiscounted: discount,
  };
};
