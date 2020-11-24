const form = document.getElementById('form');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if(pass1.value === pass2.value) {
        passwordMatch = true;
        pass1.style.borderColor = 'green';
        pass2.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match';
        messageContainer.style.borderColor = 'red';
        pass1.style.borderColor = 'red';
        pass2.style.borderColor = 'red';
        return;
    }

    if (isValid && passwordMatch) {
        message.textContent = 'Successfully Registered';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    console.log(user);
}

function processFormData(event) {
    event.preventDefault();
    validateForm();
    if(isValid && passwordMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);