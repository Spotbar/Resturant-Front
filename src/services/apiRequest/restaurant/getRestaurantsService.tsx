import http from "../../httpService";
import headers from "../../header";
import ICreateRestaurant from "../../../Interface/ICreateRestaurant";

export default async function getRestaurantsService() {


  try {
    return http.get(
      "/Restaurant/Get",

      {
        headers: await headers(),
      }
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}
