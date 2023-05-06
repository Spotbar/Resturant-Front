import http from "../httpService";
import headers from "../header";

export default async function loginService(userName: string, password: string) {

try{
  return await http.post(
    "/Authenticate/authenticate",
    {
      UserName: userName,
      Password: password,
    },
    {
      headers: await headers(),
      // withCredentials: true,
    }
  );




  // const cookieString = response.headers && response.headers['Set-Cookie'][0];
  // const refreshToken = cookieString.split(';')[0].split('=')[1];
  // console.log(cookieString)
}catch (error) {
  console.error(error);
  throw error;
}
  
}
