"use strict";
let inputArray = document.querySelectorAll(".inputFields");
let submitBtn = document.querySelector(".calcEmpBtn");
let allInputInObj = {};
// console.log(inputArray);
// for (const key in inputArray) {
//   console.log(inputArray[key]);
// }
let eventFunction = (e) => {
    e.preventDefault();
    for (const key in inputArray) {
        if (inputArray.hasOwnProperty.call(inputArray, key)) {
            const element = inputArray[key];
            // console.log(element.value, element.id);
            //   allInputInObj.properties = element.id;
            allInputInObj = {
                [element.id]: element.value
            };
        }
    }
    console.log(allInputInObj);
};
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", eventFunction);
