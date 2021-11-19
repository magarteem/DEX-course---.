//=======================================================================
//================== async await .then промисы .catch ===================
//=======================================================================
const html = document.getElementById("ir");
const urlFavorit = "https://610f44b39b698d00171752e4.mockapi.io/favorit";
const urlItems = "https://610f44b39b698d00171752e4.mockapi.io/items";

//===== поличить список с обработкой ошибок + вывести в html =========
async function getSneakers() {
  let getItems = await fetch(urlFavorit)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("ERROR");
        throw Error;
      }
    })
    .then((data) => {
      html.innerHTML = JSON.stringify(data);
      console.log(data);
    })
    .catch((error) => {
      console.log("catch info - Error");
      html.innerHTML = "catch info - Error = Ошибка получения данных";
    });
}
getSneakers();

//===== добавить запись ============================================
async function getSneakers_1(post) {
  let getItems_1 = await fetch(urlFavorit, post);
  let jconData = await getItems_1.json();
  console.log(jconData);
}

let post = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "NewName" }),
};
getSneakers_1(post); // добавить 1 элемент

//======= вывести с добавленным==================================
getSneakers();

//====== отобразить первых 5 ====================================
async function getSneakers_3() {
  let getItems_2 = await fetch(urlFavorit);
  let jconData = await getItems_2.json();
  let splice = jconData.splice(0, 5);

  for (const key in splice) {
    console.log(splice[key].psevdoID);
  }
}
getSneakers_3();
