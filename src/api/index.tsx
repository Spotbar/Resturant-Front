import loginService from "../services/apiRequest/loginService";
import getBillsService from "../services/apiRequest/getBillsService";

import UserLogin from "../Interface/UserLogin";
import GetAuthorizeService from "../services/apiRequest/Test/GetAuthorize";

import addRestaurantService from "../services/apiRequest/restaurant/addRestaurantService";
import ICreateRestaurant from "../Interface/ICreateRestaurant";

const login = async (userLogin: UserLogin) => {
  return await loginService(userLogin.username, userLogin.password);
};

const getBills = async () => {
  return await getBillsService();
};

const getAuthorize = async () => {
  return await GetAuthorizeService();
};

const AddRestaurant = async (restaurant: ICreateRestaurant) => {
  return await addRestaurantService(restaurant);
};

export { login, getBills, getAuthorize, AddRestaurant };
