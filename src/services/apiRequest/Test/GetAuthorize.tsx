import http from "../../httpService";
import headers from "../../header";

export default async function GetAuthorizeService() {
 
try{
  return await http.get(
    "/Test/GetAuthorize",
 
    {
      headers: await headers(),
      // withCredentials: true,
    }
  );


}catch (error) {
  console.error(error);
  throw error;
}
  
}
