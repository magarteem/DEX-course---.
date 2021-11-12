//=======================================================================
//!=========================   Объекты  =========================
//=======================================================================
//? #1
const obj = {};
obj.name = "John";
obj.surname = "Smith";
console.log(obj); //{name: 'John', surname: 'Smith'}
obj.name = "Pete";
console.log(obj); // {name: 'Pete', surname: 'Smith'}
delete obj.name;
console.log(obj); // {surname: 'Smith'}

//? #2 Проверка на пустоту
// Вариант 1
const isEmpty = (obj_1) => {
  Object.keys(obj_1).length === 0
    ? console.log("Объект пуст")
    : console.log(obj_1);
};
// Вариант 2
//for (const i in obj_1) {
//  console.log("Чтото есть");
//}
const obj_1 = {};
isEmpty(obj_1);

//? #3 Объекты-константы?
const userChange = {
  name: "John",
};
userChange.name = "Pete";
console.log(userChange); // свойства изменяемы, содежимое userChange нет
// userChange = [] ошибка

//? #4 Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (const key in salaries) {
  sum += salaries[key];
}
console.log(sum);

//? #5 Умножаем все числовые свойства на 2
const multiplyNumeric = (menu) => {
  for (const key in menu) {
    typeof menu[key] === "number" && console.log(menu[key] * 2); // 400 600
  }
};
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
multiplyNumeric(menu);

//=======================================================================
//!=========================   Опциональная цепочка  ====================
//=======================================================================
//? #1
const user = {
  name: "Аля",
  age: 18,
  live: {
    country: "PMR",
    sity: null,
  },
  sayHi1: function () {
    alert("Привет");
  },
};

user.age = 21;
console.log(user.live.sity?.day);
user.sayHi?.();
console.log("продолжил выполняться");

//=======================================================================
//!=========================   Копирование объектов и ссылки  ===========
//=======================================================================
//? #1
const objOrigin = {
  name: "Аля",
  age: 18,
};
const objNewOrigin = {
  name1: "Аля",
  age1: 69,
};
const copyObjOrigin1 = { ...objOrigin };
console.log(copyObjOrigin1);
const copyObjOrigin2 = Object.assign(objNewOrigin, objOrigin);
console.log(objOrigin);
console.log(copyObjOrigin2);

//? #2
const aa = {
  a: "123",
  b: "456",
  c: {
    a1: "qqq",
    b1: "www",
    c1: {
      eee1: {
        r: ["a", "i", "ii"],
        rr: ["s", "u", "uu"],
        rrr: ["d", "o", "oo", "ooo", "oooo"],
      },
      eee2: {
        r22: ["a", "i", "ii"],
        rr22: ["s", "u", "uu"],
        rrr22: ["d", "o", "oo", "ooo", "oooo"],
      },
      eee3: { r: ["a", "w"], rr: ["s", "ew", "rrt", 3333], rrr: ["d", "t"] },
      eee4: {
        r: ["a", "w"],
        rr: ["s", "ew", "rrt", 3333],
        rrr: [
          "d",
          6667,
          {
            t: "tut",
          },
          "textArea",
          { text111: "textArea111" },
          { text222: "textArea222" },
        ],
      },
    },
  },
};
// -------------------------------------------
const bb = {
  ...aa,
  c: {
    ...aa.c,
    b1: "222",
    c1: {
      ...aa.c.c1,
      eee3: {
        ...aa.c.c1.eee3,
        rrr: [...aa.c.c1.eee3.rrr, "XXXXXXXXXXXXXX"],
      },
    },
  },
};
console.log(aa);
console.log(bb);

//? #3 Сумма свойств объекта
const sumSalaries = (salar) => {
  const values = Object.values(salar);
  let summ = 0;

  if (Object.keys(salar).length !== 0) {
    for (const key of values) {
      summ += key;
    }
    return summ;
  }
  return summ;
};

let salar = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(sumSalaries(salar)); // 650

//? Подсчёт количества свойств объекта
const count = (userCount) => {
  return Object.keys(userCount).length;
  // или return Object.values(userCount).length;
  // или return Object.entries(userCount).length;
};
const userCount = {
  name: "John",
  age: 30,
};
console.log(count(userCount)); // 2
