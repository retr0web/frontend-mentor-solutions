const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('.form-container input');
const emailInput = document.querySelector('.form-container input[type="email"]');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateInput(input) {
    if (input.value === '' || input.value == null) {
        input.classList.add('invalid');
    } else if (input.getAttribute("type") === "email" && !emailRegex.test(input.value)) {
        input.parentElement.dataset.error = "Looks like this is not an email";
    } else {
        input.classList.remove('invalid');
    }
};

function handleForm(e) {
    inputs.forEach(input => {
        if(input.value === '' || input.value == null) {
            e.preventDefault();
            input.classList.add('invalid');
        }
    });

    inputs.forEach(input => {
        input.addEventListener('keydown', () => {
            validateInput(input);
        });
    });
}

form.addEventListener('submit', handleForm);