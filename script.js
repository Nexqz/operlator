const display = document.querySelector(".display");

function displayValue(input) {
  display.value += input;
}

function calculateValue() {
  const expression = display.value.replace(/x/g, "*");

  try {
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}

function deleteValue() {
  display.value = display.value.toString().slice(0, -1);
}

function clearValue() {
  display.value = "";
}
