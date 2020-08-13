import { getCookie } from "../../_utils/cookies";

<<<<<<< HEAD
export const updateMenuService = (request) => {
  const NEW_API_ENDPOINT = `https://localhost:44365/api/roles/${request.id.roles.id}`;
  // console.log(request);
=======
export const updateRoleServices = (request) => {
  const NEW_API_ENDPOINT = `http://localhost:58884/api/roles/${request.id.role.id}`;
  console.log(request);
>>>>>>> e7987d4cea138af6554c72942f1ad531b99a4120
  const parameters = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: getCookie("token"),
    },
    body: JSON.stringify(request.id.role),
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
