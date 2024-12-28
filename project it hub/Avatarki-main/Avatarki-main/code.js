document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username-input");
    const surnameInput = document.getElementById("surname-input");
    const sizeInput = document.getElementById("size-input");
    const colorInput = document.getElementById("color-input"); // Получаем поле выбора цвета
    const generateButton = document.getElementById("generate-button");
    const changeColorButton = document.getElementById("change-color-button");
    const avatar = document.getElementById("avatar");

    generateButton.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        const surname = surnameInput.value.trim();
        const size = sizeInput.value;
        const color = colorInput.value; // Получаем выбранный цвет

        if (username && size) {
            const initials = `${username.charAt(0).toUpperCase()}${surname.charAt(0).toUpperCase()}`;
            avatar.style.width = size + "px";
            avatar.style.height = size + "px";
            avatar.style.backgroundColor = color; // Применяем выбранный цвет к фону аватарки
            avatar.innerText = initials;
        } else {
            alert("Введите имя пользователя, фамилию пользователя и размер аватарки.");
        }
    });

    changeColorButton.addEventListener("click", function () {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        avatar.style.backgroundColor = randomColor;
    });
});
