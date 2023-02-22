const form = document.querySelector("#formIncome");
const input = document.querySelector("#ename");
// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();
// });
// const x: hasReturnValue = {
//   returnValue: () => {
//     return "dddd";
//   },
// };
// console.log(x);
// function check() {
//     return returnValue() => { };
// }
// const p: myInterface = {
//   age: 5,
//   value() {
//     return "";
//   },
// };
function name(params) {
    console.log(params.age);
    console.log(params.value());
}
name({
    age: 8,
    value() {
        return "dsdsds";
    },
});
export {};
