document.addEventListener("DOMContentLoaded", function () {
    var registrationForm = document.getElementById("registrationForm");

    // Плавная анимация появления формы
    setTimeout(function () {
        registrationForm.style.opacity = "2";
        registrationForm.style.transform = "translateY(0)";
    }, 200);

    function registerUser() {
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (!username.trim() || !email.trim() || !password.trim()) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        console.log("Имя пользователя: " + username);
        console.log("Email: " + email);
        console.log("Пароль: " + password);

        window.location.href = "./главная.html";
    }

    document.getElementById("registrationButton").addEventListener("click", registerUser);
});
