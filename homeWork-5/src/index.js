import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  return new Promise(function (resolve, reject) {
    compareText(str)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
  try {
    const success = await getData(str);
    console.log("Success: " + success);
  } catch (error) {
    console.log("Error: " + error.message);
  }
};
processingData("короткий текст");
processingData("длинный тексттттттттттт");
//=====================================================================================

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих

const getResponse = async (str) => {
  const promise = new Promise(function (resolve, reject) {
    getData(str)
      .then((e) => resolve(e))
      .catch((er) => reject(er));
  });

  promise
    .then((en) => {
      return en + " :)";
    })
    .catch((er) => {
      throw Error(`${er.message} :(`);
    })
    .then((reqest) => {
      const fu = (str) => {
        return str.length < 20 ? fu(str + ")") : str;
      };
      return fu(reqest);
      //вариант 2
      //if (reqest.length < 20) {
      //  const fillCounter = 20 - reqest.length;
      //  const reqestSplit = reqest.split("");
      //  reqestSplit.length = reqest.length + fillCounter;
      //  reqestSplit.fill(")", reqest.length);
      //  const newReqest = reqestSplit.join("");
      //  return newReqest;
      //}
    })
    .catch((errReqest) => {
      const fu = (str) => {
        return str.length < 20 ? fu(str + "(") : str;
      };
      return fu(errReqest.message);
    })
    .then((result) => console.log(result))
    .catch((res) => console.log("Any Error = " + res));
};
getResponse("короткий текст");
getResponse("Длинный текстттт");
//=====================================================================================

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
  await fetch(url)
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        throw Error(res.status);
      }
    })
    .then((result) => result.json())
    .then((tr) => console.log(JSON.stringify(tr)))
    .catch((err) => {
      console.log(`ОШИБКА -  ${err.message}`);
    });
};
getDataFromAPI("https://randomuser.me/api"); //200
getDataFromAPI("https://randomuser123.me/api"); // Failed to fetch
getDataFromAPI("https://randomuser.me/api123"); //404
