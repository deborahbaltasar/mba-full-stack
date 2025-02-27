const totalCuts = document.getElementById("total-cuts");
const historyListContainer = document.getElementById("history-list");

export const historyShow = ({ loyaltyCard, appointmentHistory }) => {
  totalCuts.innerHTML = `${loyaltyCard.totalCuts} cortes`;
  const historyList = appointmentHistory.map((history) => {
    return `
      <div class="history-item">
        <div>
          <h3>${history.date}</h3>
          <p>${history.time}</p>
        </div>
        <span class="history-item-seal">
          <i class="ph ph-seal-check"></i>
        </span>
      </div>
    `;
  });
  historyListContainer.innerHTML = historyList.join("");
};
