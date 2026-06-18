// console.log("JavaScript is connected!");

const form = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const successMessage = document.getElementById("successMessage");
const nameRegex = /^[A-Za-z]+$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const isFirstNameValid = validateFirstName();
  const isSurnameValid = validateSurname();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();

  if (isFirstNameValid && isSurnameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
    successMessage.textContent = "Your message has been sent successfully!";
    successMessage.classList.add("show");
    setTimeout(function() {
    successMessage.classList.remove("show");
    }, 3000);
    form.reset(); // Clear the form after successful submission 
  } else {
    successMessage.textContent = "";
  }
});

  // Validate form fields
function validateFirstName() {
    const value = firstName.value.trim();
    const error = document.getElementById("firstNameError");


    if (value === "") {
        firstName.style.borderColor = "red";
        error.textContent = "First name is required";
        return false;
    } else if (value.length < 2) {
        firstName.style.borderColor = "red";
        error.textContent = "First name must be at least 2 characters";
        return false;
    }
    else if (!nameRegex.test(value)) {
        firstName.style.borderColor = "red";
        error.textContent = "Only letters are allowed";
        return false;
    }
    else {
        firstName.style.borderColor = "green";
        error.textContent = "";
        return true;
    }
}

function validateSurname() {
    const value = surname.value.trim();
    const error = document.getElementById("surnameError");

    if (value === "") {
        surname.style.borderColor = "red";
        error.textContent = "Surname is required";
        return false;
    } else if (value.length < 2) {
        surname.style.borderColor = "red";
        error.textContent = "Surname must be at least 2 characters";
        return false;
    } else if (!nameRegex.test(value)) {
        surname.style.borderColor = "red";
        error.textContent = "Only letters are allowed";
        return false;
    } else {
        surname.style.borderColor = "green";
        error.textContent = "";
        return true;
    }
}

function validateEmail() {
    const value = email.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const error = document.getElementById("emailError");
    if (value === "") {
        email.style.borderColor = "red";
        error.textContent = "Email is required";
        return false;
    } else if (!emailRegex.test(value)) {
        email.style.borderColor = "red";
        error.textContent = "Please enter a valid email address";
        return false;
    } else {
        email.style.borderColor = "green";
        error.textContent = "";
        return true;
    }
}

function validatePhone() {
    const value = phone.value.trim();
    const phoneRegex = /^\+?[\d\s\-]{7,15}$/;
    const error = document.getElementById("phoneError");
    if (value === "") {
        phone.style.borderColor = "red";
        error.textContent = "Phone is required";
        return false;
    } else if (!phoneRegex.test(value)) {
        phone.style.borderColor = "red";
        error.textContent = "Please enter a valid phone number";
        return false;
    } else {
        phone.style.borderColor = "green";
        error.textContent = "";
        return true;
    }
}

function validateSubject() {
    const value = subject.value.trim();
    const error = document.getElementById("subjectError");
    if (value === "") {
        subject.style.borderColor = "red";
        error.textContent = "Subject is required";
        return false;
    } else {
        subject.style.borderColor = "green";
        error.textContent = "";
        return true;
    }
}

function validateMessage() {
    const value = message.value.trim();
    const error = document.getElementById("messageError");
    if (value === "") {
        message.style.borderColor = "red";
        error.textContent = "Message is required";
        return false;
    } else {
        message.style.borderColor = "green";
        error.textContent = "";
        return true;
    }
}