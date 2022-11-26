// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")!;

// const add = (n1: number, n2 : number) => {
//   return n1 + n2;
// };

// button.addEventListener("click", () => {
//   console.log(add(+input1.value, +input2.value));
// });

// ---------------------------------------

// primitive types

// boolean true/false
// string "Abc"
// number 12, 5.5, -23
// etc

// -------------------------------------------

// let person: string;
// person = "Shahzaib";

// ----------------------------------------------

// simple
// const names=["Shahzaib", "Shareh", "Khubaib"]

// ts
// let names: string[] =[]
// names.push("Shahzaib")

// -----------------------------------------------

// const person:{
//     name: string;
//     age: string;
//     hobbies: string[];
//     // email?: string;
//     email: string;
// }={
//     name: "Shahzaib",
//     age: "21",
//     hobbies: ["sports"],
//     email: "",

// }

// person.email="shahzaib@abc.com"

// -----------------------------------------------------

// type Customer = {
//   name: string;
//   age: string;
//   hobbies: string[];
//   // email?: string;
//   email: string;
// };

// let customersList : Customer[] = [];

// const person1: Customer = {
//   name: "Shahzaib",
//   age: "21",
//   hobbies: ["sports"],
//   email: "",
// };

// customersList.push(person1);

// customersList.push({
//   name: "rushal",
//   age: 21,
//   hobbies: ["movies"],
//   email: "",

// })

// -----------------------------------------------------

// const statuses =[404, "not found"]

// const role : [number, string]=[0, "admin"]

// role[1]="customer"

//problem in typescript as it allow push on fixed length tuple or array
// role.push("shezi")

//--------------------------------------------------------

// let data: string | number
// data= "Shahzaib"
// data= "07"

//--------------------------------------------------------

// literal type

// function myFunc(num1: number, num2: number, opr: "+" | "-"){
//     if(opr === "+"){
//         return num1 + num2;
//     }else if(opr === "-"){
//             return num1 - num2;
//     }
// }

// console.log(myFunc(2,2,"+"))

//--------------------------------------------------------

// storing function in variable

let addFunc: (x: number, y: number) => number;
const add = (n1: number, n2: number): number => {
    return n1 + n2;
};

// const add = (n1: number, n2: number, cb: (x: boolean) => void): number => {
//   cb(true)
//     return n1 + n2;
// };

addFunc = add;
