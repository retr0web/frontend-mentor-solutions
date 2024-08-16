import { DateTime } from "./luxon.js";

const calculateButton = document.querySelector('#calculate');

const yourYears = document.querySelector('#your-years');
const yourMonths = document.querySelector('#your-months');
const yourDays = document.querySelector('#your-days');

const yearLabel = document.querySelector('#year-label');
const monthLabel = document.querySelector('#month-label');
const dayLabel = document.querySelector('#day-label');

function calculateAge() {
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');

    const today = DateTime.now();
    
    const inputs = [day, month, year];

    function clearOutput() {
        yourYears.innerHTML = `--`;
        yourMonths.innerHTML = `--`;
        yourDays.innerHTML = `--`;
    }

    function displayError(input, msgText) {
        input.nextElementSibling.dataset.error = msgText;
        input.nextElementSibling.innerHTML = input.nextElementSibling.dataset.error;
        input.parentElement.classList.add('error');
    }
    
    function checkDay(input) {
       input.value > 0 && input.value < 32 ? input.parentElement.classList.remove('error') : displayError(input, "Must be a valid day"); 
    }

    function checkMonth(input) {
        input.value > 0 && input.value < 13 ? input.parentElement.classList.remove('error') : displayError(input, "Must be a valid month"); 
    }

    function checkYear(input) {
        input.value < today.c.year ? input.parentElement.classList.remove('error') : displayError(input, "Must be a valid year"); 
    }

    const validators = {
        day: checkDay,
        month: checkMonth,
        year: checkYear,
    }

    for (let input of inputs) {
        if (!input.value) {
            displayError(input, "This field is required")
            return;
        }

        validators[input.id](input);
    }
     
    for (let input of inputs) {
        if (input.parentElement.classList.contains('error')) {
            clearOutput();
            return;
        }
    }

    const dateOfBirth = DateTime.fromObject({day: Number(day.value), month: Number(month.value), year: Number(year.value)});

    if(!dateOfBirth.isValid) {
        displayError(day, "Must be a valid date");
        clearOutput();
        return;
    }
    
    const result = today.diff(dateOfBirth, ['years', 'months', 'days']).toObject();

    const 
    {   days: calculatedDays,
        months: calculatedMonths,
        years: calculatedYears 
    } = result;

    yourYears.innerHTML = `${calculatedYears}`;
    yourMonths.innerHTML = `${calculatedMonths}`;
    yourDays.innerHTML = `${Math.floor(calculatedDays)}`;

    yearLabel.innerHTML = `${calculatedYears > 1 ? 'years' : 'year'}`;
    monthLabel.innerHTML = `${calculatedMonths > 1 ? 'months' : 'month'}`;
    dayLabel.innerHTML = `${calculatedDays > 1 ? 'days' : 'day'}`;
}

function handleEnter(e) {
    if (e.key === 'Enter') calculateAge();
}

calculateButton.addEventListener('click', calculateAge);
window.addEventListener('keydown', handleEnter);