var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // Q2:Personal Message
console.log("Q:No2");
var List = "Hello Qasim, would you like to learn some Javascript today?";
console.log(List);
// Q3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Q:No3");
var username = "muhammad qasim";
var titleCAse = username.split(" ").map(function (item, i) {
    return item.charAt(0).toUpperCase() + item.slice(1);
});
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(titleCAse.join(" "));
// Q4:Famous Quote
console.log("Q:No4");
console.log("Dr Israr Ahmed once said, \"Your actions and values define you.\"");
// Q5:Famous Quote
console.log("Q:No5");
var author = "Dr Israr Ahmed";
var msg = "".concat(author, " once said, \"Your actions and values define you.\"");
console.log(msg);
// Q6:Stripping Names
console.log("Q:No6");
var sname = "   Qasim   ";
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
var no = 7;
console.log("".concat(no, " is my Fav number"));
// // Q10:Adding Comments
console.log("Q:No9");
console.log("Adding Comments");
// Q11:Names Array
console.log("Q:No11");
var friend = ["Yasir", "Bilal", "Hashmat"];
friend.map(function (name, _) {
    console.log(name);
});
// Q12:Greetings: Start with the array you used in Exercise 11 with message
console.log("Q:No12");
friend.map(function (name, _) {
    console.log("".concat(name, " is my best friends"));
});
// Q13:Think of your favorite mode of transportation
console.log("Q:No13");
var favTransport = ["Dodge Tomahawk", "Chevrolet Bolt"];
favTransport.map(function (item, _) {
    console.log("I would like to own ".concat(item));
});
// Q14:Guest List
console.log("Q:No14");
var guestlist = ["Sir Qasim", "Hashmat", "Yasir"];
guestlist.map(function (name, _) {
    console.log("".concat(name, ", Can you please come tonight at my home for dinner?"));
});
// Q15:Changing Guest List
console.log("Q:No15");
var guestNotcome = "Hashmat";
var newGuestinvit = "Ahmer";
var newGuestlist = guestlist.filter(function (guest, i) {
    return guest != guestNotcome;
});
newGuestlist.push(newGuestinvit);
var indexOfNewguest = newGuestlist.indexOf(newGuestinvit);
console.log(newGuestlist);
newGuestlist.map(function (guest, i) {
    i == indexOfNewguest
        ? console.log("".concat(guest, ", Can you please come tonight at my home for dinner?"))
        : console.log("Already Invited");
});
// Q16:add More Guests
console.log("Q:No16");
var addNewGuestinvit = ["Ali", "Shazaib", "Hammad"];
var allGuestlist = __spreadArray(__spreadArray([], newGuestlist, true), addNewGuestinvit, true);
var _loop_1 = function (index) {
    var element = allGuestlist[index];
    addNewGuestinvit.some(function (name, _) {
        if (name == element) {
            console.log("".concat(name, ", Can you please come tonight at my home for dinner?"));
        }
    });
};
for (var index = 0; index < allGuestlist.length; index++) {
    _loop_1(index);
}
//Q17:Shrinking Guest List
console.log("Q:No17");
var shrinkguest = allGuestlist.filter(function (guest, i) {
    if (i > 1) {
        console.log("".concat(guest, ", sorry you can\u2019t invite them to dinner"));
    }
    else {
        console.log("".concat(guest, ", your're still invited"));
        return guest;
    }
});
while (shrinkguest.length > 0) {
    shrinkguest.pop();
} //empty array
console.log(shrinkguest);
// Q18:Seeing the World: Think of at least five places
console.log("Q:No18");
var worldPlaces = [
    "khana kaba",
    "Karbala",
    "Burj khalifa",
    "Iceland",
    "New york",
];
console.log(worldPlaces);
var ascArray = __spreadArray([], worldPlaces, true).sort(function (a, b) { return a.localeCompare(b); });
console.log(ascArray);
console.log(worldPlaces);
var decArray = __spreadArray([], worldPlaces, true).sort(function (a, b) { return b.localeCompare(a); });
console.log(decArray);
console.log(worldPlaces);
var reversOrder = worldPlaces.reverse();
console.log(reversOrder);
var reversOrginalOrder = worldPlaces.reverse();
console.log(reversOrginalOrder);
var sortOrder = worldPlaces.sort(function (a, b) { return a.localeCompare(b); });
console.log(sortOrder);
var reverseOrderSort = worldPlaces.sort(function (a, b) { return b.localeCompare(a); });
console.log(reverseOrderSort);
// Q19: CountDinner Guests
console.log("Q:No19");
var allguest = __spreadArray(__spreadArray(__spreadArray([], guestlist, true), [newGuestinvit], false), addNewGuestinvit, true);
console.log(" The number of people you are inviting to dinner is ".concat(allguest.length));
// Q20: Think of something you could store in a array
console.log("Q:No20");
var pkCity = ["Peshawar", "Lahore", "Balochistan"];
console.log(pkCity);
// Q21:creates Objects
console.log("Q:No21");
var pakistan = {
    province: ["KPK", "Sindh", "Balochistan", "Punjab"],
    captial: "Islamabad"
};
console.log(pakistan.province);
// Q22:Intentional Array Error:
console.log("Q:No22");
console.log(pkCity[3]);
console.log(pkCity[2]);
// Q23:Conditional Tests:
console.log("Q:No23");
var iscar = "Civic";
var isgift = "Phone";
var ismarried = "married";
var is_sheCome = "yes";
var is_achivedGoodJob = "yes";
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
var isPakistanDefualt = "No";
var isSecure = "Data";
var isCheck = true;
var isArray = ["item1"];
console.log(isPakistanDefualt == "No" ? true : false);
console.log(isPakistanDefualt != "No" ? true : false);
console.log(isSecure.toLowerCase());
console.log(isCheck && isPakistanDefualt == "No" ? true : false);
console.log(isPakistanDefualt == "" || isSecure == "Data" ? true : false);
console.log(isArray.length == 0 ? "Array empty" : "Array is not empty");
// Q25:Alien Colors
console.log("Q:No25");
var alien_color = "green";
console.log(alien_color == "green" ? "player just earned 5 points" : "");
// Q26:if-else chain
if (alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points.");
}
// Q27:if-else chain.
console.log("Q:No27");
if (alien_color == "green") {
    console.log("the player earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("the player earned 15 points.");
}
// Q28:Stages of Life: if-else chain
console.log("Q:No28");
var age = 23;
if (age < 2) {
    console.log("the person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("the person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("the person is an adult.");
}
else {
    console.log("the person is an elder");
}
// Q29:Favorite Fruit:
console.log("Q:No29");
var favorite_fruits = ["Banana", "Apple", "Grapes"];
favorite_fruits.some(function (furit) {
    if (furit == "Banana") {
        console.log("I love Banana");
    }
    else if (furit == "orange") {
        console.log("I love Orange");
    }
    else if (furit == "Apple") {
        console.log("I love Apple");
    }
    else if (furit == "Grapes") {
        console.log("I love Grapes");
    }
    else {
        console.log("I love Every Furit");
    }
});
// Q30:Hello Admin:
console.log("Q:No30");
var userList = ["mqtech", "yasir", "shahid", "bilal", "hash"];
for (var i = 0; i < userList.length; i++) {
    var element = userList[i];
    if (element == "mqtech") {
        console.log("Hello ".concat(element.toUpperCase(), ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(element.toUpperCase(), ", thank you for logging in again"));
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
var current_users = ["mqtech", "yasir", "shahid", "bilal", "hash"];
var new_users = ["mqtech", "hussain", "ahmer", "ali", "Yasir"];
new_users.some(function (r) {
    if (current_users.indexOf(r.toLowerCase()) >= 0) {
        console.log("The person will need to enter a new username");
    }
    else {
        console.log("the username is available.");
    }
});
// Q33:Ordinal Numbers
console.log("Q:No33");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (element == i + 1) {
        console.log("".concat(element, "th"));
    }
}
// Q34:Pizzas Array
console.log("Q:No34");
var pizzas = ["Chicken Fajita", "Chicken Tikka", "Cheesy Pizza"];
for (var i = 0; i < pizzas.length; i++) {
    var element = pizzas[i];
    console.log("I like ".concat(element));
}
// Q35:Animals
console.log("Q:No35");
var animals = ["frogs", "newts", "salamanders", "toads"];
for (var i = 0; i < animals.length; i++) {
    var element = animals[i];
    console.log(element);
}
console.log("Above Animal shape is like same");
// Q36:T-Shirt:Write a function called make_shirt()
console.log("Q:No36");
var shirt_size = 15;
var shirt_text = "Don't underestimate anyone, Not even yourself";
make_shirt(shirt_size, shirt_text);
function make_shirt(size, text) {
    console.log("Shirt size is ".concat(size, " and text on shirt is \"").concat(text, "\""));
}
// Q37:Large Shirts: Modify the make_shirt()
console.log("Q:No37");
var shirt_s = "Large & Medium";
var shirt_tex = "I love TypeScript.";
update_make_shirt(shirt_s, shirt_tex);
function update_make_shirt(size, text) {
    console.log("Shirt size is ".concat(size, " and text on shirt is \"").concat(text, "\""));
}
// Q38:Write a function called describe_city()
console.log("Q:No38");
var city = ["Islamabad", "Peshawar", "Sharjah"];
var country = "Pakistan";
for (var i = 0; i < city.length; i++) {
    describe_city(city[i], country);
}
function describe_city(city, country) {
    if (city == "Sharjah") {
        console.log("".concat(city, " is not the city of ").concat(country));
    }
    else {
        console.log("".concat(city, " is the city of ").concat(country));
    }
}
// Q39:function called city_country()
console.log("Q:No39");
var result = city_country("Lahore", "Pakistan");
console.log(result);
function city_country(city, country) {
    var response = "\"".concat(city, ",").concat(country, "\"");
    return response;
}
// Q40:function make_album()
console.log("Q:No40");
var albums = {
    artist1: {
        name: "Fiaz-Ahmad-Fiaz",
        title: "Subh-e-Azadi"
    },
    artist2: {
        name: "Mir-Taqi-Mir",
        title: "Zikr-mir"
    }
};
var albumsTrackkeY = Object.keys(albums);
make_album(albums, albumsTrackkeY);
function make_album(albums, albumsTrackkeY) {
    albumsTrackkeY.forEach(function (element) {
        console.log(albums[element]);
    });
}
//Q41:Make a array of magician’s names.
console.log("Q:No41");
var magican = [
    "David Copperfield",
    "Doug Henning",
    "Siegfried and Roy",
];
show_magicians(magican);
function show_magicians(magican) {
    for (var i = 0; i < magican.length; i++) {
        console.log(magican[i]);
    }
}
// Q42: Write a function called make_great()
console.log("Q:No42");
make_great(magican);
function make_great(magican) {
    for (var i = 0; i < magican.length; i++) {
        magican[i] = "The Great ".concat(magican[i]);
    }
}
console.log(show_magicians(magican));
// Q43: function make_great() with a copy of the array of magicians’ names.
console.log("Q:No43");
var magicanCopy = [
    "David Copperfield",
    "Doug Henning",
    "Siegfried and Roy",
];
make_great(__spreadArray([], magicanCopy, true));
console.log(show_magicians(magicanCopy));
make_great(magicanCopy);
console.log(show_magicians(magicanCopy));
// Q44:Write a function that accepts a array of items a person wants on a sandwich
console.log("Q:No44");
var sandwich = [
    "Chicken Sandwich",
    "Egg Sandwich",
    "Seafood Sandwich",
];
for (var i = 0; i < sandwich.length; i++) {
    person_want_sandwich(sandwich[i]);
}
function person_want_sandwich(sandwich) {
    console.log("".concat(sandwich, " is to delish"));
}
// // Q45:Write a function that stores information about a car in a Object.
var carDetail = carFun("civic", "Honda", 2016, "red");
console.log(carDetail);
function carFun(name, manuf, model, color) {
    var _a;
    var car = (_a = {},
        _a[name] = {
            manuf: manuf,
            model: model,
            color: color
        },
        _a);
    return car;
}
