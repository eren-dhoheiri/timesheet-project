import { getCookie } from "../../_utils/cookies";

export const addMenuService = (request) => {
  const NEW_API_ENDPOINT = `http://localhost:5000/api/MenuItems`;
  console.log(request);
  const parameters = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: getCookie("token"),
    },
    body: JSON.stringify(request.menu),
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
