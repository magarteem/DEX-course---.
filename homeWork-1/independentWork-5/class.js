class Animal {
  static type = "Slon";
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }
  voice() {
    console.log("I am Animal");
  }
}

const animal = new Animal({
  name: "Slon",
  age: 6,
  hasTail: true,
});
console.log(animal);
animal.voice();
console.log(Animal.type);

class Cat extends Animal {
  static type = "CAT";
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  voice() {
    super.voice(); // вызвать родительский метод
    console.log("I am Cat");
  }
  get ageInfo() {
    return this.age * 2;
  }
  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: "Cat",
  age: 8,
  hasTail: true,
  color: "Yellow",
});
console.log(cat);
cat.voice();
console.log(cat.ageInfo);
console.log(Cat.type);

console.log(cat.ageInfo); //16
cat.ageInfo = 3;
console.log(cat.ageInfo); // с 8 на 3 поменялось
//===================================================

console.log("===================================================");

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = "none";
  }
  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});
//box1.hide()
//box1.show()

const box2 = new Box({
  selector: "#box2",
  size: 130,
  color: "blue",
});
//box2.hide()
//box2.show()

class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = "50%";
  }
}
const circ = new Circle({
  selector: "#circ1",
  size: 80,
  color: "green",
});

//=====================================

class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  validatePassword() {
    return this.password.length > 6;
  }
  sayHellow() {
    console.log("Hey, this is class - User");
  }
}

//Form data вхождения]
let names = "Tom";
let password = "784548";
const person = new User(names, password);
console.log(person);
console.log(person.password);
console.log(person.validatePassword());

// ============================= наследование классов
class Student extends User {
  constructor(userName, password, nickname) {
    super(userName, password); // наследует от User
    this.nickname = nickname; // новое сво-во
  }
  getMetodStudents() {
    return this.userName + " " + this.nickname;
  }
  validatePassword() {
    // заменили validatePassword на новый валидатор
    return this.password.length > 10;
    //return super.validatePassword(); - или обратиться  к родительскому методу
  }
  useParentMetod() {
    super.sayHellow(); // обращение к родителю
    return this.nickname;
  }
}

//Form data вхождения]
let names1 = "Ket";
let password1 = "33337043444";
let nickname1 = "KetNick";

const personStudent = new Student(names1, password1, nickname1);
console.log(personStudent);
console.log(personStudent.nickname);
console.log(personStudent.validatePassword());
console.log(personStudent.getMetodStudents());
console.log(personStudent.useParentMetod());

//============= GET SET ==========================

class People {
  constructor() {
    //this._peopleName =_peopleName
  }
  #privat = "Privat"; // доступно только через методы
  privatMetod() {
    return `privat = ${this.#privat}`;
  }
  set peopleName(peopleName) {
    this._peopleName = peopleName.trim().toLowerCase();
  }
  get peopleName() {
    return this._peopleName;
  }
}

const peop = new People();
peop.peopleName = "         Roma";
console.log(peop);
console.log(peop.peopleName);
console.log(peop.privatMetod());

//=====================================
//=====================================
//=====================================
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
