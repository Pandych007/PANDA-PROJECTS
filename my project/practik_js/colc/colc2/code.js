let privuImput = "";
let corentOperation = null;
let colcNew = "";
let resStr = "";
function addValue(number) {
  colcNew += String(number);
  resStr += String(number);
  displayUpdate();
}

function displayUpdate() {
  const result = document.getElementById("result");
  result.textContent = colcNew;
  document.getElementById("resultStr").textContent = resStr;
}

function clear1(s) {
  if (s == true) {
    resStr = "";

    document.getElementById("resultStr").textContent = "";
  }
  colcNew = "";
  displayUpdate();
}

function deliteNumber() {
  colcNew = colcNew.slice(0, -1);
  displayUpdate();
}

function setOpiration(v) {
  if (colcNew === "") return;
  if (corentOperation !== null) culc();
  privuImput = colcNew;
  clear1(false);
  corentOperation = v;

  resStr += colcNew + v;
}

function culc() {
  if (corentOperation === null || colcNew === "") return;
  let result2;
  const a = parseFloat(privuImput);
  const b = parseFloat(colcNew);
  switch (corentOperation) {
    case "+":
      result2 = a + b;
      break;
    case "-":
      result2 = a - b;
      break;
    case "*":
      result2 = a * b;
      break;
    case "/":
      if (b == 0) result2 = "ошибка";
      else result2 = a / b;
      break;
    case "**":
      result2 = a ** b;
      break;
    case "%":
      result2 = a % b;
      break;
  }
  resStr += "=" + result2.toString();
  colcNew = result2.toString();
  corentOperation = null;
  privuImput = "";
  displayUpdate();
}

function point() {
  if (colcNew != "") colcNew += ".";
  if (privuImput != "") privuImput += ".";
  resStr += ".";
  displayUpdate();
}
