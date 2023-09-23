// Function to toggle night mode
function toggleNightMode() {
    const body = document.body;
    const cardFronts = document.querySelectorAll(".card-front");
    const cardBacks = document.querySelectorAll(".card-back");

    body.classList.toggle("night-mode");
    cardFronts.forEach(card => card.classList.toggle("night-mode"));
    cardBacks.forEach(card => card.classList.toggle("night-mode"));
}

// Listen for the night mode toggle button click
const nightModeToggle = document.getElementById("nightModeToggle");
nightModeToggle.addEventListener("change", toggleNightMode);

// Function to handle card flipping
function flipCard(card) {
    const inner = card.querySelector(".card-inner");
    
    if (inner.style.transform === "rotateY(180deg)") {
        inner.style.transform = "rotateY(0)";
    } else {
        inner.style.transform = "rotateY(180deg)";
    }
}

// Add click event listeners to each card for flipping
const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener("click", () => flipCard(card)));
