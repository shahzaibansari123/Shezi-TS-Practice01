var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.querySelector("button");
var add = function (n1, n2) {
    return n1 + n2;
};
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});

