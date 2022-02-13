// вывести число каждую секунду, начиная от from и заканчивая to.
//Используя setInterval и setTimeout.

const from = 2;
const to = 6;

const printNumbers = (from, to) => {
  const setInt = setInterval(() => {
    //from != to + 1 ? console.log(from) : clearInterval(setInt);
    from++;
  }, 1000);
  const setInt1 = setInterval(() => {
    //from != to + 1 ? console.log(from) : clearInterval(setInt);
    from++;
  }, 1000);
  console.log(setInt);
  console.log(setInt1);
};
printNumbers(from, to);

function printNumbers1(from, to) {
  let t = setTimeout(function go() {
    console.log(from);
    from++;
    from < to + 1 && setTimeout(go, 1000);
  }, 1000);
}
printNumbers1(from, to);
