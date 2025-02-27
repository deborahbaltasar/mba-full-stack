const userIdContainer = document.getElementById("user-id-container");
const stampContainer = document.getElementById("stamp-container");

export const loyaltyCardShow = ({ id, loyaltyCard }) => {
  userIdContainer.innerHTML = `ID: ${id}`;

  const stampList = [];

  for (let i = 0; i < loyaltyCard.cutsNeeded; i++) {
    if (i === loyaltyCard.cutsNeeded - 1) {
      stampList.push(`
        <div>
          <i class="ph-fill ph-gift"></i>
        </div>
      `);
    } else if (i >= loyaltyCard.totalCuts) {
      stampList.push(`
        <div>
        </div>
      `);
    } else {
      stampList.push(`
        <div>
          <img src="./src/assets/images/PinCheck.png" alt="pin check" />
        </div>
      `);
    }
  }

  stampContainer.innerHTML = stampList.join("");
};
