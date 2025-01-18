const colcNumber = document.getElementById("colcNumber");
const operator = document.getElementById("operator");
const colcNumberSecond = document.getElementById("colcNumberSecond");
const colcResult = document.getElementById("colcResult");
const resuit = document.getElementById("resuit");

colcResult.addEventListener("click", function () {
  const a = parseFloat(colcNumber.value);
  const b = parseFloat(colcNumberSecond.value);
  let result1 = 0;
  switch (operator.value) {
    case "+":
      result1 = a + b;
      break;
    case "-":
      result1 = a - b;
      break;
    case "*":
      result1 = a * b;
      break;
    case "/":
      result1 = a / b;
      break;
    case "%":
      result1 = a % b;
      break;
    case "**":
      result1 = a ** b;
      break;
    case "two":
      result1 = parseInt(a, 2);
      break;
  }

  resuit.textContent = result1;
});

/*
111 = 1*2**2 + 1*2**1+ 1*2**0=

*/
