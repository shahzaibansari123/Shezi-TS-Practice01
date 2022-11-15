const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.querySelector("button");

const add = (n1, n2) => {
  return n1 + n2;
};

button.addEventListener("click", ()=>{
    console.log(add(input1.value, input2.value))
})
