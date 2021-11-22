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
}
const cat = new Cat({
  name: "Cat",
  age: 8,
  hasTail: true,
  color: "Yellow",
});
console.log(cat);
cat.voice();
console.log(Cat.type);

//get set =  next
