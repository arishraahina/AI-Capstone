// ==========================================================
// Grab all the elements we need from the page
// ==========================================================

const settingsForm = document.getElementById("settingsForm");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");

const nameErrorText = document.getElementById("nameErrorText");
const emailErrorText = document.getElementById("emailErrorText");

const successMessage = document.getElementById("successMessage");

// Simple pattern to check for a valid-looking email address:
// something@something.something
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ==========================================================
// Helper functions to show / hide error messages
// ==========================================================

// Shows an error message under a field and marks the input as invalid
function showError(inputElement, errorElement, message) {
    inputElement.classList.add("input-error");
    errorElement.textContent = message;
    errorElement.classList.add("visible");
}

// Clears the error message and removes the invalid styling
function clearError(inputElement, errorElement) {
    inputElement.classList.remove("input-error");
    errorElement.textContent = "";
    errorElement.classList.remove("visible");
}

// ==========================================================
// Validation functions
// Each one returns true if the field is valid, false if not
// ==========================================================

function validateName() {
    const nameValue = nameInput.value.trim();

    if (nameValue === "") {
        showError(nameInput, nameErrorText, "Name is required.");
        return false;
    }

    clearError(nameInput, nameErrorText);
    return true;
}

function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        showError(emailInput, emailErrorText, "Email is required.");
        return false;
    }

    if (!emailPattern.test(emailValue)) {
        showError(emailInput, emailErrorText, "Please enter a valid email address (e.g. name@example.com).");
        return false;
    }

    clearError(emailInput, emailErrorText);
    return true;
}

// ==========================================================
// Live validation while the user is typing/leaving a field
// (This gives feedback early instead of only on Save)
// ==========================================================

nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);

// If an error is already showing, re-check as the user types
// so the message disappears as soon as it's fixed
nameInput.addEventListener("input", function () {
    if (nameInput.classList.contains("input-error")) {
        validateName();
    }
});

emailInput.addEventListener("input", function () {
    if (emailInput.classList.contains("input-error")) {
        validateEmail();
    }
});

// ==========================================================
// Form submission handler
// ==========================================================

settingsForm.addEventListener("submit", function (event) {
    // Stop the browser from reloading the page on submit
    event.preventDefault();

    // Hide any previous success message before re-checking
    successMessage.classList.remove("visible");

    // Run both validations. Using separate variables (instead of
    // stopping early) means both fields get checked and both
    // error messages can show up at the same time.
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    // Only continue if both fields passed validation
    if (isNameValid && isEmailValid) {
        // In a real app, this is where you would send the data
        // to a server using fetch(). For this page, we just
        // show a success message.
        successMessage.classList.add("visible");

        // Move focus to the success message for screen reader users
        successMessage.focus();
    } else {
        // If validation failed, focus the first field with an error
        if (!isNameValid) {
            nameInput.focus();
        } else if (!isEmailValid) {
            emailInput.focus();
        }
    }
});