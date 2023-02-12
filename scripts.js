const result = document.getElementById("result");
const clear = document.getElementById("clear");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const equals = document.getElementById("equals");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");

clear.addEventListener("click", function () {
  result.value = "";
});

divide.addEventListener("click", function () {
  result.value += "/";
});

multiply.addEventListener("click", function () {
  result.value += "*";
});

subtract.addEventListener("click", function () {
  result.value += "-";
});

add.addEventListener("click", function () {
  result.value += "+";
});

decimal.addEventListener("click", function () {
  result.value += ".";
});

equals.addEventListener("click", function () {
  result.value = eval(result.value);
});

one.addEventListener("click", function () {
  result.value += "1";
});

two.addEventListener("click", function () {
  result.value += "2";
});

three.addEventListener("click", function () {
  result.value += "3";
});

four.addEventListener("click", function () {
  result.value += "4";
});

five.addEventListener("click", function () {
  result.value += "5";
});

six.addEventListener("click", function () {
  result.value += "6";
});

seven.addEventListener("click", function () {
  result.value += "7";
});

eight.addEventListener("click", function () {
  result.value += "8";
});

nine.addEventListener("click", function () {
  result.value += "9";
});

zero.addEventListener("click", function () {
  result.value += "0";
});
