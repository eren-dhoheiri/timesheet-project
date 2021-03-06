import { getCookie } from "../../_utils/cookies";

export const updateRoleServices = (request) => {
  const NEW_API_ENDPOINT = `http://localhost:58884/api/roles/${request.id.role.id}`;
  console.log(request);

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
