import { getCookie } from "../../_utils/cookies";

export const deleteService = (request) => {
  const NEW_API_ENDPOINT = `http://localhost:8000/users/${request.id.id}`;

  const parameters = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    },
    body: JSON.stringify(request.id),
  };

  return fetch(NEW_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
