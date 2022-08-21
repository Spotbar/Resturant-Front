import loginService from "../services/apiRequest/loginService";
import getBillsService from "../services/apiRequest/getBillsService";



const login = async (userLogin) => {
  return await loginService(userLogin.username, userLogin.password);
};

const getBills = async () => {
  return await getBillsService();
};

export {
  login,
  getBills
};
