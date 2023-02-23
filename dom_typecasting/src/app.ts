let inputArray: any = document.querySelectorAll(".inputFields")!;
let submitBtn = document.querySelector(".calcEmpBtn")!;
let employee = new Map();
let allEmployeeObj = new Map();
let allEmployees: any[] = [];
let count = 0;
let eventFunction = (e: Event) => {
  e.preventDefault();
  for (const key in inputArray) {
    if (inputArray.hasOwnProperty.call(inputArray, key)) {
      const element = inputArray[key];
      employee.set(element.id, element.value);
    }
  }
  count++;
  // object assign to object
  allEmployeeObj.set("emplyee" + count, employee);
  console.log(allEmployeeObj);
  // object assign to array
  // allEmployees.push(employee);
  // console.log(allEmployees);

  allEmployeeObj.forEach((value: Map<any, any>, key) => {
    console.log(`${key}: ${value}`);
    value.forEach((value1, key1) => {
      console.log(`${key1}: ${value1}`);
    });
  });
};
submitBtn?.addEventListener("click", eventFunction);
