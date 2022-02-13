//=======================================================================
//!=============================   Массивы  =============================
//=======================================================================
//? #1 Скопирован ли массив?
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
console.log(fruits.length); // 4 => ['Яблоки', 'Груша', 'Апельсин', 'Банан'] - изменён через shoppingCart.push("Банан");

//? #2 Операции с массивами
let styles = ["Джаз", "Блюз"];
//a. Добавьте «Рок-н-ролл» в конец.
styles.push("Рок-н-ролл1");
console.log(styles); //['Джаз', 'Блюз', 'Рок-н-ролл1']

// b. Замените значение в середине на «Классика».
let length = Math.floor(styles.length / 2);
styles[length] = "Классика";
console.log(styles); //['Джаз', 'Классика', 'Рок-н-ролл1']

// c. Удалите первый элемент массива
styles.shift();
console.log(styles); //['Классика', 'Рок-н-ролл1']

// d. Вставьте «Рэп» и «Регги» в начало массива.
styles.unshift("Рэп", "Регги");
console.log(styles); //['Рэп', 'Регги', 'Классика', 'Рок-н-ролл1']

//? #3 Вызов в контексте массива
let arry = ["a", "b"];
arry.push(function () {
  alert(this); // ?? не понятно
});
console.log(arry[2]()); // ['a', 'b', ƒ]

//? #3 Сумма введённых чисел
const sumInput = (summPromt) => {
  const promt = prompt(
    "Введите число (пусто или отмена => выведет сумму чисел)",
    ""
  );

  if (!isNaN(parseFloat(promt))) {
    summPromt.push(+promt);
    sumInput(summPromt);
  } else {
    //? Вариант 1
    let k = 0;
    for (let j = 0; j < summPromt.length; j++) {
      k += summPromt[j];
    }
    console.log("сумма введённых сисел = " + k);

    //? Вариант 2
    //console.log(summPromt.reduce((sum, current) => sum + current, 0));
  }
};
let summPromt = [];
sumInput(summPromt);
