document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    usernameInput.addEventListener('focus', function() {
        this.style.backgroundImage = "url('./simg/username.png')";
        this.style.backgroundSize = "contain";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "5px top";
        this.style.backgroundSize = "50px";
        this.value = ""; // Clear the placeholder text
        this.placeholder = ""; //remove the placeholder
    });

    usernameInput.addEventListener('blur', function() {
        this.style.backgroundImage = "none";
        this.placeholder = "使用者名稱"; // Restore the placeholder text
    });

    passwordInput.addEventListener('focus', function() {
        this.style.backgroundImage = "url('./simg/password.png')";
        this.style.backgroundSize = "contain";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center";
        this.value = ""; // Clear the placeholder text
        this.placeholder = ""; //remove the placeholder
    });

    passwordInput.addEventListener('blur', function() {
        this.style.backgroundImage = "none";
        this.placeholder = "密碼"; // Restore the placeholder text
    });
});
