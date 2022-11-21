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

const person:{
    name: string;
    age: string;
    hobbies: string[];
    email?: string;
    // email: string;
}={
    name: "Shahzaib",
    age: "21",
    hobbies: ["sports"],
    // email: "",

}

person.email="shahzaib@abc.com"
