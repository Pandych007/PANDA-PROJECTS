const taskImput = document.getElementById("taskImput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {
  if (taskImput.value == "") {
    alert("Ошибка...Введите название задачи");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskImput.value;
  const buttonOk = document.createElement("button");
  buttonOk.textContent = "Выполнено";
  buttonOk.classList.add("bottonOk");

  buttonOk.addEventListener("click", function () {
    li.classList.remove("NotOK");
    li.classList.add("OK");
  });
  const buttonNotOk = document.createElement("button");
  buttonNotOk.textContent = "Не выполнено";
  buttonNotOk.classList.add("bottonNotOk");

  buttonNotOk.addEventListener("click", function () {
    li.classList.remove("OK");
    li.classList.add("NotOK");
  });
  const buttonDelit = document.createElement("button");
  buttonDelit.textContent = "Удалить";
  buttonDelit.addEventListener("click", function () {
    taskList.removeChild(li);
  });
  li.append(buttonOk, buttonNotOk, buttonDelit);
  taskList.appendChild(li);

  taskImput.value = "";
});
