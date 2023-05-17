import loginService from "../services/apiRequest/loginService";
import getBillsService from "../services/apiRequest/getBillsService";

import UserLogin from "../Interface/UserLogin";
import GetAuthorizeService from "../services/apiRequest/Test/GetAuthorize";

import addRestaurantService from "../services/apiRequest/restaurant/addRestaurantService";
import ICreateRestaurant from "../Interface/ICreateRestaurant";
import getRestaurantsService from "../services/apiRequest/restaurant/getRestaurantsService";
import getRestaurantByIdService from "../services/apiRequest/restaurant/getRestaurantByIdService";
import editRestaurantByIdService from "../services/apiRequest/restaurant/editRestaurantService";
import IRestaurant from "../Interface/IRestaurant";

const login = async (userLogin: UserLogin) => {
  return await loginService(userLogin.username, userLogin.password);
};

const getBills = async () => {
  return await getBillsService();
};

const getAuthorize = async () => {
  return await GetAuthorizeService();
};

const getRestaurants = async () => {
  return await getRestaurantsService();
};
const getRestaurantById = async (id: string) => {
  return await getRestaurantByIdService(id);
};
const editRestaurantById = async (restaurant: IRestaurant) => {
  return await editRestaurantByIdService(restaurant);
};

const AddRestaurant = async (restaurant: ICreateRestaurant) => {
  return await addRestaurantService(restaurant);
};

export {
  login,
  getBills,
  getAuthorize,
  getRestaurants,
  getRestaurantById,
  editRestaurantById,
  AddRestaurant,
};
