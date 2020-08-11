import { getCookie } from "../../_utils/cookies";

export const homeService = (request) => {
  const NEW_API_ENDPOINT = "http://localhost:8000/users";

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    },
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
