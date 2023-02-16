// // Q2:Personal Message
console.log("Q:No2");

const List: string =
  "Hello Qasim, would you like to learn some Javascript today?";
console.log(List);
// Q3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Q:No3");

const username: string = "muhammad qasim";
const titleCAse = username.split(" ").map((item, i) => {
  return item.charAt(0).toUpperCase() + item.slice(1);
});

console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(titleCAse.join(" "));
// Q4:Famous Quote
console.log("Q:No4");

console.log(`Dr Israr Ahmed once said, "Your actions and values define you."`);

// Q5:Famous Quote
console.log("Q:No5");

const author: string = "Dr Israr Ahmed";
const msg = `${author} once said, "Your actions and values define you."`;
console.log(msg);
// Q6:Stripping Names
console.log("Q:No6");

const sname: string = "   Qasim   ";

console.log(sname);
console.log(sname.trim());
// Q7,Q8:Number Eight
console.log("Q:No7,Q:No8");

console.log(4 + 4);

console.log(-(-4 - 4));
console.log(4 * 2);
console.log(16 / 2);
// Q9:Favorite Number
console.log("Q:No9");

const no: number = 7;
console.log(`${no} is my Fav number`);
// // Q10:Adding Comments
console.log("Q:No9");

console.log("Adding Comments");

// Q11:Names Array
console.log("Q:No11");

const friend: string[] = ["Yasir", "Bilal", "Hashmat"];
friend.map((name, _) => {
  console.log(name);
});
// Q12:Greetings: Start with the array you used in Exercise 11 with message
console.log("Q:No12");

friend.map((name, _) => {
  console.log(`${name} is my best friends`);
});
// Q13:Think of your favorite mode of transportation
console.log("Q:No13");

const favTransport: string[] = ["Dodge Tomahawk", "Chevrolet Bolt"];
favTransport.map((item, _) => {
  console.log(`I would like to own ${item}`);
});
// Q14:Guest List
console.log("Q:No14");

const guestlist: string[] = ["Sir Qasim", "Hashmat", "Yasir"];
guestlist.map((name, _) => {
  console.log(`${name}, Can you please come tonight at my home for dinner?`);
});
// Q15:Changing Guest List
console.log("Q:No15");

const guestNotcome: string = "Hashmat";
const newGuestinvit: string = "Ahmer";
const newGuestlist = guestlist.filter((guest, i) => {
  return guest != guestNotcome;
});
newGuestlist.push(newGuestinvit);
const indexOfNewguest: number = newGuestlist.indexOf(newGuestinvit);
console.log(newGuestlist);

newGuestlist.map((guest, i) => {
  i == indexOfNewguest
    ? console.log(
        `${guest}, Can you please come tonight at my home for dinner?`
      )
    : console.log("Already Invited");
});
// Q16:add More Guests
console.log("Q:No16");

const addNewGuestinvit: string[] = ["Ali", "Shazaib", "Hammad"];
const allGuestlist: string[] = [...newGuestlist, ...addNewGuestinvit];
for (let index = 0; index < allGuestlist.length; index++) {
  const element = allGuestlist[index];
  addNewGuestinvit.some((name,_) => {
    if (name == element) {
      console.log(
        `${name}, Can you please come tonight at my home for dinner?`
      );
    }
  });
}
//Q17:Shrinking Guest List
console.log("Q:No17");

const shrinkguest: string[] = allGuestlist.filter((guest, i) => {
  if (i > 1) {
    console.log(`${guest}, sorry you can’t invite them to dinner`);
  } else {
    console.log(`${guest}, your're still invited`);
    return guest;
  }
});
while (shrinkguest.length > 0) {
  shrinkguest.pop();
} //empty array
console.log(shrinkguest);
// Q18:Seeing the World: Think of at least five places
console.log("Q:No18");

const worldPlaces: string[] = [
  "khana kaba",
  "Karbala",
  "Burj khalifa",
  "Iceland",
  "New york",
];
console.log(worldPlaces);
let ascArray: string[] = [...worldPlaces].sort((a, b) => a.localeCompare(b));
console.log(ascArray);
console.log(worldPlaces);
let decArray: string[] = [...worldPlaces].sort((a, b) => b.localeCompare(a));
console.log(decArray);
console.log(worldPlaces);
let reversOrder: string[] = worldPlaces.reverse();
console.log(reversOrder);
let reversOrginalOrder: string[] = worldPlaces.reverse();
console.log(reversOrginalOrder);
let sortOrder: string[] = worldPlaces.sort((a, b) => a.localeCompare(b));
console.log(sortOrder);
let reverseOrderSort: string[] = worldPlaces.sort((a, b) => b.localeCompare(a));
console.log(reverseOrderSort);
// Q19: CountDinner Guests
console.log("Q:No19");

let allguest: string[] = [...guestlist, newGuestinvit, ...addNewGuestinvit];
console.log(
  ` The number of people you are inviting to dinner is ${allguest.length}`
);
// Q20: Think of something you could store in a array
console.log("Q:No20");

let pkCity: string[] = ["Peshawar", "Lahore", "Balochistan"];
console.log(pkCity);
// Q21:creates Objects
console.log("Q:No21");

let pakistan: { province: string[]; captial: string } = {
  province: ["KPK", "Sindh", "Balochistan", "Punjab"],
  captial: "Islamabad",
};
console.log(pakistan.province);
// Q22:Intentional Array Error:
console.log("Q:No22");

console.log(pkCity[3]);
console.log(pkCity[2]);
// Q23:Conditional Tests:
console.log("Q:No23");

let iscar: string = "Civic";
let isgift: string = "Phone";
let ismarried: string = "married";
let is_sheCome: string = "yes";
let is_achivedGoodJob: string = "yes";

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
console.log("Q:No24");

let isPakistanDefualt: string = "No";
let isSecure: string = "Data";
let isCheck: boolean = true;
let isArray: string[] = ["item1"];
console.log(isPakistanDefualt == "No" ? true : false);
console.log(isPakistanDefualt != "No" ? true : false);
console.log(isSecure.toLowerCase());
console.log(isCheck && isPakistanDefualt == "No" ? true : false);
console.log(isPakistanDefualt == "" || isSecure == "Data" ? true : false);
console.log(isArray.length == 0 ? "Array empty" : "Array is not empty");

// Q25:Alien Colors
console.log("Q:No25");

let alien_color: string = "green";
console.log(alien_color == "green" ? "player just earned 5 points" : "");
// Q26:if-else chain
if (alien_color == "green") {
  console.log("player just earned 5 points for shooting the alien");
} else {
  console.log("player just earned 10 points.");
}
// Q27:if-else chain.
console.log("Q:No27");

if (alien_color == "green") {
  console.log("the player earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("player just earned 10 points.");
} else if (alien_color == "red") {
  console.log("the player earned 15 points.");
}
// Q28:Stages of Life: if-else chain
console.log("Q:No28");

let age: number = 23;
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
console.log("Q:No29");

let favorite_fruits: string[] = ["Banana", "Apple", "Grapes"];
favorite_fruits.some((furit)=>{
  if (furit=="Banana") {
    console.log("I love Banana");
  } else if (furit=="orange") {
    console.log("I love Orange");
  } else if (furit=="Apple") {
    console.log("I love Apple");
  } else if (furit=="Grapes") {
    console.log("I love Grapes");
  } else {
    console.log("I love Every Furit");
  }
})

// Q30:Hello Admin:
console.log("Q:No30");

let userList: string[] = ["mqtech", "yasir", "shahid", "bilal", "hash"];
for (let i = 0; i < userList.length; i++) {
  const element: string = userList[i];
  if (element == "mqtech") {
    console.log(
      `Hello ${element.toUpperCase()}, would you like to see a status report?`
    );
  } else {
    console.log(
      `Hello ${element.toUpperCase()}, thank you for logging in again`
    );
  }
}
// Q31:No Users
console.log("Q:No31");

userList = [];
if (userList.length == 0) {
  console.log("We need to find some users!");
}
// Q32:Checking Usernames already
console.log("Q:No32");

let current_users: string[] = ["mqtech", "yasir", "shahid", "bilal", "hash"];
let new_users: string[] = ["mqtech", "hussain", "ahmer", "ali", "Yasir"];

new_users.some(r=> {
  if(current_users.indexOf(r.toLowerCase()) >= 0){
          console.log("The person will need to enter a new username");
}else{
        console.log("the username is available.");
}
})
// Q33:Ordinal Numbers
console.log("Q:No33");

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  const element: number = numbers[i];
  if (element == i + 1) {
    console.log(`${element}th`);
  }
}
// Q34:Pizzas Array
console.log("Q:No34");

let pizzas: string[] = ["Chicken Fajita", "Chicken Tikka", "Cheesy Pizza"];
for (let i = 0; i < pizzas.length; i++) {
  const element: string = pizzas[i];
  console.log(`I like ${element}`);
}
// Q35:Animals
console.log("Q:No35");

let animals: string[] = ["frogs", "newts", "salamanders", "toads"];
for (let i = 0; i < animals.length; i++) {
  const element: string = animals[i];
  console.log(element);
}
console.log("Above Animal shape is like same");

// Q36:T-Shirt:Write a function called make_shirt()
console.log("Q:No36");

let shirt_size: number = 15;
let shirt_text: string = "Don't underestimate anyone, Not even yourself";
make_shirt(shirt_size, shirt_text);

function make_shirt(size: number, text: string) {
  console.log(`Shirt size is ${size} and text on shirt is "${text}"`);
}
// Q37:Large Shirts: Modify the make_shirt()
console.log("Q:No37");

let shirt_s: string = "Large & Medium";
let shirt_tex: string = "I love TypeScript.";
update_make_shirt(shirt_s, shirt_tex);

function update_make_shirt(size: string, text: string) {
  console.log(`Shirt size is ${size} and text on shirt is "${text}"`);
}
// Q38:Write a function called describe_city()
console.log("Q:No38");

let city: string[] = ["Islamabad", "Peshawar", "Sharjah"];
let country: string = "Pakistan";
for (let i = 0; i < city.length; i++) {
  describe_city(city[i], country);
}
function describe_city(city: string, country: string) {
  if (city == "Sharjah") {
    console.log(`${city} is not the city of ${country}`);
  } else {
    console.log(`${city} is the city of ${country}`);
  }
}

// Q39:function called city_country()
console.log("Q:No39");

let result = city_country("Lahore", "Pakistan");
console.log(result);

function city_country(city: string, country: string): string {
  let response: string = `"${city},${country}"`;
  return response;
}
// Q40:function make_album()
console.log("Q:No40");

let albums = {
  artist1: {
    name: "Fiaz-Ahmad-Fiaz",
    title: "Subh-e-Azadi",
  },
  artist2: {
    name: "Mir-Taqi-Mir",
    title: "Zikr-mir",
  },
};

let albumsTrackkeY: string[] = Object.keys(albums);

make_album(albums, albumsTrackkeY);

function make_album(albums: object, albumsTrackkeY: string[]) {
 albumsTrackkeY.forEach((element)=>{
  console.log(albums[element]);
 })
}
//Q41:Make a array of magician’s names.
console.log("Q:No41");

let magican: string[] = [
  "David Copperfield",
  "Doug Henning",
  "Siegfried and Roy",
];
show_magicians(magican);
function show_magicians(magican: string[]) {
  for (let i = 0; i < magican.length; i++) {
    console.log(magican[i]);
  }
}
// Q42: Write a function called make_great()
console.log("Q:No42");

make_great(magican);
function make_great(magican: string[]) {
  for (let i = 0; i < magican.length; i++) {
    magican[i] = `The Great ${magican[i]}`;
  }
}
console.log(show_magicians(magican));
// Q43: function make_great() with a copy of the array of magicians’ names.
console.log("Q:No43");

let magicanCopy: string[] = [
  "David Copperfield",
  "Doug Henning",
  "Siegfried and Roy",
];
make_great([...magicanCopy])
console.log(show_magicians(magicanCopy));
make_great(magicanCopy)
console.log(show_magicians(magicanCopy));

// Q44:Write a function that accepts a array of items a person wants on a sandwich
console.log("Q:No44");

let sandwich: string[] = [
  "Chicken Sandwich",
  "Egg Sandwich",
  "Seafood Sandwich",
];
for (let i = 0; i < sandwich.length; i++) {
  person_want_sandwich(sandwich[i]);
}
function person_want_sandwich(sandwich) {
  console.log(`${sandwich} is to delish`);
}
// // Q45:Write a function that stores information about a car in a Object.
let carDetail=carFun("civic", "Honda", 2016, "red");
console.log(carDetail);

function carFun(name:string, manuf:string, model:number, color:string) {
  let car = {
    [name]:{
      manuf: manuf,
      model: model,
      color: color,
    }
  };
  return car;
}
