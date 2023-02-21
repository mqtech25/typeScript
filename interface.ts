interface user {
  name: string;
  whereFrom: string;
  age: number;
  //   doingWhat: string;
}

function userDetail(person: user) {
  return "Hell0 " + person.name;
}
let x: user = { name: "Qasim", whereFrom: "D.i.khan", age: 24 };
console.log(userDetail(x));

class Human implements user {
  name: string;
  age: number;
  whereFrom: string;

  constructor(u: user) {
    this.name = u.name;
    this.age = u.age;
    this.whereFrom = u.whereFrom;
  }
  get getName() {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }
}

let hus = new Human(x);
console.log(hus.getName);
hus.setName = "Yasir";
