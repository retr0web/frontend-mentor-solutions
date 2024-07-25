import { DateTime } from "./luxon.js";

const calculateButton = document.querySelector('#calculate');

const yourYears = document.querySelector('#your-years');
const yourMonths = document.querySelector('#your-months');
const yourDays = document.querySelector('#your-days');

const yearLabel = document.querySelector('#year-label');
const monthLabel = document.querySelector('#month-label');
const dayLabel = document.querySelector('#day-label');

function calculateAge() {
    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');

    const today = DateTime.now();
    
    const inputs = [day, month, year];

    function clearOutput() {
        yourYears.innerHTML = `--`;
        yourMonths.innerHTML = `--`;
        yourDays.innerHTML = `--`;
    }
    
    for (let input of inputs) {
        if (input.value === '') {
            input.nextElementSibling.dataset.error = "This field is required";
            input.nextElementSibling.innerHTML = input.nextElementSibling.dataset.error;
            input.parentElement.classList.add('error');
        } else if (input.id === 'day') {
            if (input.value > 31 || input.value < 1) {
                input.nextElementSibling.dataset.error = "Must be a valid day";
                input.nextElementSibling.innerHTML = input.nextElementSibling.dataset.error;
                input.parentElement.classList.add('error');
            } else {
                input.parentElement.classList.remove('error');
            }
        } else if (input.id === 'month') {
            if (input.value > 12 || input.value < 1) {
                input.nextElementSibling.dataset.error = "Must be a valid month";
                input.nextElementSibling.innerHTML = input.nextElementSibling.dataset.error;
                input.parentElement.classList.add('error');
            } else {
                input.parentElement.classList.remove('error');
            }
        } else if (input.id === 'year') {
            if (input.value > today.c.year) {
                input.nextElementSibling.dataset.error = "Must be in the past";
                input.nextElementSibling.innerHTML = input.nextElementSibling.dataset.error;
                input.parentElement.classList.add('error');
            } else {
                input.parentElement.classList.remove('error');
            }
        } else {
            input.parentElement.classList.remove('error');
        }
    }
     
    for (let input of inputs) {
        if (input.parentElement.classList.contains('error')) {
            clearOutput();
            return;
        }
    }

    const dateOfBirth = DateTime.fromObject({day: Number(day.value), month: Number(month.value), year: Number(year.value)});

    if(!dateOfBirth.isValid) {
        day.nextElementSibling.dataset.error = "Must be a valid date";
        day.nextElementSibling.innerHTML = day.nextElementSibling.dataset.error;
        day.parentElement.classList.add('error');
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