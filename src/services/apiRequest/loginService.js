import http from "../httpService";
import headers from "../header";

export default async function loginService(userName, password) {
  return http.post(
    "/account/login",
    {
      UserName: userName,
      Password: password,
    },
    {
      headers: await headers(),
    }
  );
}
