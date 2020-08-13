import { getCookie } from "../../_utils/cookies";

<<<<<<< HEAD
export const addMEnuService = (request) => {
  const NEW_API_ENDPOINT = `https://localhost:44365/api/roles`;
  // console.log(request);
=======
export const addRoleServices = (request) => {
  const NEW_API_ENDPOINT = `http://localhost:58884/api/roles`;
  console.log(request);
>>>>>>> e7987d4cea138af6554c72942f1ad531b99a4120
  const parameters = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: getCookie("token"),
    },
    body: JSON.stringify(request.role),
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
