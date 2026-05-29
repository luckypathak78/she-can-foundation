// CTA Button Interaction

const supportBtn = document.getElementById("supportBtn");

supportBtn.addEventListener("click", () => {

    supportBtn.textContent = "Thank You For Supporting!";

    setTimeout(() => {
        supportBtn.textContent = "Join The Movement";
    }, 2500);

});