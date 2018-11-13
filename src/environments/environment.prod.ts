export const environment = { production: true };

export let APIURL = "";

switch (window.location.hostname) {
  case "bootcampfootlocker-client.herokuapp.com/":
    APIURL = "https://bootcampfootlocker-server.herokuapp.com/";
    break;
  default:
    APIURL = "http://localhost:3000";
}
