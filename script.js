const form = document.getElementById("settingsForm");

const nameInput = document.getElementById("input-name");
const emailInput = document.getElementById("input-email");

const nameError = document.getElementById("error-name");
const emailError = document.getElementById("error-email");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear previous errors
    nameError.querySelector(".error-text").textContent = "";
    emailError.querySelector(".error-text").textContent = "";

    nameError.style.display = "none";
    emailError.style.display = "none";

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.querySelector(".error-text").textContent = "Name is required.";
        nameError.style.display = "flex";
        isValid = false;
    }

    // Email validation
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.querySelector(".error-text").textContent = "Email is required.";
        emailError.style.display = "flex";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.querySelector(".error-text").textContent = "Please enter a valid email address.";
        emailError.style.display = "flex";
        isValid = false;
    }

    if (isValid) {
        alert("Settings saved successfully!");
        form.reset();
    }
});

// Cancel button
document.getElementById("resetBtn").addEventListener("click", function () {
    form.reset();

    nameError.style.display = "none";
    emailError.style.display = "none";
});