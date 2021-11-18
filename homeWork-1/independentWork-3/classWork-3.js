// Создать функцию обёртку
// которая в начало каждой строки будет добавлять слово "Hello"

function funcContainer(str1) {
  return function (params) {
    return str1 + " " + params;
  };
}
const funcChild = funcContainer("Hello ");
console.log(funcChild("word"));
console.log(funcChild("Ben"));

//===================================

// Создать функцию, которая будет выполняться как func(1)(2)(3)
//console.log("funcСurrying(1)(3)(4) ", funcСurrying(1)(3)(4));
function funcСurryingArgs3(num1) {
  console.log(num1);
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}
console.log("funcСurrying(1)(3)(4) ", funcСurryingArgs3(1)(3)(4));

//===================================

// Создать функцию, которая будет выполняться
// при вызове func(1,2,3), func(1,2)(3),func(1)(2,3), func(1)(2)(3)
// и возвращать их сумму

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}
let funcСurryingArgs = curry(sum);
console.log("-------------");
console.log("funcСurryingArgs(1,3,4) ", funcСurryingArgs(1, 3, 4, 5));
console.log("-------------");
//console.log("funcСurryingArgs(1,3)(4) ", funcСurryingArgs(1, 3)(4));
//console.log("funcСurryingArgs(1)(3,4) ", funcСurryingArgs(1)(3, 4));
//console.log("funcСurryingArgs(1)(3)(4) ", funcСurryingArgs(1)(3)(4));

// Создать функцию обёртку
// которая будет принимать количество аргументов
// и считать сумму передаваемых чисел , после того как кол-во аргументов
// будет равнятся передаваемому значению

function funcСurryingCount(sum) {
  return function curried(...args) {
    if (args.length >= sum) {
      return args.reduce((a, b) => a + b);
    } else {
      return (...args2) => curried(...args, ...args2);
    }
  };
}

let funcCurrent = funcСurryingCount(3);
console.log("funcCurrent(1,3,4) ", funcCurrent(1, 3, 4));
console.log("funcCurrent(1,3)(4) ", funcCurrent(1, 3)(4));
console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
console.log("funcCurrent(1)(3)(4) ", funcCurrent(1)(3)(4));

// const func1 = () => {
//   console.log(func2());
// };

// const func2 = () => {
//   console.trace();
//   return "func2!!!!!!!";
// };

// func1();
