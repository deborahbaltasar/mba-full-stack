import { getUserById } from "../../services/members";
import { counterShow } from "../counter/show";
import { historyShow } from "../historic/show";
import { loyaltyCardShow } from "../loyalty-card/show";
import { prizeShow } from "../prize/show";
import { userInfoShow } from "../user-info/show";

const form = document.getElementById("search-input-container");

const isValidId = (id) => {
  const regexValid = /^\d{3}-\d{3}-\d{3}-\d{3}$/;

  return regexValid.test(id);
};

export const searchUser = async (event) => {
  event.preventDefault();
  const userId = new FormData(form).get("user-id");

  if (!isValidId(userId)) {
    alert(`ID inválido. O ID deve ter o formato xxx-xxx-xxx-xxx.`);
    return;
  }

  const { status, data: user } = await getUserById(userId);

  if (status !== 200) {
    alert(`Usuário não encontrado.`);
    return;
  }

  userInfoShow(user);
  loyaltyCardShow(user);
  counterShow(user);
  historyShow(user);
  prizeShow(user);
};

form.onsubmit = searchUser;
