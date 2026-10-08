let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateCounter() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

function increment() {
    count = count + 1;
    updateCounter();
}

function decrement() {
    count = count - 1;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);