// const input=document.getElementById("#ename")!;
// console.log(input);
import { myInterface } from "./hasReturnValue";
const form = document.querySelector("#formIncome") as HTMLFormElement;
const input = document.querySelector("#ename") as HTMLInputElement;

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

function name(params: myInterface) {
  console.log(params.age);
  console.log(params.value());
}
name({
  age: 8,
  value() {
    return "dsdsds";
  },
});
