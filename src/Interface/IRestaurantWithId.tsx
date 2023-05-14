import ICreateRestaurant from "./ICreateRestaurant";

interface RestaurantWithId extends ICreateRestaurant {
  id: string;
}

export default RestaurantWithId;