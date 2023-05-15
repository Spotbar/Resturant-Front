import http from "../../httpService";
import headers from "../../header";

export default async function getRestaurantsService() {
  try {
    const response = http.get(
      "/Restaurant/Get",

      {
        headers: await headers(),
      }
    );

    return JSON.parse((await response).data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
