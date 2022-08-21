import http from "../httpService";
import headers from "../header";

export default async function getBillsService() {
  return http.get(
    "/posts",
    {

    },
    {
      headers: await headers(),
    }
  );
}
