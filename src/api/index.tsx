import loginService from "../services/apiRequest/loginService";
import getBillsService from "../services/apiRequest/getBillsService";

import UserLogin from "../Interface/UserLogin";
import GetAuthorizeService from "../services/apiRequest/Test/GetAuthorize";

const login = async (userLogin: UserLogin) => {
  return await loginService(userLogin.username, userLogin.password);
};

const getBills = async () => {
  return await getBillsService();
};

const getAuthorize = async () => {
  return await GetAuthorizeService();
};

export { login, getBills, getAuthorize, };
