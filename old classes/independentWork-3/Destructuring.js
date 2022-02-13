//=======================================================================
//!========================   Деструктуризация  =========================
//=======================================================================
//? #1 Деструктурирующее присваивание
let user = { names: "John", years1: 30, years2: 31, years3: 32 };
let { names1, years, ...objCopy } = user;
console.log(objCopy);
//{names: 'John', years1: 30, years2: 31, years3: 32}//console.log(user.names); //John

//? #2 Максимальная зарплата
let salaries = { John: 140, Pete: 30, Mary: 250 };
let sal = Object.entries(salaries);
let namep = "";
let zp = 0;
if (sal.length !== 0) {
  for (const [key, keys] of sal) {
    console.log([key, keys]); // ['John', 10]['Pete', 3040]['Mary', 250]
    if (keys > zp) {
      zp = keys;
      namep = key;
    }
  }
}
console.log(`${namep} - ${zp}`);
