import { getCookie } from "../../_utils/cookies";

export const deleteRoleServices = (request) => {
  const NEW_API_ENDPOINT = `http://localhost:58884/api/roles/${request.id.id}`;
  console.log(request);
  const parameters = {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      // Authorization: getCookie("token"),
    },
    body: JSON.stringify(request.id),
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
