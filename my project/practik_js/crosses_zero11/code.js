// сломалась игра в угадай число

// код нейросети
class NeuralNetwork {
  constructor() {
    this.weightsHidden = new Array(9);
    for (let i = 0; i < 9; i++) {
      this.weightsHidden[i] = new Array(18)
        .fill()
        .map(() => Math.random() * 2 - 1);
    }

    this.weightsOutput = new Array(18);
    for (let i = 0; i < 18; i++) {
      this.weightsOutput[i] = new Array(9)
        .fill()
        .map(() => Math.random() * 2 - 1);
    }
  }

  relu(x) {
    return Math.max(0, x);
  }

  softmax(output) {
    const max = Math.max(...output);
    const exp = output.map((e) => Math.exp(e - max));
    const sum = exp.reduce((a, b) => a + b);
    return exp.map((e) => e / sum);
  }

  predict(input) {
    const board = input.map((cell) => {
      if (cell === "X") return 1;
      if (cell === "O") return -1;
      return 0;
    });

    const hidden = new Array(18).fill(0);
    for (let i = 0; i < 18; i++) {
      for (let j = 0; j < 9; j++) {
        hidden[i] += board[j] * this.weightsHidden[j][i];
      }
      hidden[i] = this.relu(hidden[i]);
    }

    const output = new Array(9).fill(0);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 18; j++) {
        output[i] += hidden[j] * this.weightsOutput[j][i];
      }
    }

    return this.softmax(output);
  }

  train(input, target, learningRate = 0.1) {
    const hidden = new Array(18).fill(0);
    for (let i = 0; i < 18; i++) {
      for (let j = 0; j < 9; j++) {
        hidden[i] += input[j] * this.weightsHidden[j][i];
      }
      hidden[i] = this.relu(hidden[i]);
    }

    const output = new Array(9).fill(0);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 18; j++) {
        output[i] += hidden[j] * this.weightsOutput[j][i];
      }
    }
    const outputSoftmax = this.softmax(output);

    const outputError = outputSoftmax.map((o, i) => o - target[i]);

    const hiddenError = new Array(18).fill(0);
    for (let i = 0; i < 18; i++) {
      for (let j = 0; j < 9; j++) {
        hiddenError[i] += outputError[j] * this.weightsOutput[i][j];
      }
      hiddenError[i] *= hidden[i] > 0 ? 1 : 0;
    }

    for (let i = 0; i < 18; i++) {
      for (let j = 0; j < 9; j++) {
        this.weightsOutput[i][j] -= learningRate * outputError[j] * hidden[i];
      }
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 18; j++) {
        this.weightsHidden[i][j] -= learningRate * hiddenError[j] * input[i];
      }
    }
  }

  getBestMove(board) {
    const predictions = this.predict(board);
    let bestMove = -1;
    let maxProb = -Infinity;

    for (let i = 0; i < 9; i++) {
      if (board[i] === "" && predictions[i] > maxProb) {
        maxProb = predictions[i];
        bestMove = i;
      }
    }
    return bestMove;
  }
}

// __________________________________________________
// данные для обучения
let nn = new NeuralNetwork();

const trainingData = [
  {
    input: ["X", "", "", "", "", "", "", "", ""],
    output: [0, 1, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    input: ["X", "O", "", "", "", "", "", "", ""],
    output: [0, 0, 1, 0, 0, 0, 0, 0, 0],
  },
  {
    input: ["X", "O", "X", "", "", "", "", "", ""],
    output: [0, 0, 0, 1, 0, 0, 0, 0, 0],
  },
  {
    input: ["O", "X", "O", "", "", "", "", "", ""],
    output: [0, 1, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    input: ["X", "", "O", "X", "", "", "", "", ""],
    output: [0, 0, 0, 0, 1, 0, 0, 0, 0],
  },
  {
    input: ["X", "O", "X", "O", "", "", "", "", ""],
    output: [0, 0, 0, 0, 1, 0, 0, 0, 0],
  },
  {
    input: ["X", "O", "X", "O", "X", "", "", "", ""],
    output: [0, 0, 0, 0, 0, 1, 0, 0, 0],
  },
  {
    input: ["X", "O", "X", "O", "X", "O", "", "", ""],
    output: [0, 0, 0, 0, 0, 0, 1, 0, 0],
  },
  {
    input: ["X", "O", "X", "O", "X", "O", "X", "", ""],
    output: [0, 0, 0, 0, 0, 0, 0, 1, 0],
  },
  {
    input: ["X", "O", "X", "O", "X", "O", "X", "O", ""],
    output: [0, 0, 0, 0, 0, 0, 0, 0, 1],
  },
  {
    input: ["", "", "", "", "X", "", "", "", ""],
    output: [1, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    input: ["", "", "O", "", "X", "", "", "", ""],
    output: [1, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    input: ["", "O", "X", "", "X", "", "", "", ""],
    output: [1, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    input: ["O", "X", "O", "", "X", "", "", "", ""],
    output: [0, 0, 0, 1, 0, 0, 0, 0, 0],
  },
  {
    input: ["O", "X", "O", "", "X", "X", "", "", ""],
    output: [0, 0, 0, 1, 0, 0, 0, 0, 0],
  },
  // 85 дополнительных примеров
];

// обучение нейронки
for (let i = 0; i < 5000; i++) {
  trainingData.forEach((data) => {
    const input = data.input.map((cell) => {
      if (cell == "X") return 1;
      if (cell == "O") return -1;
      return 0;
    });
    nn.train(input, data.output);
  });
}

// const test = ["X", "O", "X", "O", "X", "O", "", "", ""];
// const bestV = nn.getBestMove(test);
// console.log(bestV);
// ____________________________________________________________________
function indexTo2d(index) {
  let row = Math.floor(index / 3);
  let col = index % 3;
  return [row, col];
}

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
        // for (let i = 0; i < 3; i++) {
        //   let countX = 0;
        //   for (let j = 0; j < 3; j++) {
        //     if (matriks[i][j] == "X") {
        //       countX += 1;
        //     }
        //   }
        //   if (countX == 2) {
        //     for (let j = 0; j < 3; j++) {
        //       if (matriks[i][j] != "X") {
        //         matriks[i][j] = "O";
        //         mode = true;
        //       }
        //     }
        //   }
        // }

        //2 по столбцам

        // for (let j = 0; j < 3; j++) {
        //   let countY = 0;
        //   let mtiRov = -1;
        //   for (let i = 0; i < 3; i++) {
        //     if (matriks[i][j] == "X") {
        //       countY += 1;
        //     } else {
        //       mtiRov = i;
        //     }
        //   }
        //   if (countY == 2 && mtiRov !== -1) {
        //     matriks[mtiRov][j] = "O";
        //     mode = true;
        //   }
        // }

        //3 по диагонали
        // if (matriks[0][0] == "O" && matriks[1][1] == "O") {
        //   matriks[2][2] = "O";
        //   mode = true;
        // }

        // if (matriks[1][1] == "O" && matriks[2][2] == "O") {
        //   matriks[0][0] = "O";
        //   mode = true;
        // }

        // if (matriks[0][2] == "O" && matriks[1][1] == "O") {
        //   matriks[2][0] = "O";
        //   mode = true;
        // }

        // if (matriks[2][0] == "O" && matriks[1][1] == "O") {
        //   matriks[0][2] = "O";
        //   mode = true;
        // }

        // рандомная стратегия
        // if (mode === false) {
        //   let f = false;
        //   while (f === false) {
        //     let row = Math.floor(Math.random() * 3);
        //     let coll = Math.floor(Math.random() * 3);
        //     if (matriks[row][coll] === "") {
        //       matriks[row][coll] = "O";
        //       f = true;
        //     }
        //   }
        /*for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              // console.log();
              if (matriks[i][j] !== "" || matriks[i][j] !== "X") {
                matriks[i][j] = "O";
                break;

              }
            }
          }*/

        // }
        let matriksOne = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            matriksOne.push(matriks[i][j]);
          }
        }

        //[0,1,2,3,4,5,6,7,8]
        /*
      
        let matriks = [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ];
         */

        let predskaz = nn.getBestMove(matriksOne);
        console.log(predskaz);
        // if (mode === true) {
        let index = indexTo2d(predskaz);
        console.log(index);
        matriks[index[0]][index[1]] = "O";
        // }
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
