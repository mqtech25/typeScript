import { listOfEmployee, Calculation } from "./module/calculation.js";

let inputArray: any = document.querySelectorAll(".inputFields")!;
let submitBtn = document.querySelector(".calcEmpBtn")!;



let allEmployeeObj = new Map();
// let allEmployees: any[] = [];
let count = 0;
let employees: any = []
let eventFunction = (e: Event) => {
  let employee: any = {}
  e.preventDefault();
  for (const key in inputArray) {
    if (inputArray.hasOwnProperty.call(inputArray, key)) {
      const element = inputArray[key];
      employee[element.id] = element.value;
    }
  }
  employees.push(employee);


  // count++;
  // // object assign to object
  // allEmployeeObj.set("emplyee" + count, employee);
  // console.log(allEmployeeObj);
  const list = listOfEmployee(employees);
  let trs = "";

  list.forEach((v, i) => {
    trs += showTableTr(v)
  })

  function showTableTr(data: Calculation){
    return `
    <tr>
      <th scope="row">1</th>
      <td>${data.ename}</td>
      <td>${data.calcationValue()}</td>
      <td>@mdo</td>
    </tr>
    `;
  }
  
  document.getElementById('body')!.innerHTML = trs;

  // console.log(list);
  
  // // object assign to array
  // allEmployees.push(employee);
  // console.log(allEmployees);

  // allEmployeeObj.forEach((value: Map<any, any>, key) => {
  //   console.log(`${key}: ${value}`);
  //   value.forEach((value1, key1) => {
  //     console.log(`${key1}: ${value1}`);
  //   });
  // });
};
submitBtn?.addEventListener("click", eventFunction);
