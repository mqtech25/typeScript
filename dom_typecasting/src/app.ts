let inputArray: any = document.querySelectorAll(".inputFields")!;
let submitBtn = document.querySelector(".calcEmpBtn")!;
let allInputInObj: {
  properties: string;
} = { properties: "" };
// console.log(inputArray);
// for (const key in inputArray) {
//   console.log(inputArray[key]);
// }

let eventFunction = (e: Event) => {
  e.preventDefault();
  for (const key in inputArray) {
    if (inputArray.hasOwnProperty.call(inputArray, key)) {
      const element = inputArray[key];
      console.log(element.value, element.id);
      allInputInObj.properties = element.id;
      console.log(allInputInObj);

        allInputInObj.[element.id] = element.value;
    }
  }
};

submitBtn?.addEventListener("click", eventFunction);
