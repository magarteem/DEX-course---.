//! Условное ветвление: if, '?'
//if (строка с нулём)
//alert(`0`);

//let nameJS = prompt("Какое «официальное» название JavaScript?", "");
//if (nameJS === "ECMAScript") {
//  alert(`Ваш ответ ${nameJS} - верный`);
//} else if (nameJS !== null) {
//  alert(`ответ "${nameJS}" не правильный, верный - ECMAScript`);
//} else {
//  alert(`Не нужно нажимать отмену`);
//}

//let sign = +prompt("введите число", "");
//if (sign < 0) {
//  alert(`${sign} < нуля`);
//} else if (sign > 0) {
//  alert(`${sign} > нуля`);
//} else {
//  alert(`${sign} = нулю`);
//}

//let a = +prompt("введите число A", "");
//let b = +prompt("введите число B", "");
//alert(a + b < 4 ? `${a} + ${b} < 4` : `${a} + ${b} >= 4`);

//let yourName = prompt("вы 'Сотрудник', 'Директор' или 'Проходимец' ?", "");
//yourName == "Сотрудник"
//  ? alert("привет")
//  : yourName == "Директор"
//  ? alert("Здравствуйте")
//  : alert("не наш");

// ! Типы данных
//let name11 = "Ilya";
//alert(`hello ${1}`); // 1
//alert(`hello ${"name"}`); // name - string
//alert(`hello ${name11}`); // Ilya

// ! Преобразование типов
//alert(typeof Number("125")); //number
//alert(typeof +"125"); //number
//alert(typeof Number(" 435 ")); //number
//alert(typeof Boolean("true")); //boolean
//alert(
//  `${Boolean(null)}, ${Boolean(0)}, ${Boolean(undefined)}, ${Boolean(
//    -1
//  )}  ${Boolean(NaN)}`
//); //false, false, false, true  false

//// ! Числа
//const prom1 = prompt("Введите 1ое число", "");
//const prom2 = prompt("Введите 2ое число", "");
//alert(+prom1 + Number(prom2));

//alert(Math.round(6.35));
//alert(Math.round(6.35 * 10) / 10); // 6.4

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
//readNumber();

const random = (numRandom1, numRandom2) => {
  let randomInt = Math.random();
  alert(randomInt.toString().split("").slice(-1));
};
//random(); //? выдаст рандомно от 1 до 9 (ноль надо доработать)

//! Строки, Теговые шаблоны
const ucFirst = (vasia) => {
  vasia = vasia[0].toUpperCase() + vasia.substring(1);
  return vasia;
};
let vasia = `вася`;
//alert(ucFirst(vasia));

const checkSpam = (text_span, filterSpam) => {
  for (let i = 0; i < filterSpam.length; i++) {
    return text_span.includes(filterSpam[i]) ? true : false;
  }
};
const text_span = `продаётся viagra, лицам от 20, каналы Для иНые взрослых XXX, `; //true - найден спан
const text_span_1 = `продаётся не содержит, лицам от 20, каналы Для  взрослых XX X , `; //false нет спана
const filterSpam = ["viagra", "XXX", `иНые`, `СлоВа`];
//alert(checkSpam(text_span, filterSpam));

const truncate = (str, maxlength) => {
  console.log(str.length);
  return str.length > 30 ? str.slice(0, 27) + "..." : str;
};
const text_spred = `продаётся viagra, лицам от 20, каналы Для иНые взрослых XXX, `;
//alert(truncate(text_spred, 50));

const text_sales = `$180`;
//Вариант 1
const extractCurrencyValue_1 = (value) => {
  return +value.split("$")[1];
};
//alert(extractCurrencyValue_1(text_sales));

//Вариант 2
const extractCurrencyValue_2 = (value) => {
  return +value.slice(1);
};
//alert(extractCurrencyValue_2(text_sales));

//! Дата и время
// #1
//alert(new Date(2012, 1, 20, 3, 12));

const pnvs = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
let date_1 = new Date(2012, 0, 3);
// #2
const getWeekDay = (pnvs, date_1) => {
  return `2012, 0, 3 === ${pnvs[date_1.getDay()]}`;
};
console.log(getWeekDay(pnvs, date_1)); //ПТ

// #3
const getLocalDay = (pnvs, date_1) => {
  return `2012, 0, 3 === ${pnvs[date_1.getDay()]}`;
};
console.log(getLocalDay(pnvs, date_1)); //понедельник == 1 >>> ПТ

//=======================================================================
//===================   из wort примеры  ================================
//=======================================================================
const tabN = (title, result, result2 = ``) => {
  //console.log(`======== ${title} ========`);
  //console.log(result + "\n" + result2 + `\n\n\n`); // или alert();
};
//======================

//------------- NaN ---------------------------------------------------
tabN(`===== NAN ============`, "не число" / 2 + 5); //NaN

//-------------- "" '' \`\` --------------------------------------------------
const title_kav = `"" '' \`\``;
const name1 = "Николай";
const name2 = "Анатольевич";
const name3 = `Я ${name1}  ${name2} `;
tabN(title_kav, name3); //Я Николай  Анатольевич

//--------------- boolean -------------------------------------------------
const title_bool = `boolean`;
const bo1 = 6;
const bo2 = 1.5;
tabN(title_bool, bo1 < bo2); //falshe

//------------------- null / undefined ---------------------------------------------
const title_NaN = `null / undefined`;
let t;
tabN(title_NaN, t); //undefined

//-------------------- Object --------------------------------------------
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

//---------------- floor ceil round ------------------------------------
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

//--------------- parseInt  parseFloat -------------------------------------------------
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
