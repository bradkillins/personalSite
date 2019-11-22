//operators functions

const add = (num1, num2) => {
  return num1 + num2;
};

const sub = (num1, num2) => {
  return num1 - num2;
};

const times = (num1, num2) => {
  return num1 * num2;
};

const div = (num1, num2) => {
  return num1 / num2;
};

const mod = (num1, num2) => {
  return num1 % num2;
};

//get elements and set them to appropriate variable

const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const timesBtn = document.querySelector("#times");
const divBtn = document.querySelector("#div");
const modBtn = document.querySelector("#mod");
const clearBtn = document.querySelector("#clear");
const resultBox = document.querySelector("#result");

//event listeners on each operator button:

addBtn.addEventListener("click", function() {
  //get value entered in input boxes, and convert to float number (treated as string otherwise)
  const value1 = parseFloat(document.querySelector("#value1").value);
  const value2 = parseFloat(document.querySelector("#value2").value);

  //Update element with id "result" with the result of addition
  resultBox.textContent = add(value1, value2);
});

subBtn.addEventListener("click", function() {
  //get value entered in input boxes, and convert to float number (treated as string otherwise)
  const value1 = parseFloat(document.querySelector("#value1").value);
  const value2 = parseFloat(document.querySelector("#value2").value);

  //Update element with id "result" with the result of subtraction
  resultBox.textContent = sub(value1, value2);
});

timesBtn.addEventListener("click", function() {
  //get value entered in input boxes, and convert to float number (treated as string otherwise)
  const value1 = parseFloat(document.querySelector("#value1").value);
  const value2 = parseFloat(document.querySelector("#value2").value);

  //Update element with id "result" with the result of multiplication
  resultBox.textContent = times(value1, value2);
});

divBtn.addEventListener("click", function() {
  //get value entered in input boxes, and convert to float number (treated as string otherwise)
  const value1 = parseFloat(document.querySelector("#value1").value);
  const value2 = parseFloat(document.querySelector("#value2").value);

  //Update element with id "result" with the result of division
  resultBox.textContent = div(value1, value2);
});

modBtn.addEventListener("click", function() {
  //get value entered in input boxes, and convert to float number (treated as string otherwise)
  const value1 = parseFloat(document.querySelector("#value1").value);
  const value2 = parseFloat(document.querySelector("#value2").value);

  //Update element with id "result" with the result of mod operation
  resultBox.textContent = mod(value1, value2);
});

//clear input boxes and results box
clearBtn.addEventListener("click", function() {
  document.querySelector("#value1").value = "";
  document.querySelector("#value2").value = "";
  resultBox.textContent = "";
});
