import { getCookie } from "../../_utils/cookies";

export const updateMenuService = (request) => {
  const NEW_API_ENDPOINT = `https://localhost:44365/api/roles/${request.id.roles.id}`;
  console.log(request);
  const parameters = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: getCookie("token"),
    },
    body: JSON.stringify(request.id.mwnu),
  };

  return fetch(NEW_API_ENDPOINT, parameters)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
