import http from "../../httpService";
import headers from "../../header";
import ICreateRestaurant from "../../../Interface/ICreateRestaurant";

export default async function addRestaurantService(
  restaurant: ICreateRestaurant
) {

  console.log(restaurant)
  try {
    return http.post(
      "/Restaurant/AddNewRestaurant",
      {
        name: restaurant?.name,
        tel: restaurant?.tell,
        opratorName: restaurant?.seller,
        mobile: restaurant?.mobile,
        address: restaurant?.address,
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
