"use strict";
// const input=document.getElementById("#ename")!;
// console.log(input);
const form = document.querySelector("#formIncome");
const input = document.querySelector("#ename");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
});
