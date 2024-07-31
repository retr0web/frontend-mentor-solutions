const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const randomButton = document.querySelector('#randomize-advice');

async function randomAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const { slip: { id, advice } } = data;
        adviceId.innerHTML = id;
        adviceText.innerHTML = advice;
    } catch (error) {
        alert(`Error fetching data: ${error}`)
    }
}

randomButton.addEventListener('click', randomAdvice);