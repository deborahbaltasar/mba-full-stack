const counterTitle = document.getElementById("counter-title");
const progressBarContainer = document.getElementById("progress-bar-container");

export const counterShow = ({ loyaltyCard }) => {
  counterTitle.innerHTML = `<strong>${loyaltyCard.cutsRemaining}</strong> cortes restantes`;
  progressBarContainer.innerHTML = `
    <progress id="progress-bar" value="${loyaltyCard.totalCuts}" max="${loyaltyCard.cutsNeeded}"></progress>
    <label for="progress-bar">${loyaltyCard.totalCuts} de ${loyaltyCard.cutsNeeded}</label>
  `;
};
