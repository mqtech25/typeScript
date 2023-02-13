// // Q2:Personal Message
// const user = "Hello Qasim, would you like to learn some Javascript today?";
// const username = "muhammad qasim";
// console.log(user);
// // Q3:Name Cases
// const titleCAse = username.split(" ").map((item, i) => {
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
  "Hana kaba",
  "KaKrbala",
  "Burj khalifa",
  "Iceland",
  "New york",
];
console.log(worldPlaces);

worldPlaces.sort((a, b) => a.localeCompare(b));
console.log(worldPlaces);
console.log(worldPlaces.reverse());
