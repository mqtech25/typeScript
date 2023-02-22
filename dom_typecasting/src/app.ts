// const input=document.getElementById("#ename")!;
// console.log(input);
const form= document.querySelector("#formIncome") as HTMLFormElement;
const input=document.querySelector("#ename") as HTMLInputElement;

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault();
    console.log(input.value);

})