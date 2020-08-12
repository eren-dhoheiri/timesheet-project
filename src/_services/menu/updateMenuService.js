import { getCookie } from "../../_utils/cookies";

export const updateMenuService = (request) => {
  const NEW_API_ENDPOINT = `http://localhost:5000/api/MenuItems/${request.id.menu.id}`;
  console.log(request);
  const parameters = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: getCookie("token"),
    },
    body: JSON.stringify(request.id.menu),
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
