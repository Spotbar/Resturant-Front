import http from "../../httpService";
import headers from "../../header";

export default async function getRestaurantService(id: string) {
  try {
    const response = http.get(
      `/Restaurant/Get_Id?restaurantId=${id}`,
      // {
      //   id: id,
      // },
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
