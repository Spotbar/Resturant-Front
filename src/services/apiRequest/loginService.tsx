import http from "../httpService";
import headers from "../header";

export default async function loginService(userName: string, password: string) {
  return http.post(
    "/Authenticate/authenticate",
    {
      UserName: userName,
      Password: password,
    },
    {
      headers: await headers(),
    }
  );
}
