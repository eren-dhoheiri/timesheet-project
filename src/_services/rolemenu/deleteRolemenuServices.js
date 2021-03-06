import { getCookie } from "../../_utils/cookies";

export const deleteMenuService = (request) => {
  const NEW_API_ENDPOINT = `https://localhost:44365/api/rolemenus/${request.id.rolemenus.id}`;
  // console.log(request);
  const parameters = {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: getCookie("token"),
    },
    body: JSON.stringify(request.id.rolemenus),
  };

  return fetch(NEW_API_ENDPOINT, parameters)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
