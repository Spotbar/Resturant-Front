import { AxiosRequestHeaders } from "axios";

async function header() {

  const headers:AxiosRequestHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  };

  return headers;
}

export default header;
