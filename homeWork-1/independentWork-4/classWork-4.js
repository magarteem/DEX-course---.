const url = "https://jsonplaceholder.typicode.com/todos";
const requestURl = "https://jsonplaceholder.typicode.com/users";

console.log("Preparting data");
setTimeout(() => {
  console.log("request");
  const response = {
    server: "aws",
    port: 8080,
    status: "working",
    modified: false,
  };
  setTimeout(() => {
    response.modified = true;
    console.log("Data recived", response);
  }, 2000);
}, 2000);
//====================================================

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("request1");
    const response = {
      server: "aws",
      port: 8080,
      status: "working",
      modified: false,
    };
    resolve(response);
    //reject(response);
  }, 2000);
});

promise
  .then((data) => {
    setTimeout(() => {
      data.modified = true;
      console.log("Data recived", data);
    }, 2000);
  })
  .catch((e) => console.error(e));
//======================================================

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

delay(3000).then(() => console.log("3 s"));
Promise.all([delay(3000), delay(5000)]).then;
//======================================================

const fetchData = () => {
  return delay(2000)
    .then(() => fetch(url))
    .then((data) => data.json());
};
fetchData().then((data) => console.log("data"));

const url1 = "https://jsonplaceholder.typicode.com/todos";
async function fetchData1() {
  return delay(2000)
    .then(() => fetch(url1))
    .then((data) => data.json());
}
console.log(fetchData1());
//======================================================

async function fetchData2() {
  const prois = await fetch(url1);
  const result = await prois.json();
  return result;
}

console.log(fetchData2());

const fetchData21 = async () => {
  await delay(2000);
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
};
fetchData21();
//======================================================

const requestURl1 = "https://jsonplaceholder.typicode.com/users";
const getUsers = async (method, url) => {
  return fetch(requestURl1).then((r) => r.json());
};
getUsers("GET, requestURl1").then((data) => console.log(data));
//======================================================
//======================================================
//======================================================

//?           classWork-4
async function postUsers(postURl, postData) {
  const post = await fetch(postURl, postData);
  //const jsonData = await post.json();
  //console.log(jsonData);
}

const postURl = "https://jsonplaceholder.typicode.com/users";
const postData = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    server: "aws",
    port: 8080,
    status: "working",
    modified: false,
  }),
};

postUsers(postURl, postData);
