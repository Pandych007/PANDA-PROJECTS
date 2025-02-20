// сломалась игра в угадай число

let matriks = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let Gamer = "X";
let changeGame = "player";
function Oneclick(row, col) {
  if (changeGame == "player") {
    console.log(matriks);
    if (WinerGamer() != false) {
      if (WinerGamer() == "O") {
        document.getElementById("viner").innerHTML = "<b> победил O </b>";
      } else if (WinerGamer() == "X") {
        document.getElementById("viner").innerHTML = "<b> победил X </b>";
      }
      return;
    }
    if (Gamer == "X") {
      if (matriks[row][col] == "") {
        matriks[row][col] = "X";
        Gamer = "O";
      }
    } else {
      if (matriks[row][col] == "") {
        matriks[row][col] = "O";
        Gamer = "X";
      }
    }
    printMatriks(matriks);
    if (WinerGamer() != false) {
      if (WinerGamer() == "O") {
        document.getElementById("viner").innerHTML = "<b> победил O </b>";
      } else if (WinerGamer() == "X") {
        document.getElementById("viner").innerHTML = "<b> победил X </b>";
      }
      return;
    }
  } else {
    if (Gamer == "X") {
      let mode = false;
      if (matriks[row][col] == "") {
        matriks[row][col] = "X";

        for (let i = 0; i < 3; i++) {
          let countX = 0;
          for (let j = 0; j < 3; j++) {
            if (matriks[i][j] == "O") {
              countX += 1;
              if (countX == 2) {
                matriks[i][j] = "O";
                mode = true;
                break;
              }
            }
          }
          if (countX == 2) {
            break;
          }
        }
        //1 по строкам
        for (let i = 0; i < 3; i++) {
          let countX = 0;
          for (let j = 0; j < 3; j++) {
            if (matriks[i][j] == "X") {
              countX += 1;
            }
          }
          if (countX == 2) {
            for (let j = 0; j < 3; j++) {
              if (matriks[i][j] != "X") {
                matriks[i][j] = "O";
                mode = true;
              }
            }
          }
        }

        //2 по столбцам

        for (let j = 0; j < 3; j++) {
          let countY = 0;
          let mtiRov = -1;
          for (let i = 0; i < 3; i++) {
            if (matriks[i][j] == "X") {
              countY += 1;
            } else {
              mtiRov = i;
            }
          }
          if (countY == 2 && mtiRov !== -1) {
            matriks[mtiRov][j] = "O";
            mode = true;
          }
        }

        //3 по диагонали
        if (matriks[0][0] == "O" && matriks[1][1] == "O") {
          matriks[2][2] = "O";
          mode = true;
        }

        if (matriks[1][1] == "O" && matriks[2][2] == "O") {
          matriks[0][0] = "O";
          mode = true;
        }

        if (matriks[0][2] == "O" && matriks[1][1] == "O") {
          matriks[2][0] = "O";
          mode = true;
        }

        if (matriks[2][0] == "O" && matriks[1][1] == "O") {
          matriks[0][2] = "O";
          mode = true;
        }

        // рандомная стратегия
        if (mode === false) {
          let f = false;
          while (f === false) {
            let row = Math.floor(Math.random() * 3);
            let coll = Math.floor(Math.random() * 3);
            if (matriks[row][coll] === "") {
              matriks[row][coll] = "O";
              f = true;
            }
          }
          /*for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              // console.log();
              if (matriks[i][j] !== "" || matriks[i][j] !== "X") {
                matriks[i][j] = "O";
                break;

              }
            }
          }*/
        }
      }
    }
    printMatriks(matriks);
  }

  console.log(matriks);
  if (WinerGamer() != false) {
    if (WinerGamer() == "O") {
      document.getElementById("viner").innerHTML = "<b> победил O </b>";
    } else if (WinerGamer() == "X") {
      document.getElementById("viner").innerHTML = "<b> победил X </b>";
    }
    return;
  }
  if (Gamer == "X") {
    if (matriks[row][col] == "") {
      matriks[row][col] = "X";
      Gamer = "O";
    }
  } else {
    if (matriks[row][col] == "") {
      matriks[row][col] = "O";
      Gamer = "X";
    }
  }
}

function printMatriks(matriks) {
  let resalt = "";
  for (let i = 0; i < 3; i++) {
    resalt += "<div class = 'row'> ";
    for (let j = 0; j < 3; j++) {
      resalt += `<div class='col' onclick ='Oneclick(${i},${j})'>${matriks[i][j]}</div>`;
    }
    resalt += "</div>";
  }
  document.querySelector(".field").innerHTML = resalt;
}

printMatriks(matriks);

function WinerGamer() {
  for (let i = 0; i < 3; i++) {
    if (matriks[i][0] == "X" && matriks[i][1] == "X" && matriks[i][2] == "X") {
      return "X";
    }
    if (matriks[i][0] == "O" && matriks[i][1] == "O" && matriks[i][2] == "O") {
      return "O";
    }
  }

  for (let i = 0; i < 3; i++) {
    if (matriks[0][i] == "X" && matriks[1][i] == "X" && matriks[2][i] == "X") {
      return "X";
    }
    if (matriks[0][i] == "O" && matriks[1][i] == "O" && matriks[2][i] == "O") {
      return "O";
    }
  }
  if (matriks[0][0] == "X" && matriks[1][1] == "X" && matriks[2][2] == "X") {
    return "X";
  }
  if (matriks[0][0] == "O" && matriks[1][1] == "O" && matriks[2][2] == "O") {
    return "O";
  }

  if (matriks[0][2] == "X" && matriks[1][1] == "X" && matriks[2][0] == "X") {
    return "X";
  }
  if (matriks[0][2] == "O" && matriks[1][1] == "O" && matriks[2][0] == "O") {
    return "O";
  }
  return false;
}

document.getElementById("mod_select").addEventListener("change", function () {
  if (this.value == "computer") {
    changeGame = "computer";
  } else {
    changeGame = "player";
  }
});
