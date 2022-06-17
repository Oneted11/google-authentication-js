// import { client_id } from "./constants.js";

var token;
var client;
var decoded_token;
document.getElementById("gisLib").onload = function () {
  client = google.accounts.id.initialize({
    client_id:
      "345449971495-4lncidafh4k98fqnr16a5bp76nmgveha.apps.googleusercontent.com",

    callback: (response) => {
      token = response.credential;
      console.log("decoded token>>>>>>>>>>>", window.jwt_decode(token));
      decoded_token = window.jwt_decode(response.credential);
      showData();
      document.getElementById("google_button").classList.add("hide");
    },
  });
  google.accounts.id.renderButton(document.getElementById("google_button"), {
    theme: "outline",
    size: "large",
  });
  // google.accounts.id.prompt();
};
// console.log({ token, client });
// function getToken() {
//   client.requestAccessToken();
//   console.log("get>>>>>>>>>>>>>>>>>>>>>", { token, client });
// }

// function revokeToken() {
//   google.accounts.oauth2.revoke(token, () => {
//     console.log("access token revoked", window.jwt_decode(token));
// console.log(
//   "revoke>>>>>>>>>>>>>>>>>>>>>>>>>",
//   token,
//   window.jwt_decode(token, { header: true }),
//   client
// );
//   });
// }
// document.getElementById("getT").onclick = getToken();
// document.getElementById("revokeT").onclick = revokeToken();
function showData() {
  document.getElementById(
    "profile_data"
  ).innerHTML = `<img src=${decoded_token.picture} >
  <br>
  <p>Name: ${decoded_token.name}</p>
  <p>Email: ${decoded_token.email}</p>
  <button id="log_out" onClick='revokeToken()'>Log Out</button>`;
}
function revokeToken() {
  google.accounts.id.revoke(decoded_token.email, () => {
    document.getElementById("google_button").classList.remove("hide");
    document.getElementById("profile_data").innerHTML = "";
  });
}
