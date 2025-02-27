const prizeContainer = document.getElementById("prize-container");
const prizeContent = document.getElementById("prize-content");

export const prizeShow = ({ loyaltyCard }) => {
  if (loyaltyCard.cutsRemaining === 0)
    prizeContainer.classList.toggle("invisible");
};

window.addEventListener("click", (event) => {
  if (!prizeContent.contains(event.target)) {
    if (prizeContainer.checkVisibility())
      prizeContainer.classList.toggle("invisible");
  }
});
