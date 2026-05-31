const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmError = document.querySelector("#confirmError");
const phoneError = document.querySelector("#phoneError");

const strengthBar = document.querySelector("#strengthBar");
const submitBtn = document.querySelector("#submitBtn");

const modal = document.querySelector("#modal");
const modalInfo = document.querySelector("#modalInfo");
const closeModal = document.querySelector("#closeModal");

const validState = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

function setStatus(input, messageEl, valid, message) {
    input.classList.remove("valid", "invalid");
    messageEl.classList.remove("success", "error");

    if (valid) {
        input.classList.add("valid");
        messageEl.classList.add("success");
        messageEl.textContent = "✅ " + message;
    } else {
        input.classList.add("invalid");
        messageEl.classList.add("error");
        messageEl.textContent = "❌ " + message;
    }
}

function validateName() {
    const value = nameInput.value.trim();
    const valid = value.length >= 2 && value.length <= 50;

    validState.name = valid;

    setStatus(
        nameInput,
        nameError,
        valid,
        valid ? "Tên hợp lệ" : "Tên phải từ 2 đến 50 ký tự"
    );

    updateSubmitButton();
}

function validateEmail() {
    const value = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = regex.test(value);

    validState.email = valid;

    setStatus(
        emailInput,
        emailError,
        valid,
        valid ? "Email hợp lệ" : "Email không đúng định dạng"
    );

    updateSubmitButton();
}

function getPasswordStrength(password) {
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (password.length < 8) {
        return "weak";
    }

    if (hasLower && hasUpper && hasNumber && hasSpecial) {
        return "strong";
    }

    if (password.length >= 8 && (hasLower || hasUpper) && hasNumber) {
        return "medium";
    }

    return "weak";
}

function validatePassword() {
    const value = passwordInput.value;
    const strength = getPasswordStrength(value);

    strengthBar.className = "";
    strengthBar.classList.add(strength);

    if (strength === "weak") {
        validState.password = false;
        setStatus(passwordInput, passwordError, false, "Mật khẩu yếu");
    }

    if (strength === "medium") {
        validState.password = true;
        setStatus(passwordInput, passwordError, true, "Mật khẩu trung bình");
    }

    if (strength === "strong") {
        validState.password = true;
        setStatus(passwordInput, passwordError, true, "Mật khẩu mạnh");
    }

    validateConfirm();
    updateSubmitButton();
}

function validateConfirm() {
    const valid =
        confirmInput.value !== "" &&
        confirmInput.value === passwordInput.value;

    validState.confirm = valid;

    setStatus(
        confirmInput,
        confirmError,
        valid,
        valid ? "Mật khẩu khớp" : "Mật khẩu không khớp"
    );

    updateSubmitButton();
}

function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length <= 4) {
        return digits;
    }

    if (digits.length <= 7) {
        return digits.slice(0, 4) + "-" + digits.slice(4);
    }

    return (
        digits.slice(0, 4) +
        "-" +
        digits.slice(4, 7) +
        "-" +
        digits.slice(7)
    );
}

function validatePhone() {
    phoneInput.value = formatPhone(phoneInput.value);

    const digits = phoneInput.value.replace(/\D/g, "");
    const valid = digits.length === 10;

    validState.phone = valid;

    setStatus(
        phoneInput,
        phoneError,
        valid,
        valid ? "Số điện thoại hợp lệ" : "Số điện thoại phải có 10 chữ số"
    );

    updateSubmitButton();
}

function updateSubmitButton() {
    const allValid =
        validState.name &&
        validState.email &&
        validState.password &&
        validState.confirm &&
        validState.phone;

    submitBtn.disabled = !allValid;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmInput.addEventListener("input", validateConfirm);
phoneInput.addEventListener("input", validatePhone);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    modalInfo.textContent = "";

    const p1 = document.createElement("p");
    p1.textContent = "Tên: " + nameInput.value;

    const p2 = document.createElement("p");
    p2.textContent = "Email: " + emailInput.value;

    const p3 = document.createElement("p");
    p3.textContent = "Phone: " + phoneInput.value;

    modalInfo.appendChild(p1);
    modalInfo.appendChild(p2);
    modalInfo.appendChild(p3);

    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
});