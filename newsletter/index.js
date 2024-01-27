const newsletter = document.querySelector('main');
const successMessage = document.querySelector('.success');
const form = document.querySelector('.input-container');
const emailInput = document.querySelector('#email');
const message = document.querySelector('#message');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailReciever = document.querySelector('#emailReciever');
const dismiss = document.querySelector('#dismiss');

function handleForm(e) {
    if(!emailRegex.test(emailInput.value)) {
        e.preventDefault();
        emailInput.classList.add('invalid');
        emailInput.style.animation = 'shake 500ms ease-in-out';
        message.style.display = 'block';
        setTimeout(() => {
            emailInput.style.animation = 'none';
        }, 550);
    } else {
        e.preventDefault();
        emailReciever.innerHTML = emailInput.value;
        newsletter.classList.add('invisible');
        emailInput.classList.remove('invalid');
        emailInput.value = '';
        message.style.display = 'none';
        successMessage.classList.remove('invisible');
    }
}

function handleDismiss() {
    successMessage.classList.add('invisible');
    newsletter.classList.remove('invisible');
}

form.addEventListener('submit', handleForm);
dismiss.addEventListener('click', handleDismiss);