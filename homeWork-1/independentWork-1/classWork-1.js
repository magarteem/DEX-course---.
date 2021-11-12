// https://codesandbox.io/s/boring-christian-4qnpf?file=/src/workHere.js

export const dataProcessingAboutSalary = (f, s) => {};

export const calculateCashback = (isCashback, sum, cb) => {};

export const getHolidaysNotifications = (f, s) => {};

export const getHolidayPrizes = (f, s, t) => {
  const newDateStr = new Date(Date.now());
  const nowMount = newDateStr.getMonth(); // текущий мес
  const nowDate = newDateStr.getDate(); // число сегодня

  const dateAny = new Date(s);
  const birthDataMount = dateAny.getMonth(); //= месяц рождения сотрудника"
  const birthDataDate = dateAny.getDate(); // = число ррождения сотрудника"

  const fu = (zps) => {
    let zp = t / 10 + (birthDataMount + 1) * birthDataDate; // месяц + 1 т.к. с нуля счёт

    // округление в большую сумму
    while (zp % 10 !== 0) {
      zp++;
    }

    const dr = `У ${f} сегодня праздник, его премия от текущей ЗП = ${t} составляет ${zp} р.`;
    return dr;
  };

  return nowMount == birthDataMount && nowDate == birthDataDate ? fu() : null;
};
