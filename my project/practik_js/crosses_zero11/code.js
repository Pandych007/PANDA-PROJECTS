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
      if (matriks[row][col] == "") {
        matriks[row][col] = "X";

        //1
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
              }
            }
          }
        }

        //2
      }
    }
    printMatriks(matriks);
  }

  // console.log(matriks);
  // if (WinerGamer() != false) {
  //   if (WinerGamer() == "O") {
  //     document.getElementById("viner").innerHTML = "<b> победил O </b>";
  //   } else if (WinerGamer() == "X") {
  //     document.getElementById("viner").innerHTML = "<b> победил X </b>";
  //   }
  //   return;
  // }
  // if (Gamer == "X") {
  //   if (matriks[row][col] == "") {
  //     matriks[row][col] = "X";
  //     Gamer = "O";
  //   }
  // } else {
  //   if (matriks[row][col] == "") {
  //     matriks[row][col] = "O";
  //     Gamer = "X";
  //   }
  // }
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
