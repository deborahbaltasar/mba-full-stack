const userInfoContainer = document.getElementById("user-info-container");

export const userInfoShow = ({ image, name, clientSince }) => {
  userInfoContainer.innerHTML = `
    <img src="${image}" alt="imagem do usuario" />
    <div>
      <h2>${name}</h2>
      <p>Cliente desde ${clientSince}</p>
    </div>
  `;
};
