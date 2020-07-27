export const registerUserService = (request) => {
  // const cors = "https://cors-anywhere.herokuapp.com/";
  const REGISTER_API_ENDPOINT = "http://localhost:9000/register";

  const parameters = {
    method: "POST",
    header: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    mode: "no-cors",
    body: JSON.stringify(request.user),
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then((response) => {
      console.log(json);
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const loginUserService = (request) => {
  // const cors = "https://cors-anywhere.herokuapp.com/";
  const LOGIN_API_ENDPOINT = "http://localhost:9000/login";

  const parameters = {
    method: "POST",
    header: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    mode: "no-cors",
    body: JSON.stringify(request.user),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
