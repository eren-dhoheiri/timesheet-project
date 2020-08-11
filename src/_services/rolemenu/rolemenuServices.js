import { getCookie } from "../../_utils/cookies";

export const menuService = (request) => {
  const NEW_API_ENDPOINT = "https://localhost:44365/api/rolemenus";
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
