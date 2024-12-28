


const table = document.getElementById("myTable");
const numbers = generateNumbers(30);
fillTable(table, numbers);

function generateNumbers(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
}

function fillTable(table, numbers) {
    let k = 0;
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            let td = document.createElement("td");
            td.innerText = numbers[k];
            if (numbers[k] >= 50) {
                td.classList.add("red");
            }
            tr.appendChild(td);
            k++;
        }
        table.appendChild(tr);
    }
}

function addNumber() {
const number = Math.floor(Math.random() * 100);
const td = document.createElement("td");
td.innerText = number;
if (number >= 50) {
td.classList.add("red");
}
const trList = table.getElementsByTagName("tr");
const lastTr = trList[trList.length - 1];
if (lastTr.childElementCount < 6) {
lastTr.appendChild(td);
} else {
const newTr = document.createElement("tr");
newTr.appendChild(td);
table.appendChild(newTr);
}
}

