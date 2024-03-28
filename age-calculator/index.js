const calculateButton = document.querySelector('#calculate');

function calculateAge() {
    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
}

calculateButton.addEventListener('click', calculateAge);