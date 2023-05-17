import http from "../../httpService";
import headers from "../../header";

import IRestaurant from "../../../Interface/IRestaurant";

export default async function addRestaurantService(restaurant: IRestaurant) {
  console.log(restaurant);
  try {
    return http.post(
      "/Restaurant/AddNewRestaurant",
      {
        name: restaurant.Name,
        tel: restaurant.Tel,
        opratorName: restaurant.OpratorName,
        mobile: restaurant.Mobile,
        address: restaurant.Address,
      },
      {
        headers: await headers(),
      }
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}
