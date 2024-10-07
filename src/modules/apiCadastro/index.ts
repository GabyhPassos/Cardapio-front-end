import { apiFetch } from "./../../utils/apiFetch";

const variablesApi = {
  url: "localhost:8080",
};

export type bodyCadastro = {
  user: string;
  passw: string;
};

export const postCadastro = async (body: bodyCadastro) => {
  return apiFetch({
    url: variablesApi.url,
    method: "POST",
    body: JSON.stringify(body),
  });
};
