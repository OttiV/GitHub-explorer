import request from "superagent";
import { clientId, clientSecret } from "../constants";

export const requestToken = code => {
  request
    .post("https://github.com/login/oauth/access_token")
    .set({ Authorization: "Basic", Accept: "application/json" })
    .send({
      client_id: clientId,
      client_secret: clientSecret,
      code: code
    })
    .then(response => {
      return response.text();
    })
    .then(paramsString => {
      let params = new URLSearchParams(paramsString);
      console.log("access_token", params.get("access_token"));
    });
};
