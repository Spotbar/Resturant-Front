import http from "../../httpService";
import headers from "../../header";

export default async function getRestaurantService() {
  try {
    return http.post(
      "/Restaurant/AddNewRestaurant",
      {
        id: "string",
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
