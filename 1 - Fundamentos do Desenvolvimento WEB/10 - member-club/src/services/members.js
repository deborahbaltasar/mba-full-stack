import { apiConfig } from "./api";

export const getUserById = async (id) => {
  const response = await fetch(`${apiConfig.baseURL}/clients/${id}`);

  if (!response.ok) {
    return { status: response.status, message: response.statusText };
  }

  const data = await response.json();

  return { status: response.status, data };
};
