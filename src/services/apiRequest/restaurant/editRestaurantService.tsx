import http from "../../httpService";
import headers from "../../header";
import IRestaurant from "../../../Interface/IRestaurant";

export default async function editRestaurantService(restaurant: IRestaurant) {
  try {
    return http.put(
      "/Restaurant/UpdateRestaurant",
      {
        id: restaurant.Id,
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
