import loginService from "../services/apiRequest/loginService";
import getBillsService from "../services/apiRequest/getBillsService";

import UserLogin from "../Interface/UserLogin";
import GetAuthorizeService from "../services/apiRequest/Test/GetAuthorize";

import addRestaurantService from "../services/apiRequest/restaurant/addRestaurantService";
import getRestaurantsService from "../services/apiRequest/restaurant/getRestaurantsService";
import getRestaurantByIdService from "../services/apiRequest/restaurant/getRestaurantByIdService";
import editRestaurantByIdService from "../services/apiRequest/restaurant/editRestaurantService";
import IRestaurant from "../Interface/IRestaurant";
import getFactorService from "../services/apiRequest/factor/getFactorByIdService";
import getFactorsService from "../services/apiRequest/factor/getFactorsService";
import getFactorByIdService from "../services/apiRequest/factor/getFactorByIdService";
import editFactorService from "../services/apiRequest/factor/editFactorService";
import IFactor from "../Interface/IFactor";
import addFactorService from "../services/apiRequest/factor/addFactorService";
const login = async (userLogin: UserLogin) => {
  return await loginService(userLogin.username, userLogin.password);
};

const getBills = async () => {
  return await getBillsService();
};

const getAuthorize = async () => {
  return await GetAuthorizeService();
};
//Restaurant
const getRestaurants = async () => {
  return await getRestaurantsService();
};
const getRestaurantById = async (id: string) => {
  return await getRestaurantByIdService(id);
};
const editRestaurantById = async (restaurant: IRestaurant) => {
  return await editRestaurantByIdService(restaurant);
};

const AddRestaurant = async (restaurant: IRestaurant) => {
  return await addRestaurantService(restaurant);
};

//Factor

const getFactors = async () => {
  return await getFactorsService();
};
const getFactorById = async (id: string) => {
  return await getFactorByIdService(id);
};
const editFactorById = async (factor: IFactor) => {
  return await editFactorService(factor);
};

const AddFactor = async (factor: IFactor) => {
  return await addFactorService(factor);
};

export {
  login,
  getBills,
  getAuthorize,
  getRestaurants,
  getRestaurantById,
  editRestaurantById,
  AddRestaurant,
  getFactors,
  getFactorById,
  editFactorById,
  AddFactor,
};
