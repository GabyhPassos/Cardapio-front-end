import { apiFetch } from "./../../utils/apiFetch";

const variablesApi = {
  url: "localhost:8080",
};

export type bodyLogin = {
  user: string;
  passw: string;
};

export const postLogin = async (body: bodyLogin) => {
  return apiFetch({
    url: variablesApi.url,
    method: "POST",
    body: JSON.stringify(body),
  });
};
