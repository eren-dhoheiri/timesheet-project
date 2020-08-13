import { getCookie } from "../../_utils/cookies";

export const roleServices = (request) => {
  const NEW_API_ENDPOINT = "http://localhost:58884/api/roles";
  const parameters = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    //   Authorization: getCookie("token"),
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
