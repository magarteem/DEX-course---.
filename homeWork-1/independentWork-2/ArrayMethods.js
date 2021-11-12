//=======================================================================
//!=========================   Методы массивов  =========================
//=======================================================================
//? #1 Переведите текст вида my-short-string в myShortString
let str = "my-short-string";
let splitStr = str.split("-");

const camelize = (splitStr) => {
  let t = "";
  for (let i = 0; i < splitStr.length; i++) {
    if (i < 1) {
      t += splitStr[i];
    } else {
      let word = String(splitStr[i]).split("");
      word[0] = String(splitStr[i][0]).toUpperCase();
      t += word.join("");
    }
  }
  return t;
};
console.log(camelize(splitStr)); // myShortString

//? #2 Фильтрация по диапазону
const filterRange = (arr, a, b) => {
  let newArray = [];
  arr.map((el) => el > a && el < b && newArray.push(el));
  console.log(newArray + ` в диапазоне ${a}, ${b}`);
};
const arr = [3, 0, -1, 5, 9, 2, 0, -4, -10, 4];
const a = -2;
const b = 6;
filterRange(arr, a, b);

//? #3 Фильтрация по диапазону "на месте"
const filterRangeInPlace = (arr, a, b) => {
  let resulrArry = arr.filter((el) => el >= a && el <= b);
  console.log(resulrArry); // [3, 0, -1, 5, 2, 0, 4]
};
filterRangeInPlace(arr, a, b);

//? #4 Сортировать в порядке по убыванию
let arrSort = [5, 2, 1, -10, 8];
console.log(arrSort.sort((a, b) => b - a)); // 8, 5, 2, 1, -10

//? #5 Скопировать и отсортировать массив
const copySorted = (arrString) => {
  let newArrString = [...arrString];
  console.log(newArrString.sort()); //  ["CSS", "HTML", "JavaScript"];
};
let arrString = ["HTML", "JavaScript", "CSS"];
copySorted(arrString);

//? #7 Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
const usersName = users.map((e) => e.name);
console.log(usersName); //["Вася", "Петя", "Маша"];

//! ? #8 Трансформировать в объекты
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };
let users1 = [vasya1, petya1, masha1];

const usersMapped = users1.map((e) => {
  return {
    id: e.id,
    fullName: e.name + " " + e.surname,
  };
});
console.log(usersMapped);
// [{id: 1, fullName: 'Вася Пупкин'}
// {id: 2, fullName: 'Петя Иванов'}
// {id: 3, fullName: 'Маша Петрова'}]

//! ? #9 Отсортировать пользователей по возрасту
const sortByAge = (users) => {
  console.log(users.sort((a, b) => a.age - b.age));
};
sortByAge(users);
//{name: 'Вася', age: 25}
//{name: 'Маша', age: 28}
//{name: 'Петя', age: 30}

//! ? #10 Перемешайте массив
const shuffle = (strCalc) => {
  let r = Math.random();
  console.log(strCalc.sort(() => Math.random() - 0.5));
};
let arrRound = [1, 2, 3];
shuffle(arrRound);

//? #10 Получить средний возраст
const getAverageAge = (users) => {
  let n = 0;
  users.map((e) => (n += e.age));
  let parseInte = parseInt(n / users.length);
  console.log(parseInte);
};
getAverageAge(users);

//? #11 Оставить уникальные элементы массива
const unique = (strings) => {
  let individArray = [];

  for (let j = 0; j < strings.length; j++) {
    if (!individArray.includes(strings[j])) {
      individArray.push(strings[j]);
    }
  }
  console.log(individArray);
};
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
unique(strings);
