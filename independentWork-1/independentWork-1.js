//=======================================================================
//!===================   Условное ветвление: if, '?'  ===================
//=======================================================================
//#1 Выведется ли alert?
if ("0") {
  alert("Привет");
} // да

// #2 Название JavaScript
let nameJS = prompt("Какое «официальное» название JavaScript?", "");
if (nameJS === "ECMAScript") {
  alert(`Ваш ответ ${nameJS} - верный`);
} else if (nameJS !== null) {
  alert(`ответ "${nameJS}" не правильный, верный - ECMAScript`);
} else {
  alert(`Не нужно нажимать отмену`);
}

// #3 Покажите знак числа
let sign = +prompt("введите число", "");
if (sign < 0) {
  alert(-1);
} else if (sign > 0) {
  alert(1);
} else {
  alert(0);
}

// #4 Перепишите 'if' в '?'
let a = +prompt("введите число A", "");
let b = +prompt("введите число B", "");
alert(a + b < 4 ? `${a} + ${b} < 4` : `${a} + ${b} >= 4`);

//#5 Перепишите 'if..else' в '?'
let yourName = prompt("вы 'Сотрудник', 'Директор' или 'Проходимец' ?", "");
yourName == "Сотрудник"
  ? alert("привет")
  : yourName == "Директор"
  ? alert("Здравствуйте")
  : alert("не наш");

//=======================================================================
//!=======================  Типы данных  ================================
//=======================================================================
let name11 = "Ilya";
alert(`hello ${1}`); // 1
alert(`hello ${"name"}`); // name - string
alert(`hello ${name11}`); // Ilya

//=======================================================================
//!===================   Преобразование типов  ==========================
//=======================================================================
alert(typeof Number("125")); //number
alert(typeof +"125"); //number
alert(typeof Number(" 435 ")); //number
alert(typeof Boolean("true")); //boolean
alert(
  `${Boolean(null)}, ${Boolean(0)}, ${Boolean(undefined)}, ${Boolean(
    -1
  )}  ${Boolean(NaN)}`
); //false, false, false, true  false

//=======================================================================
//!============================   Числа  ================================
//=======================================================================
// #1 Сумма пользовательских чисел
const prom1 = prompt("Введите 1ое число", "");
const prom2 = prompt("Введите 2ое число", "");
alert(+prom1 + Number(prom2)); // 4

// #2 Почему 6.35.toFixed(1) == 6.3?
alert(Math.round(6.35)); // 6
alert(Math.round(6.35 * 10) / 10); // 6.4

// #3  Ввод числового значения
const readNumber = () => {
  const numProto = prompt(`Введите число`, ``);
  if (isNaN(numProto)) {
    alert(`"${numProto}" - не число`);
    readNumber();
  } else if (numProto == "" || numProto == null) {
    alert(`Выход`);
  } else {
    alert(`${numProto} - вы ввели`);
  }
};
readNumber();

// #4 Случайное целое число от min до max(включительно)
//вариант 1
const random = (min, max) => {
  alert(Math.floor(Math.random() * (max - min + 1)) + min);
};
random(0, 10);

//вариант 2 без min max
const random1m = (randomInt) => {
  alert(+randomInt.toString().slice(2, 3));
};
random1m(Math.random());

// #5 Случайное число от min до max(не включая max)
const random2m = (min, max) => {
  alert(Math.random() * (max - min)) + min;
};
random2m(0, 1);

//=======================================================================
//!===================   Строки, Теговые шаблоны  =======================
//=======================================================================
// #1 Сделать первый символ заглавным
const ucFirst = (vasia) => {
  vasia = vasia[0].toUpperCase() + vasia.substring(1);
  return vasia;
};
let vasia = `вася`;
alert(ucFirst(vasia));

// #2  Проверка на спам
const checkSpam = (text_span, filterSpam) => {
  for (let i = 0; i < filterSpam.length; i++) {
    return text_span.includes(filterSpam[i]) ? true : false;
  }
};
const text_span = `продаётся viagra, лицам от 20, каналы Для иНые взрослых XXX, `; //true - найден спан
const text_span_1 = `продаётся не содержит, лицам от 20, каналы Для  взрослых XX X , `; //false нет спана
const filterSpam = ["viagra", "XXX", `иНые`, `СлоВа`];
alert(checkSpam(text_span, filterSpam));

// #3 Усечение строки
const truncate = (str, maxlength) => {
  console.log(str.length);
  return str.length > 30 ? str.slice(0, 27) + "..." : str;
};
const text_spred = `продаётся viagra, лицам от 20, каналы Для иНые взрослых XXX, `;
alert(truncate(text_spred, 50));

// #4 Выделить число
const text_sales = `$180`;
//Вариант 1
const extractCurrencyValue_1 = (value) => {
  return +value.split("$")[1];
};
alert(extractCurrencyValue_1(text_sales));
//Вариант 2
const extractCurrencyValue_2 = (value) => {
  return +value.slice(1);
};
alert(extractCurrencyValue_2(text_sales));

//=======================================================================
//!=======================   Дата и время  ==============================
//=======================================================================
// #1 Создайте дату
alert(new Date(2012, 1, 20, 3, 12));

const pnvs = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const date_1 = new Date(2012, 0, 3);

// #2 Покажите день недели
const getWeekDay = (pnvs, date_1) => {
  return `2012, 0, 3 === ${pnvs[date_1.getDay()]}`;
};
alert(getWeekDay(pnvs, date_1)); // ВТ

// #3 День недели в европейской нумерации
const getLocalDay = (date_1) => {
  return `2012, 0, 3 = "${
    date_1.getDay() === 0 ? 7 : date_1.getDay()
  }-ой" день недели`;
};
alert(getLocalDay(date_1)); //2012, 0, 3 = "2-ой" день недели

// #4 Какой день месяца был много дней назад?
const getDateAgo = (date, days) => {
  let dateClone = new Date(date);
  dateClone.setDate(date.getDate() - days);
  return dateClone.toLocaleDateString();
};
const date = new Date(2015, 0, 2);
let days = 2;
alert(getDateAgo(date, days)); // 31.12.2014
days = 1;
alert(getDateAgo(date, days)); // 01.01.2015
days = 2;
alert(getDateAgo(date, days)); // 31.12.2014

// #5 Последнее число месяца?
const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month);
  return new Date(year, month + 1, 0).getDate();
};
const year = 2021;
const month = 10;
alert(getLastDayOfMonth(year, month)); // 30

// #6 сколько сегодня прошло секунд?
const date2021 = new Date();
const years = date2021.getFullYear();
const day = date2021.getDate();
const months = date2021.getMonth();
const hours = date2021.getHours();
const minutes = date2021.getMinutes();
const seconds = date2021.getSeconds();
const getSecondsToday = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};
alert(getSecondsToday(hours, minutes, seconds)); // прошло секунд за сегодня

// #7 сколько секунд осталось до завтра?
const getSecondsToTomorrow = (hours, minutes, seconds) => {
  const hoursAfter = 24 - hours;
  const minutesAfter = 60 - minutes;
  const secondsAfter = 60 - seconds;
  return hoursAfter * 3600 + minutesAfter * 60 + secondsAfter;
};
alert(getSecondsToTomorrow(hours, minutes, seconds)); // сек. осталось до завтра

// #8 Форматирование относительной даты
let dateAfter11 = new Date(2021, 10, 08, 4, 54, 00); // установленная дата
let dateNow = Date.now(); // текущая дата
const differenceSec = (dateNow - +dateAfter11) / 1000; // разница
if (differenceSec < 1) {
  console.log("прямо сейчас");
} else if (differenceSec / 60 < 1) {
  console.log(`${Math.floor(differenceSec)} сек. назад`);
} else if (differenceSec / 60 / 60 < 1) {
  console.log(`${Math.floor(differenceSec / 60)} мин. назад`);
} else {
  console.log(dateAfter11.toLocaleString());
}

//=======================================================================
//!========================   Базовые операторы  ========================
//=======================================================================
// #1 Постфиксная и префиксная формы
let am = 1;
let bm = 1;
console.log(++am); // 2
console.log(bm++); // 1

// #2 Результат присваивания
let x = 1 + (am *= 2);
console.log(x); // 5

// #3 Преобразование типов
console.log("" + 1 + 0); //10
console.log("" - 1 + 0); // -1
console.log(true + false); //1;
console.log(6 / "3"); //2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log(7 / 0); //Infinity
console.log("  -9  " + 5); //  -9  5
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2

// #4 Исправьте сложение
const abNum = () => {
  let aNum = prompt("Первое число?", 1);
  let bNum = prompt("Второе число?", 2);
  alert(+aNum + Number(bNum)); // 3
};
abNum();

//=======================================================================
//!=======================   Таблица приоритетов  =======================
//=======================================================================
console.log(3 + 4 * 5); // 23
console.log(3 > 2 && 2 > 1); //true
console.log(3 > 2 > 1); //false >> 3 > (2 > 1) - true

//=======================================================================
//!===================   Логические операторы  ==========================
//=======================================================================
// #1 Что выведет alert
console.log(null || 2 || undefined); // 2
console.log(alert(1) || 2 || alert(3)); // 2
console.log(1 && null && 2); // null
console.log(alert(1) && alert(2)); // undefined
console.log(null || (2 && 3) || 4); // 3

// #2 Проверка значения из диапазона  //вариант #1
const anyAge = 90;

const ageInV1 = (anyAge) => {
  alert(
    anyAge > 13 && anyAge < 91
      ? `${anyAge} - в диапазоне`
      : `${anyAge} - в НЕ диапазона`
  ); // 90 - в диапазоне  / 93 - в НЕ диапазона
};
ageInV1(anyAge);

// #2 Проверка значения из диапазона  //вариант #2
const ageInV2 = (anyAge) => {
  const res = anyAge > 13 && anyAge < 91; // 90 - true
  alert(!res ? `${anyAge} - в НЕ диапазона` : `${anyAge} - в диапазоне`);
};
ageInV2(anyAge);

// #3 Вопрос о "if"
if (-1 || 0) alert("first"); //first
if (-1 && 0) alert("second"); // не выполнится
if (null || (-1 && 1)) alert("third"); //third

// #4 проверка пароля
const inputPass = (anyAge) => {
  let yourLogin = prompt("Введите логин", "");
  if (yourLogin === "Админ") {
    let yourPassword = prompt("Введите пароль", "");
    switch (yourPassword) {
      case "Я главный":
        alert("Здравствуйте!");
        break;
      case "":
      case null:
        alert("Отменено!");
        break;
      default:
        alert("Я вас не знаю");
        break;
    }
  } else if (yourLogin === "" || yourLogin === null) {
    alert("Отменено");
  } else {
    alert("Я вас не знаю");
  }
};
inputPass(anyAge);

//=======================================================================
//!===================   Операторы сравнения  ===================
//=======================================================================
console.log(5 > 4); //true
console.log("ананас" > "яблоко"); //false
console.log("2" > "12"); //true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false
//END

//=======================================================================
//=======================================================================
//===================   из WORD примеры  ================================
//=======================================================================
const tabN = (title, result, result2 = ``) => {
  console.log(`======== ${title} ========`);
  console.log(result + "\n" + result2 + `\n\n\n`); // или alert();
};

//------------- NaN ---------------------------------------------
tabN(`===== NAN ============`, "не число" / 2 + 5); //NaN

//-------------- "" '' \`\` --------------------------------------
const title_kav = `"" '' \`\``;
const name1 = "Николай";
const name2 = "Анатольевич";
const name3 = `Я ${name1}  ${name2} `;
tabN(title_kav, name3); //Я Николай  Анатольевич

//--------------- boolean ----------------------------------------
const title_bool = `boolean`;
const bo1 = 6;
const bo2 = 1.5;
tabN(title_bool, bo1 < bo2); //falshe

//------------------- null / undefined ----------------------------
const title_NaN = `null / undefined`;
let t;
tabN(title_NaN, t); //undefined

//-------------------- Object ------------------------------------
const title_Object = `Object`;
const obj = {
  name: `Artem`,
  age: 31,
  territory: {
    сountry: "PMR",
    city: "Tiraspol",
  },
};
tabN(title_Object, JSON.stringify(obj)); //{"name":"Artem","age":31,"territory":{"сountry":"PMR","city":"Tiraspol"}}

//--------------------- symbol -------------------------------------------
const title_Symbol = `symbo`;
const sybmol1 = Symbol("sim");
const sybmol2 = Symbol("sim");
tabN(title_Symbol, sybmol1 === sybmol2); // false   sybmol1.toString()  >> Symbol(sim)

//--------------- преобразовать типы -----------------------------
const title_String = `String()`;
let value = true; //boolean
value = String(value);
tabN(title_String, value); //"true"

//----------------- Number() or +  -------------------------------
const title_Number = `Number()`;
let numStr1 = `12`;
let numStr2 = `2e2`; // +`2e2` = 200
tabN(title_Number, typeof (Number(numStr1) + +numStr2)); //number >> 212

//----------------- Boolean --------------------------------------
const title_Boolean = `Boolean`;
let bool = `true`; //string
tabN(title_Boolean, typeof Boolean(bool)); //boolean

//---------------- floor ceil round -----------------------------
const title_Math = `Math.floor ceil round()`;
function math(num) {
  return num.map(
    (e) =>
      `\n${e} = floor ${Math.floor(e)} / ceil ${Math.ceil(
        e
      )} / round ${Math.round(e)}`
  );
}
const sumNum = [2.3, 3.6, -1.2, 8.7, -1.9];
tabN(title_Math, math(sumNum));
//2.3 = floor 2 / ceil 3 / round 2,
//3.6 = floor 3 / ceil 4 / round 4,
//-1.2 = floor -2 / ceil -1 / round -1,
//8.7 = floor 8 / ceil 9 / round 9,
//-1.9 = floor -2 / ceil -1 / round -2

//----------------- toFixed --------------------------------------
const title_ToFixed = `toFixed`;
let fix = 156.124879;
tabN(title_ToFixed, typeof +fix.toFixed(4)); // number > 156.1249

//--------------- parseInt  parseFloat ----------------------------
const title_parseInt_parseFloat = `parseInt  parseFloat`;
const pars_Int = `1524879%`;
const pars_Float = `156.12,4879rem`;
tabN(
  title_parseInt_parseFloat,
  `parseInt = ${parseInt(pars_Int, 10)} / parseFloat = ${parseFloat(
    pars_Float
  )}`
); // parseInt = 1524879 / parseFloat = 156.12

//------------ Math.max() Math.min() Math.pow() ------------------
const title_max_min_pow = `Math.max() Math.min()`;
const max_min_pow = `max = ${Math.max(5, 8, -2, 6)} 
min = ${Math.min(5, 8, -2, 6)} 
pow = ${Math.pow(3, 4)}`;
tabN(title_max_min_pow, max_min_pow); // max = 8 min = -2 pow = 81

//---------- toLowerCase() toUpperCase() -------------------------
const title_LowUp = `toLowerCase() toUpperCase()`;
const lowUp = `БольшиЕ и МаленьКиЕ БУквЫ`;
tabN(title_LowUp, lowUp.toUpperCase(), lowUp.toLowerCase()); // БОЛЬШИЕ И МАЛЕНЬКИЕ БУКВЫ   большие и маленькие буквы

//-------------- indexOf() ---------------------------------------
//----
const index = `Ваш id = id:15`; //строка на несколько примеров ниже
//----
const title_IndexOf = `indexOf()`;
tabN(title_IndexOf, index.indexOf(`ID`), index.indexOf(`id`, 5)); // -1  9

//------------- val.includes() -----------------------------------
const title_includes = `includes()`;
tabN(title_includes, index.includes(`id =`), index.includes(`id=`)); //true  false

//--------------- val.slice() ------------------------------------
const title_slice = `slice()`;
const ms = [`tr`, 54, `pty`, 65, 33];
tabN(title_slice, index.slice(0, 5), ms.slice(-3)); //Ваш i  pty, 65, 33

//-----------------val.substring() -------------------------------
const title_substring = `substring()`;
tabN(title_substring, index.substring(1, 10), index.substring(5, 12)); //аш id = i   d = id:

//-----------------val.substr() -------------------------------
const title_substr = `substr()`;
tabN(title_substr, index.substr(1, 5), index.substr(4)); //аш id   id = id:15

//---------------- trim() repeat() -------------------------------
const title_trrep = `trim() repeat()`;
const space = ` Пробел `;
tabN(title_trrep, space.trim(), space.repeat(3)); //Пробел    Пробел  Пробел  Пробел
