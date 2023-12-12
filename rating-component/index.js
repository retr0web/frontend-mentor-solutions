const ratingCard = document.querySelector('.rating');
const thankYouCard = document.querySelector('.thank-you');
const bugHunter = document.querySelector('.developer');
const chosenMark = document.querySelector('#mark');
const markContainer = document.querySelector('#marks-container');
const marks = markContainer.querySelectorAll('*');
const submitButton = document.querySelector('#submit-button');
let currentMark;

function handleMark(e) {
    marks.forEach(mark => {
        if (mark.classList.contains('mark-active')) {
          mark.classList.remove('mark-active');
        }
    });
    e.target.classList.toggle('mark-active');
    currentMark = e.target.dataset.mark;
}

marks.forEach(mark => mark.addEventListener('click', handleMark));

function handleSubmit() {
    if(Array.from(marks).filter(el => 
    el.classList.contains('mark-active')).length === 1) {
        ratingCard.classList.remove('active');
        chosenMark.innerHTML = currentMark;
        thankYouCard.classList.add('active');
    } else if(Array.from(marks).filter(el => 
        el.classList.contains('mark-active')).length === 0) {
            alert("Select a mark before submiting");
    }
    else {
        ratingCard.classList.remove('active');
        bugHunter.classList.add('active');
    }
    
}

submitButton.addEventListener('click', handleSubmit);