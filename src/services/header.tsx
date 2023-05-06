import { AxiosRequestHeaders } from "axios";

async function header() {
  const token = sessionStorage.getItem("token");
  console.log(token)
  const refresh = sessionStorage.getItem("refresh");

  const headers: AxiosRequestHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    // "X-Access-Token": token,
  };

  if (token) {
    headers["X-Access-Token"] =  token;
    headers["Authorization"] = "Bearer " + token;
  }


  return headers;
}

export default header;
