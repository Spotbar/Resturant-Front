import loginService from "../services/apiRequest/loginService";
import getBillsService from "../services/apiRequest/getBillsService";

import  UserLogin from "../Interface/UserLogin";



const login = async (userLogin:UserLogin) => {
  return await loginService(userLogin.username, userLogin.password);
};

const getBills = async () => {
  return await getBillsService();
};

export {
  login,
  getBills
};
