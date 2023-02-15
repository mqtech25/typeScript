// // Q2:Personal Message
// const List = "Hello Qasim, would you like to learn some Javascript today?";
// const Listname = "muhammad qasim";
// console.log(List);
// // Q3:Name Cases
// const titleCAse = Listname.split(" ").map((item, i) => {
//   return item.charAt(0).toUpperCase() + item.slice(1);
// });
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(titleCAse.join(" "));
// // Q4:Famous Quote
// console.log(`Dr Israr Ahmed once said, "Your actions and values define you."`);
// // Q5:Famous Quote
// const author = "Dr Israr Ahmed";
// const msg = `${author} once said, "Your actions and values define you."`;
// console.log(msg);
// // Q6:Stripping Names
// const sname = "   Qasim   ";
// console.log(sname);
// console.log(sname.trim());
// // Q7,Q8:Number Eight
// console.log(4 + 4);
// console.log(-(-4 - 4));
// console.log(4 * 2);
// console.log(16 / 2);
// // Q9:Favorite Number
// const no = 7;
// console.log(`${no} is my Fav number`);
// // Q10:Adding Comments
// // Q11:Names Array
// const friend = ["Yasir", "Bilal", "Hashmat"];
// friend.map((name, _) => {
//   console.log(name);
// });
// // Q12:Greetings: Start with the array you used in Exercise 11 with message
// friend.map((name, _) => {
//   console.log(`${name} is my best friends`);
// });
// // Q13:Think of your favorite mode of transportation
// const favTransport = ["Dodge Tomahawk", "Chevrolet Bolt"];
// favTransport.map((item, _) => {
//   console.log(`I would like to own ${item}`);
// });
// Q14:Guest List
const guestList = ["Sir Qasim", "Hashmat", "Yasir"];
guestList.map((name, _) => {
  console.log(`${name}, Can you please come tonight at my home for dinner?`);
});
// Q15:Guest List
const guestNotCome = "Hashmat";
const newGuestInvit = "Ahmer";
const newGuestList = guestList.filter((guest, i) => {
  return guest != guestNotCome;
});
newGuestList.push(newGuestInvit);
const indexOfNewGuest = newGuestList.indexOf(newGuestInvit);
newGuestList.map((guest, i) => {
  i == indexOfNewGuest
    ? console.log(
        `${guest}, Can you please come tonight at my home for dinner?`
      )
    : "";
});
// Q16:add More Guests
const addNewGuestInvit = ["Ali", "Shazaib", "Hammad"];
const allGuestList = [...newGuestList, ...addNewGuestInvit];
for (let index = 0; index < allGuestList.length; index++) {
  const element = allGuestList[index];
  addNewGuestInvit.find((name) => {
    if (name == element) {
      console.log(
        `${name}, Can you please come tonight at my home for dinner?`
      );
    }
  });
}
//Q17:Shrinking Guest List
// const skrinkList = allGuestList.splice(2, allGuestList.length);
const shrinkGuest = allGuestList.filter((guest, i) => {
  if (i > 1) {
    console.log(`${guest}, sorry you can’t invite them to dinner`);
  } else {
    console.log(`${guest}, your're still invited`);
    return guest;
  }
});
const guestEnd = shrinkGuest.splice(shrinkGuest.length);
console.log(guestEnd);
// Q18:Seeing the World: Think of at least five places
const worldPlaces = [
  "khana kaba",
  "Karbala",
  "Burj khalifa",
  "Iceland",
  "New york",
];
console.log(worldPlaces);
let ascArray = [...worldPlaces].sort((a, b) => a.localeCompare(b));
console.log(ascArray);
console.log(worldPlaces);
let decArray = [...worldPlaces].sort((a, b) => b.localeCompare(a));
console.log(decArray);
console.log(worldPlaces);
let reversOrder = worldPlaces.reverse();
console.log(reversOrder);
let reversOrginalOrder = worldPlaces.reverse();
console.log(reversOrginalOrder);
let sortOrder = worldPlaces.sort((a, b) => a.localeCompare(b));
console.log(sortOrder);
let reverseOrderSort = worldPlaces.sort((a, b) => b.localeCompare(a));
console.log(reverseOrderSort);
// Q19: CountDinner Guests
let allguest = [...guestList, newGuestInvit, ...addNewGuestInvit];
console.log(
  ` The number of people you are inviting to dinner is ${allguest.length}`
);
// Q20: Think of something you could store in a array
let pkCity = ["Peshawar", "Lahore", "Balochistan"];
console.log(pkCity);
// Q21:creates Objects
let pakistan = {
  province: ["KPK", "Sindh", "Balochistan", "Punjab"],
  captial: "Islamabad",
};
console.log(pakistan.province);
// Q22:Intentional Array Error:
console.log(pkCity[2]);
// Q23:Conditional Tests:
let iscar = "Civic";
let isgift = "Phone";
let ismarried = "married";
let is_sheCome = "yes";
let is_achivedGoodJob = "yes";

console.log(iscar == "Civic" ? "True" : " False");
console.log(isgift == "Phone" ? "True" : " False");
console.log(ismarried == "married" ? "True" : "False");
console.log(is_sheCome == "yes" ? "True" : "False");
console.log(is_achivedGoodJob == "yes" ? "True" : "False");
console.log(iscar != "Civic" ? "True" : "False");
console.log(isgift != "Phone" ? " True" : "False");
console.log(ismarried != "married" ? " True" : "False");
console.log(is_sheCome != "yes" ? " True" : "False");
console.log(is_achivedGoodJob != "yes" ? " True" : "False");

// Q24:More Conditional Tests
let isPakistanDefualt = "No";
let isSecure = "Data";
let isCheck = true;
console.log(isPakistanDefualt == "No" ? true : false);
console.log(isPakistanDefualt != "No" ? true : false);
console.log(isSecure.toLowerCase());
console.log(isCheck && isPakistanDefualt == "No" ? true : false);

// Q25:Alien Colors
let alien_color = "green";
console.log(alien_color == "green" ? "player just earned 5 points" : "");
// Q26:if-else chain
if (alien_color == "green") {
  console.log("player just earned 5 points for shooting the alien");
} else {
  console.log("player just earned 10 points.");
}
// Q27:if-else chain.
if (alien_color == "green") {
  console.log("the player earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("player just earned 10 points.");
} else if (alien_color == "red") {
  console.log("the player earned 15 points.");
}
// Q28:Stages of Life: if-else chain
let age = 23;
if (age < 2) {
  console.log("the person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("the person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("the person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("the person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("the person is an adult.");
} else {
  console.log("the person is an elder");
}
// Q29:Favorite Fruit:
let favorite_fruits = ["Banana", "Apple", "Grapes"];
if (favorite_fruits.includes("Banana")) {
  console.log("I love Banana");
} else if (favorite_fruits.includes("orange")) {
  console.log("I love Orange");
} else if (favorite_fruits.includes("Apple")) {
  console.log("I love Apple");
} else if (favorite_fruits.includes("Grapes")) {
  console.log("I love Grapes");
} else {
  console.log("I love Every Furit");
}
// Q30:Hello Admin:
let userList = ["mqtech", "yasir", "shahid", "bilal", "hash"];
for (let i = 0; i < userList.length; i++) {
  const element = userList[i];
  if (element == "mqtech") {
    console.log(`Hello ${element}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${element}, thank you for logging in again`);
  }
}
// Q31:No Users
userList = [];
if (userList.length == 0) {
  console.log("We need to find some users!");
}
// Q32:Checking Usernames already
let current_users = ["mqtech", "yasir", "shahid", "bilal", "hash"];
let new_users = ["mqtech", "hussain", "ahmer", "ali", "Yasir"];
for (let i = 0; i < new_users.length; i++) {
  const element = new_users[i];
  if (current_users.includes(element.toLowerCase())) {
    console.log("The person will need to enter a new username");
  } else {
    console.log("the username is available.");
  }
}
// Q33:Ordinal Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element == i + 1) {
    console.log(`${element}th`);
  }
}
// Q34:Pizzas Array
let pizzas = ["Chicken Fajita", "Chicken Tikka", "Cheesy Pizza"];
for (let i = 0; i < pizzas.length; i++) {
  const element = pizzas[i];
  console.log(`I like ${element}`);
}
// Q35:Animals
let animals = ["frogs", "newts", "salamanders", "toads"];
for (let i = 0; i < animals.length; i++) {
  const element = animals[i];
  console.log(element);
}
console.log("Above Animal shape is like same");

// Q36:T-Shirt:Write a function called make_shirt()
let shirt_size = 15;
let shirt_text = "Don't underestimate anyone, Not even yourself";
make_shirt(shirt_size, shirt_text);

function make_shirt(size, text) {
  console.log(`Shirt size is ${size} and text on shirt is "${text}"`);
}
// Q37:Large Shirts: Modify the make_shirt()
let shirt_s = "Large & Medium";
let shirt_tex = "I love TypeScript.";
update_make_shirt(shirt_s, shirt_tex);

function update_make_shirt(size, text) {
  console.log(`Shirt size is ${size} and text on shirt is "${text}"`);
}

// Q38:Write a function called describe_city()
let city = ["Islamabad", "Peshawar", "lahore"];
let country = "Pakistan";
for (let i = 0; i < city.length; i++) {
  describe_city(city[i], country);
}
function describe_city(city, country) {
  console.log(`${city} is the city of ${country}`);
}

// Q39:function called city_country()
let result = city_country("Lahore", "Pakistan");
console.log(`"${result[0]},${result[1]}"`);

function city_country(city, country) {
  return [city, country];
}
// Q40:function make_album()
// let albums = {
//   artist1: {
//     name: "Fiaz-Ahmad-Fiaz",
//     title: "Subh-e-Azadi",
//   },
//   artist2: {
//     name: "Mir-Taqi-Mir",
//     title: "Zikr-mir",
//   },
// };

// let albumskEY = Object.keys(albums);

// make_album(albums, albumskEY);
// function make_album(albums, albumskEY) {
//   for (const albumskEY in albums) {
//     console.log(albums[albumskEY]);
//   }
// }
//Q41:Make a array of magician’s names.
let magican = ["David Copperfield", "Doug Henning", "Siegfried and Roy"];
show_magicians(magican);
function show_magicians(magican) {
  for (let i = 0; i < magican.length; i++) {
    console.log(magican[i]);
  }
}
// Q42: Write a function called make_great()
make_great(magican);
function make_great(magican) {
  for (let i = 0; i < magican.length; i++) {
    magican[i] = `The Great ${magican[i]}`;
  }
}
console.log(show_magicians(magican));
// Q43: function make_great() with a copy of the array of magicians’ names.
// let magicanCopy = ["David Copperfield", "Doug Henning", "Siegfried and Roy"];
// console.log(make_great(magicanCopy));

// Q44:Write a function that accepts a array of items a person wants on a sandwich
let sandwich = ["Chicken Sandwich", "Egg Sandwich", "Seafood Sandwich"];
for (let i = 0; i < sandwich.length; i++) {
  person_want_sandwich(sandwich[i]);
}
function person_want_sandwich(sandwich) {
  console.log(`${sandwich} is to delish`);
}
// Q45:Write a function that stores information about a car in a Object.
carFun("civic", "Honda", "2016", "red");
function carFun(name, manuf, model, color) {
  let obj = {
    car: {
      name: name,
      manuf: manuf,
      model: model,
      color: color,
    },
  };
  console.log(obj);
}
